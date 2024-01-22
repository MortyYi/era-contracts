/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Multicall } from "./Multicall";

export class MulticallFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): MulticallFactory {
    return super.connect(signer) as MulticallFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106e7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d146100f357806386d516e8146100f9578063a8b0574e146100ff578063ee82ac5e1461010d57600080fd5b80630f28c97d1461008d578063252dba42146100a257806327e86d6e146100c35780634d2301cc146100cb575b600080fd5b425b6040519081526020015b60405180910390f35b6100b56100b036600461034d565b61011f565b6040516100999291906104ed565b61008f61026a565b61008f6100d93660046105ab565b73ffffffffffffffffffffffffffffffffffffffff163190565b4461008f565b4561008f565b604051418152602001610099565b61008f61011b3660046105cd565b4090565b8051439060609067ffffffffffffffff81111561013e5761013e61027d565b60405190808252806020026020018201604052801561017157816020015b606081526020019060019003908161015c5790505b50905060005b835181101561026457600080858381518110610195576101956105e6565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff168684815181106101c9576101c96105e6565b6020026020010151602001516040516101e29190610615565b6000604051808303816000865af19150503d806000811461021f576040519150601f19603f3d011682016040523d82523d6000602084013e610224565b606091505b50915091508161023357600080fd5b80848481518110610246576102466105e6565b602002602001018190525050508061025d90610660565b9050610177565b50915091565b6000610277600143610698565b40905090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156102cf576102cf61027d565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561031c5761031c61027d565b604052919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461034857600080fd5b919050565b6000602080838503121561036057600080fd5b823567ffffffffffffffff8082111561037857600080fd5b818501915085601f83011261038c57600080fd5b81358181111561039e5761039e61027d565b8060051b6103ad8582016102d5565b91825283810185019185810190898411156103c757600080fd5b86860192505b838310156104bc578235858111156103e55760008081fd5b860160407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828d03810182131561041c5760008081fd5b6104246102ac565b61042f8b8501610324565b815282840135898111156104435760008081fd5b8085019450508d603f8501126104595760008081fd5b8a8401358981111561046d5761046d61027d565b61047d8c84601f840116016102d5565b92508083528e848287010111156104945760008081fd5b808486018d85013760009083018c0152808b01919091528452505091860191908601906103cd565b9998505050505050505050565b60005b838110156104e45781810151838201526020016104cc565b50506000910152565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b8281101561059d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08887030184528151805180885261056081888a018985016104c9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169690960185019550928401929084019060010161051b565b509398975050505050505050565b6000602082840312156105bd57600080fd5b6105c682610324565b9392505050565b6000602082840312156105df57600080fd5b5035919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082516106278184602087016104c9565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361069157610691610631565b5060010190565b818103818111156106ab576106ab610631565b9291505056fea2646970667358221220346ae7af792559f02a11132c6e024c610407b9eafc104e2c03f11e96d352ae1664736f6c63430008140033";
