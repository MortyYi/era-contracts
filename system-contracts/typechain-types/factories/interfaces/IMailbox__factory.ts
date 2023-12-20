/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IMailbox, IMailboxInterface } from "../../interfaces/IMailbox";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_l2BatchNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2MessageIndex",
        type: "uint256",
      },
      {
        internalType: "uint16",
        name: "_l2TxNumberInBlock",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "finalizeEthWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMailbox__factory {
  static readonly abi = _abi;
  static createInterface(): IMailboxInterface {
    return new Interface(_abi) as IMailboxInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IMailbox {
    return new Contract(address, _abi, runner) as unknown as IMailbox;
  }
}
