/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ReenterGovernance } from "./ReenterGovernance";

export class ReenterGovernanceFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ReenterGovernance> {
    return super.deploy(overrides || {}) as Promise<ReenterGovernance>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReenterGovernance {
    return super.attach(address) as ReenterGovernance;
  }
  connect(signer: Signer): ReenterGovernanceFactory {
    return super.connect(signer) as ReenterGovernanceFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReenterGovernance {
    return new Contract(address, _abi, signerOrProvider) as ReenterGovernance;
  }
}

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "contract IGovernance",
        name: "_governance",
        type: "address",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "target",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
            ],
            internalType: "struct IGovernance.Call[]",
            name: "calls",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "predecessor",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "salt",
            type: "bytes32",
          },
        ],
        internalType: "struct IGovernance.Operation",
        name: "_op",
        type: "tuple",
      },
      {
        internalType: "enum ReenterGovernance.FunctionToCall",
        name: "_functionToCall",
        type: "uint8",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610cd5806100206000396000f3fe60806040526004361061001e5760003560e01c8063b2ded5221461048e575b60065460ff1661048c57600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600190811790915560408051828152808201909152600091602082015b6040805160608082018352600080835260208301529181019190915281526020019060019003908161006b575050604080516060810182526001805473ffffffffffffffffffffffffffffffffffffffff16825260025460208301526003805494955091939092840191906100df90610660565b80601f016020809104026020016040519081016040528092919081815260200182805461010b90610660565b80156101585780601f1061012d57610100808354040283529160200191610158565b820191906000526020600020905b81548152906001019060200180831161013b57829003601f168201915b50505050508152505081600081518110610174576101746106b3565b60200260200101819052506000604051806060016040528083815260200160045481526020016005548152509050600160038111156101b5576101b56106e2565b600654610100900460ff1660038111156101d1576101d16106e2565b03610263576000546040517f74da756b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116906374da756b9061022c908490600401610711565b600060405180830381600087803b15801561024657600080fd5b505af115801561025a573d6000803e3d6000fd5b50505050610489565b6002600654610100900460ff166003811115610281576102816106e2565b036102dc576000546040517f95218ecd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116906395218ecd9061022c908490600401610711565b6003600654610100900460ff1660038111156102fa576102fa6106e2565b0361042257600080546040517fc126e86000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063c126e86090610356908590600401610711565b602060405180830381865afa158015610373573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103979190610833565b6000546040517fc4d252f50000000000000000000000000000000000000000000000000000000081526004810183905291925073ffffffffffffffffffffffffffffffffffffffff169063c4d252f590602401600060405180830381600087803b15801561040457600080fd5b505af1158015610418573d6000803e3d6000fd5b5050505050610489565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f556e7365742066756e6374696f6e20746f2063616c6c0000000000000000000060448201526064015b60405180910390fd5b50505b005b34801561049a57600080fd5b5061048c6104a93660046108fd565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516179055815151600114610555576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c7920312063616c6c7320737570706f72746564000000000000000000006044820152606401610480565b81518051600090610568576105686106b3565b6020908102919091018101518051600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911781559181015160025560408101519091906003906105d69082610b85565b50505060208201516004556040820151600555600680548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100836003811115610627576106276106e2565b0217905550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061067457607f821691505b6020821081036106ad577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020808352608080840185516060808588015282825180855260a08901915060a08160051b8a0101945086840193506000805b8281101561080f578a87037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600184528551805173ffffffffffffffffffffffffffffffffffffffff168852898101518a8901526040908101519088018690528051868901819052835b818110156107ca578281018c01518a82018c01528b016107af565b508881018a01849052601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909701880196509488019492880192600101610746565b50505050848801516040880152604088015181880152505080935050505092915050565b60006020828403121561084557600080fd5b5051919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461086e57600080fd5b50565b6040516060810167ffffffffffffffff8111828210171561089457610894610631565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156108e1576108e1610631565b604052919050565b8035600481106108f857600080fd5b919050565b60008060006060848603121561091257600080fd5b61091c843561084c565b8335925067ffffffffffffffff6020850135111561093957600080fd5b602084013584016060818703121561095057600080fd5b610958610871565b67ffffffffffffffff8235111561096e57600080fd5b8135820187601f82011261098157600080fd5b67ffffffffffffffff8135111561099a5761099a610631565b6109aa6020823560051b0161089a565b81358082526020808301929160051b8401018a10156109c857600080fd5b602083015b6020843560051b850101811015610b075767ffffffffffffffff813511156109f457600080fd5b803584017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0606081838f03011215610a2b57600080fd5b610a33610871565b610a40602084013561084c565b602083013581526040830135602082015267ffffffffffffffff60608401351115610a6a57600080fd5b8d603f606085013585010112610a7f57600080fd5b602060608401358401013567ffffffffffffffff811115610aa257610aa2610631565b610ab3602084601f8401160161089a565b92508083528e6040826060870135870101011115610ad057600080fd5b80604060608601358601016020850137600060208285010152508160408201528086525050506020830192506020810190506109cd565b508352505060208281013590820152604091820135828201529250610b2d9085016108e9565b90509250925092565b601f821115610b8057600081815260208120601f850160051c81016020861015610b5d5750805b601f850160051c820191505b81811015610b7c57828155600101610b69565b5050505b505050565b815167ffffffffffffffff811115610b9f57610b9f610631565b610bb381610bad8454610660565b84610b36565b602080601f831160018114610c065760008415610bd05750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555610b7c565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015610c5357888601518255948401946001909101908401610c34565b5085821015610c8f57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220b91a4bc8ad106a00f478fc0752e5ad50f47c575833217c03932e27cccd9557b564736f6c63430008140033";
