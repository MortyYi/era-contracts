/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from "@ethersproject/contracts";

import type { BeaconProxy } from "./BeaconProxy";

export class BeaconProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    beacon: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<BeaconProxy> {
    return super.deploy(beacon, data, overrides || {}) as Promise<BeaconProxy>;
  }
  getDeployTransaction(
    beacon: string,
    data: BytesLike,
    overrides?: PayableOverrides
  ): TransactionRequest {
    return super.getDeployTransaction(beacon, data, overrides || {});
  }
  attach(address: string): BeaconProxy {
    return super.attach(address) as BeaconProxy;
  }
  connect(signer: Signer): BeaconProxyFactory {
    return super.connect(signer) as BeaconProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeaconProxy {
    return new Contract(address, _abi, signerOrProvider) as BeaconProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "beacon",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x0004000000000002000600000000000200000000030100190000006003300270000001020030019d00000102033001970003000000310355000200000001035500000001022001900000001c0000c13d000000000131034f0000008002000039000000400020043f0000010c02000041000000000202041a0000010a04000041000000800040043f00000104022001970000000004000414000000000303004b000000580000c13d000000040320008c0000005f0000c13d0000000103000031000000200230008c000000000403001900000020040080390000008a0000013d0000009f023000390000010302200197000000400020043f0000001f0230018f00000005043002720000002b0000613d00000000050000190000000506500210000000000761034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b000000230000413d000000000502004b0000003a0000613d0000000504400210000000000141034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000101043b0000010002200089000000000121022f00000000012101cf000000000151019f00000000001404350000003f0130008c000000fe0000a13d000000800900043d000001040190009c000000fe0000213d000000a00200043d000001050120009c000000fe0000213d0000001f012000390000010604000041000000000531004b000000000500001900000000050480190000010601100197000000000601004b0000000004008019000001060110009c000000000405c019000000000104004b000000fe0000c13d00000080012000390000000001010433000001070410009c000001780000413d0000011c0100004100000000001004350000004101000039000000040010043f0000011d010000410000040300010430000000040320008c000000ca0000c13d0000000103000031000000200230008c00000000040300190000002004008039000000f50000013d0000010201000041000001020340009c0000000004018019000000c0014002100000011e011001c7040103f70000040f000000000301001900000060033002700000010203300197000000200430008c000000000403001900000020040080390000001f0540018f0000000506400272000000770000613d00000000070000190000000508700210000000000981034f000000000909043b000000800880003900000000009804350000000107700039000000000867004b0000006f0000413d000000000705004b000000860000613d0000000506600210000000000761034f00000003055002100000008006600039000000000806043300000000085801cf000000000858022f000000000707043b0000010005500089000000000757022f00000000055701cf000000000585019f0000000000560435000100000003001f00030000000103550000000102200190000001000000613d0000009f02400039000000e00220018f000000400020043f000000200230008c000000fe0000413d000000800200043d000001040420009c000000fe0000213d000000020500036700000000040000310000001f0740018f00000005064002720000009f0000613d00000000080000190000000509800210000000000a95034f000000000a0a043b0000000000a904350000000108800039000000000968004b000000980000413d000000000807004b000000ad0000613d00000003077002100000000506600210000000000806043300000000087801cf000000000878022f000000000565034f000000000505043b0000010007700089000000000575022f00000000057501cf000000000585019f00000000005604350000000005000414000000040620008c000001c00000c13d0000001f0430018f0000000502300272000000bb0000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000625004b000000b40000413d000000000504004b000001e90000613d00000003044002100000000502200210000000000502043300000000054501cf000000000545022f000000000121034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000151019f0000000000120435000001e90000013d0000010201000041000001020340009c0000000004018019000000c0014002100000011e011001c7040103f70000040f000000000301001900000060033002700000010203300197000000200430008c000000000403001900000020040080390000001f0540018f0000000506400272000000e20000613d00000000070000190000000508700210000000000981034f000000000909043b000000800880003900000000009804350000000107700039000000000867004b000000da0000413d000000000705004b000000f10000613d0000000506600210000000000761034f00000003055002100000008006600039000000000806043300000000085801cf000000000858022f000000000707043b0000010005500089000000000757022f00000000055701cf000000000585019f0000000000560435000100000003001f000300000001035500000001022001900000011d0000613d0000001f02400039000000600220018f00000080022001bf000000400020043f000000200230008c000000fe0000413d000000800200043d000001040420009c000001400000a13d00000000010000190000040300010430000000400200043d0000001f0430018f00000005053002720000010d0000613d000000000600001900000005076002100000000008720019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000001050000413d000000000604004b0000011c0000613d0000000505500210000000000151034f00000000055200190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f0000000000150435000001390000013d000000400200043d0000001f0430018f00000005053002720000012a0000613d000000000600001900000005076002100000000008720019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000001220000413d000000000604004b000001390000613d0000000505500210000000000151034f00000000055200190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f00000000001504350000010201000041000001020420009c000000000201801900000040012002100000006002300210000000000121019f0000040300010430000000020500036700000000040000310000001f0740018f00000005064002720000014d0000613d00000000080000190000000509800210000000000a95034f000000000a0a043b0000000000a904350000000108800039000000000968004b000001460000413d000000000807004b0000015b0000613d00000003077002100000000506600210000000000806043300000000087801cf000000000878022f000000000565034f000000000505043b0000010007700089000000000575022f00000000057501cf000000000585019f00000000005604350000000005000414000000040620008c000001ea0000c13d0000001f0430018f0000000502300272000001690000613d00000000050000190000000506500210000000000761034f000000000707043b00000000007604350000000105500039000000000625004b000001620000413d000000000504004b000002130000613d00000003044002100000000502200210000000000502043300000000054501cf000000000545022f000000000121034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000151019f0000000000120435000002130000013d0000003f04100039000000200700008a000000000474016f000000400800043d0000000004480019000000000584004b00000000050000190000000105004039000001050640009c000000520000213d0000000105500190000000520000c13d0000008003300039000000400040043f0000000006180436000000a0022000390000000004210019000000000334004b000000fe0000213d000500000008001d000400000007001d000000000301004b000001970000613d000000000300001900000000046300190000000005230019000000000505043300000000005404350000002003300039000000000413004b000001900000413d000300000006001d0000000001160019000000000001043500000108010000410000000000100439000600000009001d000000040090044300000102010000410000000002000414000001020320009c0000000002018019000000c00120021000000109011001c70000800202000039040103f70000040f00000001022001900000034f0000613d000000400a00043d000000000101043b000000000101004b0000021c0000c13d0000006401a000390000011a0200004100000000002104350000004401a000390000011b0200004100000000002104350000002401a0003900000025020000390000000000210435000001130100004100000000001a04350000000401a000390000002002000039000000000021043500000102010000410000010202a0009c000000000a0180190000004001a0021000000116011001c700000403000104300000010201000041000001020350009c0000000005018019000001020340009c00000000040180190000006001400210000000c003500210000000000113019f040103fc0000040f0003000000010355000000000301001900000060033002700000001f0430018f000101020030019d00000102033001970000000505300272000001d90000613d00000000060000190000000507600210000000000871034f000000000808043b00000000008704350000000106600039000000000756004b000001d20000413d000000000604004b000001e70000613d00000003044002100000000505500210000000000605043300000000064601cf000000000646022f000000000151034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f00000000001504350000000101200190000002180000613d000002130000013d0000010201000041000001020350009c0000000005018019000001020340009c00000000040180190000006001400210000000c003500210000000000113019f040103fc0000040f0003000000010355000000000301001900000060033002700000001f0430018f000101020030019d00000102033001970000000505300272000002030000613d00000000060000190000000507600210000000000871034f000000000808043b00000000008704350000000106600039000000000756004b000001fc0000413d000000000604004b000002110000613d00000003044002100000000505500210000000000605043300000000064601cf000000000646022f000000000151034f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f000000000015043500000001012001900000021a0000613d0000010201000041000001020230009c00000000030180190000006001300210000004020001042e00000060013002100000040300010430000000600130021000000403000104300000010a0100004100000000001a0435000000000100041400000006020000290000010402200197000000040320008c000600000002001d000002290000c13d0000000103000031000000200130008c000000000403001900000020040080390000025a0000013d0000010204000041000001020310009c00000000010480190000010203a0009c00000000040a40190000004003400210000000c001100210000000000131019f0000010b011001c700020000000a001d040103f70000040f000000020a000029000000000301001900000060033002700000010203300197000000200430008c000000000403001900000020040080390000001f0540018f0000000506400272000002470000613d0000000007000019000000050870021000000000098a0019000000000881034f000000000808043b00000000008904350000000107700039000000000867004b0000023f0000413d000000000705004b000002560000613d0000000506600210000000000761034f00000000066a00190000000305500210000000000806043300000000085801cf000000000858022f000000000707043b0000010005500089000000000757022f00000000055701cf000000000585019f0000000000560435000100000003001f00030000000103550000000102200190000002910000613d0000001f01400039000000600210018f0000000001a20019000000000221004b00000000020000190000000102004039000001050410009c000000520000213d0000000102200190000000520000c13d000000400010043f000000200130008c000000fe0000413d00000000010a0433000001040210009c000000fe0000213d00000108020000410000000000200439000000040010044300000102010000410000000002000414000001020320009c0000000002018019000000c00120021000000109011001c70000800202000039040103f70000040f00000001022001900000034f0000613d000000400200043d000200000002001d000000000101043b000000000101004b000002ae0000c13d0000000203000029000000640130003900000118020000410000000000210435000000440130003900000119020000410000000000210435000000240130003900000030020000390000000000210435000001130100004100000000001304350000000401300039000000200200003900000000002104350000010201000041000001020230009c0000000003018019000000400130021000000116011001c70000040300010430000000400200043d0000001f0430018f00000005053002720000029e0000613d000000000600001900000005076002100000000008720019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000002960000413d000000000604004b000001390000613d0000000505500210000000000151034f00000000055200190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f0000000000150435000001390000013d0000010c01000041000000000201041a0000010d022001970000000605000029000000000252019f000000000021041b00000102010000410000000002000414000001020320009c0000000002018019000000c0012002100000010e011001c70000800d0200003900000002030000390000010f04000041040103f20000040f00000001012001900000000501000029000000fe0000613d0000000001010433000000000101004b000002c90000c13d0000002001000039000001000010044300000120000004430000011701000041000004020001042e0000010a010000410000000202000029000000000012043500000000010004140000000602000029000000040220008c000002d50000c13d0000000103000031000000200130008c00000000040300190000002004008039000003070000013d0000010202000041000001020310009c00000000010280190000000204000029000001020340009c00000000020440190000004002200210000000c001100210000000000121019f0000010b011001c70000000602000029040103f70000040f000000020a000029000000000301001900000060033002700000010203300197000000200430008c000000000403001900000020040080390000001f0540018f0000000506400272000002f40000613d0000000007000019000000050870021000000000098a0019000000000881034f000000000808043b00000000008904350000000107700039000000000867004b000002ec0000413d000000000705004b000003030000613d0000000506600210000000000761034f00000002066000290000000305500210000000000806043300000000085801cf000000000858022f000000000707043b0000010005500089000000000757022f00000000055701cf000000000585019f0000000000560435000100000003001f00030000000103550000000102200190000003500000613d0000001f01400039000000600110018f0000000202100029000000000112004b00000000010000190000000101004039000600000002001d000001050220009c000000520000213d0000000101100190000000520000c13d0000000601000029000000400010043f000000200130008c000000fe0000413d00000002010000290000000001010433000200000001001d000001040110009c000000fe0000213d0000000601000029000001100110009c000000520000213d00000006030000290000006001300039000000400010043f000000400130003900000111020000410000000000210435000000270100003900000000021304360000011201000041000100000002001d0000000000120435000001080100004100000000001004390000000201000029000000040010044300000102010000410000000002000414000001020320009c0000000002018019000000c00120021000000109011001c70000800202000039040103f70000040f00000001022001900000034f0000613d000000000101043b000000000101004b0000036d0000c13d000000400100043d000000640210003900000114030000410000000000320435000000440210003900000115030000410000000000320435000000240210003900000026030000390000000000320435000001130200004100000000002104350000000402100039000000200300003900000000003204350000010202000041000001020310009c0000000001028019000000400110021000000116011001c70000040300010430000000000001042f000000400200043d0000001f0430018f00000005053002720000035d0000613d000000000600001900000005076002100000000008720019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000003550000413d000000000604004b0000036c0000613d0000000505500210000000000151034f00000000055200190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f0000000000150435000001390000013d0000000501000029000000000201043300000000010004140000000203000029000000040330008c000003760000c13d000000010200003900000001040000310000038a0000013d00000102030000410000000305000029000001020450009c00000000050380190000004004500210000001020520009c00000000020380190000006002200210000000000242019f000001020410009c0000000001038019000000c001100210000000000112019f0000000202000029040103fc0000040f000000010220018f00030000000103550000006001100270000101020010019d000001020410019700000060010000390000008003000039000000000504004b000003ae0000c13d000000000202004b000002c40000c13d0000000001010433000000000201004b000003db0000c13d000000400400043d000500000004001d0000011301000041000000000014043500000004014000390000002002000039000000000021043500000006010000290000000003010433000600000003001d0000002401400039000000000031043500000044024000390000000101000029040103e40000040f00000006010000290000001f01100039000000040110017f00000044011000390000010202000041000001020310009c00000000010280190000000504000029000001020340009c00000000040280190000004002400210000003e10000013d000001050140009c0000000403000029000000520000213d0000003f01400039000000000331016f000000400100043d0000000003310019000000000513004b00000000050000190000000105004039000001050630009c000000520000213d0000000105500190000000520000c13d000000400030043f0000001f0540018f000000000341043600000003060003670000000504400272000003cb0000613d000000000700001900000005087002100000000009830019000000000886034f000000000808043b00000000008904350000000107700039000000000847004b000003c30000413d000000000705004b0000038e0000613d0000000504400210000000000646034f00000000044300190000000305500210000000000704043300000000075701cf000000000757022f000000000606043b0000010005500089000000000656022f00000000055601cf000000000575019f00000000005404350000038e0000013d0000010202000041000001020410009c0000000001028019000001020430009c000000000302801900000040023002100000006001100210000000000121019f0000040300010430000000000403004b000003ee0000613d000000000400001900000000052400190000000006140019000000000606043300000000006504350000002004400039000000000534004b000003e70000413d00000000012300190000000000010435000000000001042d000000000001042f000003f5002104210000000102000039000000000001042d0000000002000019000000000001042d000003fa002104230000000102000039000000000001042d0000000002000019000000000001042d000003ff002104250000000102000039000000000001042d0000000002000019000000000001042d0000040100000432000004020001042e0000040300010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000001ffffffe0000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000000000000ffffffffffffffff800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b8302000002000000000000000000000000000000240000000000000000000000005c60da1b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000a3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50ffffffffffffffffffffffff000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c08c379a0000000000000000000000000000000000000000000000000000000006e74726163740000000000000000000000000000000000000000000000000000416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f0000000000000000000000000000000000000084000000000000000000000000000000020000000000000000000000000000004000000100000000000000000073206e6f74206120636f6e747261637400000000000000000000000000000000455243313936373a20626561636f6e20696d706c656d656e746174696f6e20697472616374000000000000000000000000000000000000000000000000000000455243313936373a206e657720626561636f6e206973206e6f74206120636f6e4e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000400000080000000000000000000000000000000000000000000000000000000000000000000000000000000002de471137b718b2bcb222fc1388921a3a6239f460ab611381da14aebd97092a5";
