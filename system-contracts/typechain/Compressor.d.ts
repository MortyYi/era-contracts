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
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CompressorInterface extends ethers.utils.Interface {
  functions: {
    "publishCompressedBytecode(bytes,bytes)": FunctionFragment;
    "verifyCompressedStateDiffs(uint256,uint256,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "publishCompressedBytecode",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyCompressedStateDiffs",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "publishCompressedBytecode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyCompressedStateDiffs",
    data: BytesLike
  ): Result;

  events: {};
}

export class Compressor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CompressorInterface;

  functions: {
    publishCompressedBytecode(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "publishCompressedBytecode(bytes,bytes)"(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    verifyCompressedStateDiffs(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "verifyCompressedStateDiffs(uint256,uint256,bytes,bytes)"(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  publishCompressedBytecode(
    _bytecode: BytesLike,
    _rawCompressedData: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "publishCompressedBytecode(bytes,bytes)"(
    _bytecode: BytesLike,
    _rawCompressedData: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  verifyCompressedStateDiffs(
    _numberOfStateDiffs: BigNumberish,
    _enumerationIndexSize: BigNumberish,
    _stateDiffs: BytesLike,
    _compressedStateDiffs: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "verifyCompressedStateDiffs(uint256,uint256,bytes,bytes)"(
    _numberOfStateDiffs: BigNumberish,
    _enumerationIndexSize: BigNumberish,
    _stateDiffs: BytesLike,
    _compressedStateDiffs: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    publishCompressedBytecode(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "publishCompressedBytecode(bytes,bytes)"(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    verifyCompressedStateDiffs(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "verifyCompressedStateDiffs(uint256,uint256,bytes,bytes)"(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    publishCompressedBytecode(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "publishCompressedBytecode(bytes,bytes)"(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    verifyCompressedStateDiffs(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "verifyCompressedStateDiffs(uint256,uint256,bytes,bytes)"(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    publishCompressedBytecode(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "publishCompressedBytecode(bytes,bytes)"(
      _bytecode: BytesLike,
      _rawCompressedData: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    verifyCompressedStateDiffs(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "verifyCompressedStateDiffs(uint256,uint256,bytes,bytes)"(
      _numberOfStateDiffs: BigNumberish,
      _enumerationIndexSize: BigNumberish,
      _stateDiffs: BytesLike,
      _compressedStateDiffs: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
