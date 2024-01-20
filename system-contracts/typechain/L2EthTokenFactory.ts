/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { L2EthToken } from "./L2EthToken";

export class L2EthTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<L2EthToken> {
    return super.deploy(overrides || {}) as Promise<L2EthToken>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): L2EthToken {
    return super.attach(address) as L2EthToken;
  }
  connect(signer: Signer): L2EthTokenFactory {
    return super.connect(signer) as L2EthTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2EthToken {
    return new Contract(address, _abi, signerOrProvider) as L2EthToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
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
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l2Sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l1Receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l2Sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l1Receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_additionalData",
        type: "bytes",
      },
    ],
    name: "WithdrawalWithMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_account",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFromTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Receiver",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Receiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_additionalData",
        type: "bytes",
      },
    ],
    name: "withdrawWithMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x00050000000000020000008003000039000000400030043f00000000030100190000006003300270000000d7033001970000000102200190000000240000c13d000000040230008c0000030a0000413d000000000201043b000000e002200270000000d90420009c0000002c0000a13d000000da0420009c000000380000a13d000000db0420009c000000950000613d000000dc0420009c000001ea0000613d000000dd0220009c0000030a0000c13d0000000002000416000000000202004b0000030a0000c13d000000040230008a000000200220008c0000030a0000413d0000000401100370000000000101043b000000e5011001970000000000100435000000200000043f00000000010000190358033c0000040f000000360000013d0000000001000416000000000101004b0000030a0000c13d000000200100003900000100001004430000012000000443000000d801000041000003590001042e000000e00420009c000000600000213d000000e30120009c000001a60000613d000000e40120009c0000030a0000c13d0000000001000416000000000101004b0000030a0000c13d0000000101000039000000000101041a000001e70000013d000000de0420009c000001af0000613d000000df0220009c0000030a0000c13d0000000002000416000000000202004b0000030a0000c13d000000040230008a000000600220008c0000030a0000413d0000000402100370000000000402043b000000e50240009c0000030a0000213d0000002402100370000000000202043b000000e505200197000000e50220009c0000030a0000213d00000000020004110000004401100370000000000301043b000080060120008c000002090000613d000000090100008a000000000112016f000080010110008c000002090000613d000000f001000041000000800010043f0000002001000039000000840010043f0000003e01000039000000a40010043f000000f101000041000000c40010043f000000f201000041000000e40010043f000000f3010000410000035a00010430000000e10420009c000001e30000613d000000e20220009c0000030a0000c13d0000000002000416000000000202004b0000030a0000c13d000000040230008a000000400220008c0000030a0000413d0000000402100370000000000402043b000000e50240009c0000030a0000213d0000002401100370000000000501043b0000000001000411000080010110008c000001ff0000c13d0000000101000039000000000301041a0000000002530019000000000332004b000000000300001900000001030040390000000103300190000000910000c13d000400000005001d000000000021041b0000000000400435000000200000043f000000d7010000410000000002000414000000d70320009c0000000002018019000000c001200210000000eb011001c70000801002000039000500000004001d035803530000040f000000050500002900000001022001900000030a0000613d000000000101043b000000000201041a0000000403000029000000000232001a000000910000413d000002c20000013d000000fa0100004100000000001004350000001101000039000001e00000013d000000040230008a000000400220008c0000030a0000413d0000000402100370000000000802043b000000e50280009c0000030a0000213d0000002402100370000000000402043b000000e90240009c0000030a0000213d0000002302400039000000ea05000041000000000632004b00000000060000190000000006058019000000ea02200197000000000702004b0000000005008019000000ea0220009c000000000506c019000000000205004b0000030a0000c13d0000000405400039000000000251034f000000000202043b000000e90620009c000001dd0000213d000000bf06200039000000200900008a000000000696016f000000e90760009c000001dd0000213d000000400060043f000000800020043f00000000042400190000002404400039000000000334004b0000030a0000213d0000002003500039000000000131034f0000001f0320018f0000000504200272000000ca0000613d00000000050000190000000506500210000000000761034f000000000707043b000000a00660003900000000007604350000000105500039000000000645004b000000c20000413d000400000009001d000500000008001d000000000503004b000000db0000613d0000000504400210000000000141034f0000000303300210000000a004400039000000000504043300000000053501cf000000000535022f000000000101043b0000010003300089000000000131022f00000000013101cf000000000151019f0000000000140435000000a00120003900000000000104350000000001000416000300000001001d00000000010004100000000000100435000000200000043f000000d7010000410000000002000414000000d70320009c0000000002018019000000c001200210000000eb011001c70000801002000039035803530000040f0000000102200190000000050400002900000004070000290000030a0000613d000000000101043b000000000201041a00000003090000290000000002920049000000000021041b0000000101000039000000000201041a0000000002920049000000000021041b000000ec02000041000000400100043d000000200310003900000000002304350000006002400210000000240310003900000000002304350000000008000411000000600280021000000058031000390000000000230435000000380210003900000000009204350000006c03100039000000800200043d000000000402004b000001100000613d00000000040000190000000005340019000000a006400039000000000606043300000000006504350000002004400039000000000524004b000001090000413d000000000332001900000000000304350000004c0320003900000000003104350000008b02200039000000000272016f000000000a12001900000000022a004b00000000020000190000000102004039000000e903a0009c000001dd0000213d0000000102200190000001dd0000c13d000100000008001d0000004000a0043f000000ed0200004100000000002a04350000000402a000390000002003000039000000000032043500000000020104330000002403a0003900000000002304350000004403a00039000000000402004b000001330000613d000000000400001900000000053400190000002004400039000000000614001900000000060604330000000000650435000000000524004b0000012c0000413d000000000132001900000000000104350000001f01200039000000000171016f000000d702000041000000d703a0009c000000000302001900000000030a401900000040033002100000004401100039000000d70410009c00000000010280190000006001100210000000000131019f0000000003000414000000d70430009c0000000003028019000000c002300210000000000112019f000080080200003900020000000a001d0358034e0000040f000000020a00002900000000030100190000006003300270000000d703300197000000200430008c000000000403001900000020040080390000001f0540018f00000005064002720000015c0000613d0000000007000019000000050870021000000000098a0019000000000881034f000000000808043b00000000008904350000000107700039000000000867004b000001540000413d000000000705004b0000016b0000613d0000000506600210000000000761034f00000000066a00190000000305500210000000000806043300000000085801cf000000000858022f000000000707043b0000010005500089000000000757022f00000000055701cf000000000585019f000000000056043500000001022001900000030c0000613d0000001f01400039000000600210018f0000000001a20019000000000221004b00000000020000190000000102004039000000e90410009c00000005040000290000000305000029000001dd0000213d0000000102200190000001dd0000c13d000000400010043f000000200230008c0000030a0000413d00000020021000390000004003000039000000000032043500000000005104350000004003100039000000800200043d00000000002304350000006003100039000000e506400197000000000402004b0000018f0000613d00000000040000190000000005340019000000a007400039000000000707043300000000007504350000002004400039000000000524004b000001880000413d000000000332001900000000000304350000007f02200039000000040220017f000000d703000041000000d70410009c00000000010380190000004001100210000000d70420009c00000000020380190000006002200210000000000112019f0000000002000414000000d70420009c0000000002038019000000c002200210000000000112019f000000ee011001c70000800d020000390000000303000039000000ef040000410000000105000029000003050000013d0000000001000416000000000101004b0000030a0000c13d000000c001000039000000400010043f0000000501000039000000800010043f000000ff01000041000001f20000013d000000040230008a000000200220008c0000030a0000413d0000000401100370000000000401043b000000e50140009c0000030a0000213d0000000001000416000400000001001d00000000010004100000000000100435000000200000043f000000d7010000410000000002000414000000d70320009c0000000002018019000000c001200210000000eb011001c70000801002000039000500000004001d035803530000040f000000050400002900000001022001900000030a0000613d000000000101043b000000000201041a00000004050000290000000002520049000000000021041b0000000101000039000000000201041a0000000002520049000000000021041b000000ec02000041000000400100043d000000200310003900000000002304350000006002400210000000240310003900000000002304350000003802100039000000000052043500000038020000390000000000210435000000f80210009c0000022f0000413d000000fa0100004100000000001004350000004101000039000000040010043f000000fb010000410000035a000104300000000001000416000000000101004b0000030a0000c13d0000001201000039000000800010043f000000e601000041000003590001042e0000000001000416000000000101004b0000030a0000c13d000000c001000039000000400010043f0000000301000039000000800010043f000000e701000041000000a00010043f0000002001000039000000c00010043f0000008001000039000000e002000039035803290000040f000000c00110008a000000d702000041000000d70310009c00000000010280190000006001100210000000e8011001c7000003590001042e000000f001000041000000800010043f0000002001000039000000840010043f0000001f01000039000000a40010043f000000fc01000041000000c40010043f000000fd010000410000035a00010430000400000003001d0000000000400435000000200000043f000000d7010000410000000002000414000000d70320009c0000000002018019000000c001200210000000eb011001c70000801002000039000500000004001d000300000005001d035803530000040f000000050300002900000001022001900000030a0000613d000000000101043b000000000201041a000000040120006c000002d30000813d000000400100043d0000004402100039000000f603000041000000000032043500000024021000390000001f030000390000000000320435000000f0020000410000000000210435000000040210003900000020030000390000000000320435000000d702000041000000d70310009c00000000010280190000004001100210000000f7011001c70000035a000104300000006007100039000000400070043f000000ed020000410000000000270435000000640210003900000020030000390000000000320435000000840310003900000000020104330000000000230435000000a403100039000000000402004b000002440000613d000000000400001900000000053400190000002004400039000000000614001900000000060604330000000000650435000000000524004b0000023d0000413d000000000132001900000000000104350000001f01200039000000200200008a000000000121016f000000d702000041000000d70370009c0000000003020019000000000307401900000040033002100000004401100039000000d70410009c00000000010280190000006001100210000000000131019f0000000003000414000000d70430009c0000000003028019000000c002300210000000000112019f0000800802000039000300000007001d0358034e0000040f000000030a00002900000000030100190000006003300270000000d703300197000000200430008c000000000403001900000020040080390000001f0540018f00000005064002720000026e0000613d0000000007000019000000050870021000000000098a0019000000000881034f000000000808043b00000000008904350000000107700039000000000867004b000002660000413d000000000705004b0000027d0000613d0000000506600210000000000761034f00000000066a00190000000305500210000000000806043300000000085801cf000000000858022f000000000707043b0000010005500089000000000757022f00000000055701cf000000000585019f000000000056043500000001022001900000029f0000613d0000001f01400039000000600210018f0000000001a20019000000000221004b00000000020000190000000102004039000000e90410009c00000005050000290000000404000029000001dd0000213d0000000102200190000001dd0000c13d000000400010043f000000200230008c0000030a0000413d0000000000410435000000d7020000410000000003000414000000d70430009c0000000003028019000000d70410009c00000000010280190000004001100210000000c002300210000000000112019f000000f4011001c7000000e5065001970000800d0200003900000003030000390000000005000411000000f904000041000003050000013d000000400200043d0000001f0430018f0000000505300272000002ac0000613d000000000600001900000005076002100000000008720019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000002a40000413d000000000604004b000002bb0000613d0000000505500210000000000151034f00000000055200190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f0000000000150435000000d701000041000000d70420009c000000000201801900000040012002100000006002300210000000000121019f0000035a00010430000000000021041b000000400100043d0000000000310435000000d7020000410000000003000414000000d70430009c0000000003028019000000d70410009c00000000010280190000004001100210000000c002300210000000000112019f000000f4011001c70000800d020000390000000203000039000000fe04000041000003050000013d000200000002001d0000000000300435000000200000043f000000d7030000410000000001000414000000d70210009c0000000001038019000000c001100210000000eb011001c70000801002000039035803530000040f000000030300002900000001022001900000030a0000613d0000000204000029000000040240006a000000000101043b000000000021041b00000000003004350000000001000414000000d70210009c000000d701008041000000c001100210000000eb011001c70000801002000039035803530000040f0000000306000029000000050500002900000001022001900000030a0000613d000000000101043b000000000201041a00000004030000290000000002320019000000000021041b000000400100043d0000000000310435000000d7020000410000000003000414000000d70430009c0000000003028019000000d70410009c00000000010280190000004001100210000000c002300210000000000112019f000000f4011001c70000800d020000390000000303000039000000f5040000410358034e0000040f00000001012001900000030a0000613d0000000001000019000003590001042e00000000010000190000035a00010430000000400200043d0000001f0430018f0000000505300272000003190000613d000000000600001900000005076002100000000008720019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000003110000413d000000000604004b000003280000613d0000000505500210000000000151034f00000000055200190000000304400210000000000605043300000000064601cf000000000646022f000000000101043b0000010004400089000000000141022f00000000014101cf000000000161019f0000000000150435000002bb0000013d00000000030104330000000002320436000000000403004b000003350000613d000000000400001900000000052400190000002004400039000000000614001900000000060604330000000000650435000000000534004b0000032e0000413d000000000123001900000000000104350000001f01300039000000200300008a000000000131016f0000000001120019000000000001042d000000d702000041000000d70310009c00000000010280190000000003000414000000d70430009c0000000003028019000000c0023002100000004001100210000000000121019f000000eb011001c70000801002000039035803530000040f00000001022001900000034c0000613d000000000101043b000000000001042d00000000010000190000035a0001043000000351002104210000000102000039000000000001042d0000000002000019000000000001042d00000356002104230000000102000039000000000001042d0000000002000019000000000001042d0000035800000432000003590001042e0000035a00010430000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000002000000000000000000000000000000400000010000000000000000000000000000000000000000000000000000000000000000000000000051cff8d80000000000000000000000000000000000000000000000000000000084bc3eaf0000000000000000000000000000000000000000000000000000000084bc3eb00000000000000000000000000000000000000000000000000000000095d89b41000000000000000000000000000000000000000000000000000000009cc7f7080000000000000000000000000000000000000000000000000000000051cff8d900000000000000000000000000000000000000000000000000000000579952fc00000000000000000000000000000000000000000000000000000000313ce56600000000000000000000000000000000000000000000000000000000313ce5670000000000000000000000000000000000000000000000000000000040c10f190000000000000000000000000000000000000000000000000000000006fdde030000000000000000000000000000000000000000000000000000000018160ddd000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000002000000080000000000000000045544800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff800000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000400000000000000000000000006c0960f90000000000000000000000000000000000000000000000000000000062f84b24000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000c405fe8958410bbaf0c73b7a0c3e20859e86ca168a4c9b0def9c54d2555a306b08c379a0000000000000000000000000000000000000000000000000000000004f6e6c792073797374656d20636f6e7472616374732077697468207370656369616c206163636573732063616e2063616c6c2074686973206d6574686f64000000000000000000000000000000000000000000840000008000000000000000000200000000000000000000000000000000000020000000000000000000000000ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef5472616e7366657220616d6f756e7420657863656564732062616c616e6365000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffa02717ead6b9200dd235aad468c9809ea400fe33ac69b5bfaa6d3e90fc922b63984e487b7100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002400000000000000000000000043616c6c61626c65206f6e6c792062792074686520626f6f746c6f616465720000000000000000000000000000000000000000640000008000000000000000000f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d41213968854574686572000000000000000000000000000000000000000000000000000000f0b6b42807e1cedc08bb5d52497201e58eadf5d98c44d22f30deb9673d25565c";
