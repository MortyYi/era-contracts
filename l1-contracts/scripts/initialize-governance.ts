import { Command } from "commander";
import { ethers, Wallet } from "ethers";
import { Deployer } from "../src.ts/deploy";
import { web3Provider } from "./utils";

import * as fs from "fs";
import * as path from "path";
import { getGasPrice } from "../src.ts/deploy-utils";

const provider = web3Provider();
const testConfigPath = path.join(process.env.ZKSYNC_HOME as string, "etc/test_config/constant");
const ethTestConfig = JSON.parse(fs.readFileSync(`${testConfigPath}/eth.json`, { encoding: "utf-8" }));

async function main() {
  const program = new Command();

  program.version("0.1.0").name("initialize-governance");

  program
    .option("--private-key <private-key>")
    .option("--owner-address <owner-address>")
    .option("--gas-price <gas-price>")
    .action(async (cmd) => {
      const deployWallet = cmd.privateKey
        ? new Wallet(cmd.privateKey, provider)
        : Wallet.fromMnemonic(
            process.env.MNEMONIC ? process.env.MNEMONIC : ethTestConfig.mnemonic,
            "m/44'/60'/0'/0/1"
          ).connect(provider);
      console.log(`Using deployer wallet: ${deployWallet.address}`);

      const ownerAddress = cmd.ownerAddress ? cmd.ownerAddress : deployWallet.address;

      const deployer = new Deployer({
        deployWallet,
        ownerAddress,
        verbose: true,
      });

      const governance = deployer.governanceContract(deployWallet);
      const zkSync = deployer.zkSyncContract(deployWallet);

      const erc20Bridge = deployer.transparentUpgradableProxyContract(
        deployer.addresses.Bridges.ERC20BridgeProxy,
        deployWallet
      );
      const wethBridge = deployer.transparentUpgradableProxyContract(
        deployer.addresses.Bridges.WethBridgeProxy,
        deployWallet
      );

      var gasPrice = await getGasPrice()
      await (await erc20Bridge.changeAdmin(governance.address, {gasPrice})).wait();
      gasPrice = await getGasPrice()
      await (await wethBridge.changeAdmin(governance.address, {gasPrice})).wait();
      gasPrice = await getGasPrice()
      await (await zkSync.setPendingGovernor(governance.address, {gasPrice})).wait();

      const call = {
        target: zkSync.address,
        value: 0,
        data: zkSync.interface.encodeFunctionData("acceptGovernor"),
      };

      const operation = {
        calls: [call],
        predecessor: ethers.constants.HashZero,
        salt: ethers.constants.HashZero,
      };
      gasPrice = await getGasPrice()
      await (await governance.scheduleTransparent(operation, 0, {gasPrice})).wait();
      gasPrice = await getGasPrice()
      await (await governance.execute(operation, {gasPrice})).wait();
    });

  await program.parseAsync(process.argv);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
