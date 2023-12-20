/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MockERC20Approve,
  MockERC20ApproveInterface,
} from "../../test-contracts/MockERC20Approve";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x00020000000000020001000000000002000100000001035500000060011002700000001f0010019d0000008001000039000000400010043f0000000101200190000000440000c13d0000000001000031000000040110008c000000660000413d0000000101000367000000000101043b000000e001100270000000210210009c0000004c0000613d000000220110009c000000660000c13d0000000001000416000000000101004b000000660000c13d000000040100008a00000000011000310000002302000041000000400310008c000000000300001900000000030240190000002301100197000000000401004b000000000200a019000000230110009c00000000010300190000000001026019000000000101004b000000660000c13d00000004010000390000000101100367000000000101043b000000240210009c000000660000213d000000800010043f00000024010000390000000101100367000000000101043b000000a00010043f0000001f0100004100000000020004140000001f0320009c0000000001024019000000c00110021000000026011001c70000800d0200003900000001030000390000002704000041000100000003001d007500700000040f0000000101200190000000660000613d000000400100043d000000010200002900000000002104350000001f020000410000001f0310009c0000000001028019000000400110021000000025011001c7000000760001042e0000000001000416000000000101004b000000660000c13d0000002001000039000001000010044300000120000004430000002001000041000000760001042e0000000001000416000000000101004b000000660000c13d000000040100008a00000000011000310000002302000041000000400310008c000000000300001900000000030240190000002301100197000000000401004b000000000200a019000000230110009c00000000010300190000000001026019000000000101004b000000660000c13d00000001010003670000000402100370000000000202043b000000240220009c000000660000213d0000002401100370000000000101043b000000240110009c000000680000a13d00000000010000190000007700010430000000400100043d00000000000104350000001f020000410000001f0310009c0000000001028019000000400110021000000025011001c7000000760001042e00000073002104210000000102000039000000000001042d0000000002000019000000000001042d0000007500000432000000760001042e0000007700010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000020000000000000000000000000000004000000100000000000000000000000000000000000000000000000000000000000000000000000000dd62ed3e00000000000000000000000000000000000000000000000000000000095ea7b38000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000200000000000000000000000000200000000000000000000000000000000000040000000800000000000000000f13bfe0b6ec5df39265dccb0a01a09aa4162489c7a083dc6670bde0255d02ca7992c96fecd2919c9366a99c7b393cb2cc945484b3188cdbfd3b9c7b31c55d487";

type MockERC20ApproveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ApproveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20Approve__factory extends ContractFactory {
  constructor(...args: MockERC20ApproveConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockERC20Approve & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MockERC20Approve__factory {
    return super.connect(runner) as MockERC20Approve__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20ApproveInterface {
    return new Interface(_abi) as MockERC20ApproveInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockERC20Approve {
    return new Contract(address, _abi, runner) as unknown as MockERC20Approve;
  }
}
