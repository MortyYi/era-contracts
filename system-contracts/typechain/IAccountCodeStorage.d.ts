/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAccountCodeStorageInterface extends ethers.utils.Interface {
  functions: {
    "getCodeHash(uint256)": FunctionFragment;
    "getCodeSize(uint256)": FunctionFragment;
    "getRawCodeHash(address)": FunctionFragment;
    "markAccountCodeHashAsConstructed(address)": FunctionFragment;
    "storeAccountConstructedCodeHash(address,bytes32)": FunctionFragment;
    "storeAccountConstructingCodeHash(address,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCodeHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCodeSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRawCodeHash",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "markAccountCodeHashAsConstructed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "storeAccountConstructedCodeHash",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "storeAccountConstructingCodeHash",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCodeSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRawCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "markAccountCodeHashAsConstructed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storeAccountConstructedCodeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storeAccountConstructingCodeHash",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAccountCodeStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAccountCodeStorageInterface;

  functions: {
    getCodeHash(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      codeHash: string;
      0: string;
    }>;

    "getCodeHash(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      codeHash: string;
      0: string;
    }>;

    getCodeSize(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      codeSize: BigNumber;
      0: BigNumber;
    }>;

    "getCodeSize(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      codeSize: BigNumber;
      0: BigNumber;
    }>;

    getRawCodeHash(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      codeHash: string;
      0: string;
    }>;

    "getRawCodeHash(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<{
      codeHash: string;
      0: string;
    }>;

    markAccountCodeHashAsConstructed(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "markAccountCodeHashAsConstructed(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    storeAccountConstructedCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "storeAccountConstructedCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    storeAccountConstructingCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "storeAccountConstructingCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getCodeHash(_input: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "getCodeHash(uint256)"(
    _input: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getCodeSize(
    _input: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getCodeSize(uint256)"(
    _input: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRawCodeHash(_address: string, overrides?: CallOverrides): Promise<string>;

  "getRawCodeHash(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<string>;

  markAccountCodeHashAsConstructed(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "markAccountCodeHashAsConstructed(address)"(
    _address: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  storeAccountConstructedCodeHash(
    _address: string,
    _hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "storeAccountConstructedCodeHash(address,bytes32)"(
    _address: string,
    _hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  storeAccountConstructingCodeHash(
    _address: string,
    _hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "storeAccountConstructingCodeHash(address,bytes32)"(
    _address: string,
    _hash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getCodeHash(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getCodeHash(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getCodeSize(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCodeSize(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRawCodeHash(
      _address: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getRawCodeHash(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<string>;

    markAccountCodeHashAsConstructed(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "markAccountCodeHashAsConstructed(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    storeAccountConstructedCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "storeAccountConstructedCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    storeAccountConstructingCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "storeAccountConstructingCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getCodeHash(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCodeHash(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCodeSize(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCodeSize(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRawCodeHash(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getRawCodeHash(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    markAccountCodeHashAsConstructed(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "markAccountCodeHashAsConstructed(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    storeAccountConstructedCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "storeAccountConstructedCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    storeAccountConstructingCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "storeAccountConstructingCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCodeHash(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCodeHash(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCodeSize(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCodeSize(uint256)"(
      _input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRawCodeHash(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getRawCodeHash(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    markAccountCodeHashAsConstructed(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "markAccountCodeHashAsConstructed(address)"(
      _address: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    storeAccountConstructedCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "storeAccountConstructedCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    storeAccountConstructingCodeHash(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "storeAccountConstructingCodeHash(address,bytes32)"(
      _address: string,
      _hash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
