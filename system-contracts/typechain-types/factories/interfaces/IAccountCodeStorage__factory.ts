/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IAccountCodeStorage,
  IAccountCodeStorageInterface,
} from "../../interfaces/IAccountCodeStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_input",
        type: "uint256",
      },
    ],
    name: "getCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "codeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_input",
        type: "uint256",
      },
    ],
    name: "getCodeSize",
    outputs: [
      {
        internalType: "uint256",
        name: "codeSize",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getRawCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "codeHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "markAccountCodeHashAsConstructed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "storeAccountConstructedCodeHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "storeAccountConstructingCodeHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IAccountCodeStorage__factory {
  static readonly abi = _abi;
  static createInterface(): IAccountCodeStorageInterface {
    return new Interface(_abi) as IAccountCodeStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IAccountCodeStorage {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IAccountCodeStorage;
  }
}
