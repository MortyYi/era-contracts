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
import type { NonPayableOverrides } from "../common";
import type {
  ComplexUpgrader,
  ComplexUpgraderInterface,
} from "../ComplexUpgrader";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_delegateTo",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x000400000000000200000000030100190000006003300270000000470430019700030000004103550002000000010355000000470030019d000100000000001f0000008001000039000000400010043f0000000101200190000000440000c13d0000000004000031000000040140008c0000004c0000413d0000000202000367000000000102043b00000049011001970000004a0110009c0000004c0000c13d000000040140008a0000004b03000041000000400510008c000000000500001900000000050340190000004b01100197000000000601004b000000000300a0190000004b0110009c00000000010500190000000001036019000000000101004b0000004c0000c13d0000000401200370000000000101043b0000004c0310009c0000004c0000213d0000002403200370000000000503043b0000004d0350009c0000004c0000213d00000023035000390000004b06000041000000000743004b000000000700001900000000070680190000004b084001970000004b03300197000000000983004b0000000006008019000000000383013f0000004b0330009c00000000030700190000000003066019000000000303004b0000004c0000c13d0000000403500039000000000232034f000000000302043b0000004d0230009c0000004c0000213d00000024025000390000000005230019000000000445004b0000004c0000213d0118004e0000040f0000000001000019000001190001042e0000000001000416000000000101004b0000004c0000c13d0000002001000039000001000010044300000120000004430000004801000041000001190001042e00000000010000190000011a000104300003000000000002000300000003001d000200000002001d0000000002000411000080070220008c000000dc0000c13d00000052020000410000000000200439000100000001001d000000040010044300000047010000410000000002000414000000470320009c0000000001024019000000c00110021000000053011001c700008002020000390118010e0000040f0000000102200190000000f10000613d000000400800043d000000000101043b000000000101004b0000000309000029000000f30000613d0000001f0190018f000000020200002900000002032003670000000504900272000000750000613d000000000500001900000005065002100000000007680019000000000663034f000000000606043b00000000006704350000000105500039000000000645004b0000006d0000413d000000000501004b000000840000613d0000000504400210000000000343034f00000000044800190000000301100210000000000504043300000000051501cf000000000515022f000000000303043b0000010001100089000000000313022f00000000011301cf000000000151019f00000000001404350000000001980019000000000001043500000000010004140000000102000029000000040320008c0000008d0000c13d00000001030000310000000002000019000000a10000013d0000004703000041000000470490009c000000000403001900000000040940190000006004400210000000470580009c000000000503001900000000050840190000004005500210000000000545019f000000470410009c0000000001038019000000c001100210000000000151019f011801130000040f000000010220015f00030000000103550000006001100270000100470010019d00000047031001970000006001000039000000000403004b000000d30000613d000000540130009c000000d60000813d0000001f01300039000000200400008a000000000141016f0000003f01100039000000000441016f000000400100043d0000000004410019000000000514004b000000000500001900000001050040390000004d0640009c000000d60000213d0000000105500190000000d60000c13d000000400040043f0000000003310436000000030400036700000001060000310000001f0560018f0000000506600272000000c40000613d000000000700001900000005087002100000000009830019000000000884034f000000000808043b00000000008904350000000107700039000000000867004b000000bc0000413d000000000705004b000000d30000613d0000000506600210000000000464034f00000000036300190000000305500210000000000603043300000000065601cf000000000656022f000000000404043b0000010005500089000000000454022f00000000045401cf000000000464019f00000000004304350000000102200190000001040000c13d000000000001042d000000550100004100000000001004350000004101000039000000040010043f00000056010000410000011a00010430000000400100043d00000064021000390000004e03000041000000000032043500000044021000390000004f030000410000000000320435000000240210003900000024030000390000000000320435000000500200004100000000002104350000000402100039000000200300003900000000003204350000004702000041000000470310009c0000000001028019000000400110021000000051011001c70000011a0001043000000000010000190000011a00010430000000440180003900000057030000410000000000310435000000240180003900000013030000390000000000310435000000500100004100000000001804350000000401800039000000200300003900000000003104350000004701000041000000470380009c0000000001084019000000400110021000000058011001c70000011a0001043000000000210104340000004703000041000000470410009c0000000001038019000000470420009c000000000203801900000040022002100000006001100210000000000121019f0000011a0001043000000111002104230000000102000039000000000001042d0000000002000019000000000001042d00000116002104250000000102000039000000000001042d0000000002000019000000000001042d0000011800000432000001190001042e0000011a00010430000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000040000001000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000c987336c000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff4f5945520000000000000000000000000000000000000000000000000000000043616e206f6e6c792062652063616c6c656420627920464f5243455f4445504c08c379a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000840000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83020000020000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000000000000100000000000000004e487b7100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002400000000000000000000000044656c65676174656520697320616e20454f410000000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b3ae095b702686e9c828067f7814feec49aed4be7494fed7813e54a61aa5fdd3";

type ComplexUpgraderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComplexUpgraderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComplexUpgrader__factory extends ContractFactory {
  constructor(...args: ComplexUpgraderConstructorParams) {
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
      ComplexUpgrader & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ComplexUpgrader__factory {
    return super.connect(runner) as ComplexUpgrader__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComplexUpgraderInterface {
    return new Interface(_abi) as ComplexUpgraderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ComplexUpgrader {
    return new Contract(address, _abi, runner) as unknown as ComplexUpgrader;
  }
}
