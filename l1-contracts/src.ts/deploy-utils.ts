import * as hardhat from "hardhat";
import "@nomiclabs/hardhat-ethers";
import { ethers } from "ethers";
import { SingletonFactoryFactory } from "../typechain";
import { web3Provider } from "../scripts/utils";
import * as fs from 'fs';
import { formatUnits } from "ethers/lib/utils";

const provider = web3Provider();

export async function deployViaCreate2(
  deployWallet: ethers.Wallet,
  contractName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args: any[],
  create2Salt: string,
  ethTxOptions: ethers.providers.TransactionRequest,
  create2FactoryAddress: string,
  verbose: boolean = true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  libraries?: any
): Promise<[string, string]> {
  // [address, txHash]

  const log = (msg: string) => {
    if (verbose) {
      console.log(msg);
    }
  };
  log(`Deploying ${contractName}`);
  console.log("-----------------------------Morty create2FactoryAddress:", create2FactoryAddress)
  const create2Factory = SingletonFactoryFactory.connect(create2FactoryAddress, deployWallet);
  const contractFactory = await hardhat.ethers.getContractFactory(contractName, {
    signer: deployWallet,
    libraries,
  });
  const bytecode = contractFactory.getDeployTransaction(...[...args, ethTxOptions]).data;
  const expectedAddress = ethers.utils.getCreate2Address(
    create2Factory.address,
    create2Salt,
    ethers.utils.keccak256(bytecode)
  );

  const deployedBytecodeBefore = await deployWallet.provider.getCode(expectedAddress);
  if (ethers.utils.hexDataLength(deployedBytecodeBefore) > 0) {
    log(`Contract ${contractName} already deployed`);
    return [expectedAddress, ethers.constants.HashZero];
  }
  ethTxOptions.gasPrice = await getGasPrice()
  ethTxOptions.nonce = await deployWallet.getTransactionCount()
  const tx = await create2Factory.deploy(bytecode, create2Salt, ethTxOptions);
  const receipt = await tx.wait(2);

  const gasUsed = receipt.gasUsed;
  log(`${contractName} deployed, gasUsed: ${gasUsed.toString()}`);

  // Morty
  if (receipt.status != 1) {
    console.log("Failed to deploy", contractName, "receipt status", receipt.status)
    throw new Error("Failed to deploy bytecode via create2 factory", );
  }

  // Morty, rpc error, still get no code
  const deployedBytecodeAfter = await deployWallet.provider.getCode(expectedAddress);
  if (ethers.utils.hexDataLength(deployedBytecodeAfter) == 0) {
    console.log("expectedAddress:", expectedAddress)
    return [expectedAddress, tx.hash];
    throw new Error("Failed to deploy bytecode via create2 factory", );
  }

  return [expectedAddress, tx.hash];
}


export async function getGasPrice() {
  var gasPrice = (await provider.getGasPrice());
  const gasPriceMultiplier: string = process.env.GAS_PRICE_MULTIPLIER || '120';
  console.log("gas price multiplier:", gasPriceMultiplier)
  const result = gasPrice.mul(gasPriceMultiplier).div(100)
  console.log(`Using gas price: ${formatUnits(result, "gwei")} gwei`);
  return result
}

export function getCreate2Salt() {
  const ZKSYNC_HOME = process.env.ZKSYNC_HOME;
  const saltFile = `${ZKSYNC_HOME}/etc/env/.${process.env.ZKSYNC_ENV}_salt`;
  var salt
  
  // read salt from file or else generate salt
  if (fs.existsSync(saltFile)) {
    salt = fs.readFileSync(saltFile).toString().trim();
    console.log("get salt from file", saltFile, "salt", salt)
  } else {
    salt = ethers.utils.hexlify(ethers.utils.randomBytes(32));
    console.log("generate salt", salt)
    fs.writeFile(saltFile, salt, (err) => {
      if (err) {
        console.error('Error writing salt to salt file:', err);
      } else {
        console.log('salt has been save successfully.');
      }
    });
  }

  return salt
}