import { Command } from "commander";
import { Wallet, ethers } from "ethers";
import { Deployer } from "../src.ts/deploy";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import * as fs from "fs";
import * as path from "path";
import { web3Provider } from "./utils";
import { getCreate2Salt, getGasPrice } from "../src.ts/deploy-utils";

console.log("------------------------------Morty: process.env.ETH_CLIENT_WEB3_URL-------------------------", process.env.ETH_CLIENT_WEB3_URL)
const provider = web3Provider();
const testConfigPath = path.join(process.env.ZKSYNC_HOME as string, "etc/test_config/constant");
const ethTestConfig = JSON.parse(fs.readFileSync(`${testConfigPath}/eth.json`, { encoding: "utf-8" }));

async function main() {
  const program = new Command();

  program.version("0.1.0").name("deploy").description("deploy L1 contracts");

  program
    .option("--private-key <private-key>")
    .option("--gas-price <gas-price>")
    .option("--nonce <nonce>")
    .option("--owner-address <owner-address>")
    .option("--create2-salt <create2-salt>")
    .option("--diamond-upgrade-init <version>")
    .option("--only-verifier")
    .action(async (cmd) => {
      const deployWallet = cmd.privateKey
        ? new Wallet(cmd.privateKey, provider)
        : Wallet.fromMnemonic(
            process.env.MNEMONIC ? process.env.MNEMONIC : ethTestConfig.mnemonic,
            "m/44'/60'/0'/0/1"
          ).connect(provider);
      console.log(`Using deployer wallet: ${deployWallet.address}`);

      const ownerAddress = cmd.ownerAddress ? cmd.ownerAddress : deployWallet.address;
      console.log(`Using owner address: ${ownerAddress}`);

      var gasPrice = cmd.gasPrice ? parseUnits(cmd.gasPrice, "gwei") : await provider.getGasPrice();
      console.log(`Using gas price: ${formatUnits(gasPrice, "gwei")} gwei`);
      console.log(`Using nonce: ${cmd.nonce}`);
      let nonce = cmd.nonce ? parseInt(cmd.nonce) : await deployWallet.getTransactionCount();
      console.log(`Using nonce: ${nonce}`);
      
      const create2Salt = getCreate2Salt();

      const deployer = new Deployer({
        deployWallet,
        ownerAddress,
        verbose: true,
      });

      // Create2 factory already deployed on the public networks, only deploy it on local node
      // if (process.env.CHAIN_ETH_NETWORK === "localhost") {
      // morty
      if (cmd.onlyVerifier) {
        gasPrice = await getGasPrice()
        await deployer.deployCreate2Factory({ gasPrice, nonce });
        nonce++;
        
        await deployer.deployMulticall3(create2Salt, { gasPrice, nonce });
        nonce++;
      }

      if (cmd.onlyVerifier) {
        gasPrice = (await provider.getGasPrice()).mul(120).div(100);
        await deployer.deployVerifier(create2Salt, { gasPrice, nonce });
        return;
      }

      // Deploy diamond upgrade init contract if needed
      const diamondUpgradeContractVersion = cmd.diamondUpgradeInit || 1;
      if (diamondUpgradeContractVersion) {
        await deployer.deployDiamondUpgradeInit(create2Salt, diamondUpgradeContractVersion, {
          gasPrice,
          nonce,
        });
        nonce++;
      }

      await deployer.deployDefaultUpgrade(create2Salt, {
        gasPrice,
        nonce,
      });
      nonce++;

      await deployer.deployGovernance(create2Salt, { gasPrice, nonce });
      await deployer.deployZkSyncContract(create2Salt, gasPrice, nonce + 1);
      await deployer.deployBridgeContracts(create2Salt, gasPrice); // Do not pass nonce, since it was increment after deploying zkSync contracts
      await deployer.deployWethBridgeContracts(create2Salt, gasPrice);
      await deployer.deployValidatorTimelock(create2Salt, { gasPrice });
    });

  console.log("--------------------------------------Morty: process.argv", process.argv);
  await program.parseAsync(process.argv);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
