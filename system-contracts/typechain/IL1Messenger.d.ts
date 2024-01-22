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

interface IL1MessengerInterface extends ethers.utils.Interface {
  functions: {
    "requestBytecodeL1Publication(bytes32)": FunctionFragment;
    "sendL2ToL1Log(bool,bytes32,bytes32)": FunctionFragment;
    "sendToL1(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "requestBytecodeL1Publication",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendL2ToL1Log",
    values: [boolean, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "sendToL1", values: [BytesLike]): string;

  decodeFunctionResult(
    functionFragment: "requestBytecodeL1Publication",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendL2ToL1Log",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendToL1", data: BytesLike): Result;

  events: {
    "BytecodeL1PublicationRequested(bytes32)": EventFragment;
    "L1MessageSent(address,bytes32,bytes)": EventFragment;
    "L2ToL1LogSent(tuple)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "BytecodeL1PublicationRequested"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "L1MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "L2ToL1LogSent"): EventFragment;
}

export class IL1Messenger extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IL1MessengerInterface;

  functions: {
    requestBytecodeL1Publication(
      _bytecodeHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "requestBytecodeL1Publication(bytes32)"(
      _bytecodeHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendL2ToL1Log(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendL2ToL1Log(bool,bytes32,bytes32)"(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendToL1(
      _message: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendToL1(bytes)"(
      _message: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  requestBytecodeL1Publication(
    _bytecodeHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "requestBytecodeL1Publication(bytes32)"(
    _bytecodeHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendL2ToL1Log(
    _isService: boolean,
    _key: BytesLike,
    _value: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendL2ToL1Log(bool,bytes32,bytes32)"(
    _isService: boolean,
    _key: BytesLike,
    _value: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendToL1(
    _message: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendToL1(bytes)"(
    _message: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    requestBytecodeL1Publication(
      _bytecodeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "requestBytecodeL1Publication(bytes32)"(
      _bytecodeHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    sendL2ToL1Log(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sendL2ToL1Log(bool,bytes32,bytes32)"(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sendToL1(_message: BytesLike, overrides?: CallOverrides): Promise<string>;

    "sendToL1(bytes)"(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    BytecodeL1PublicationRequested(_bytecodeHash: null): EventFilter;

    L1MessageSent(
      _sender: string | null,
      _hash: BytesLike | null,
      _message: null
    ): EventFilter;

    L2ToL1LogSent(_l2log: null): EventFilter;
  };

  estimateGas: {
    requestBytecodeL1Publication(
      _bytecodeHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "requestBytecodeL1Publication(bytes32)"(
      _bytecodeHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendL2ToL1Log(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendL2ToL1Log(bool,bytes32,bytes32)"(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendToL1(_message: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "sendToL1(bytes)"(
      _message: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    requestBytecodeL1Publication(
      _bytecodeHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "requestBytecodeL1Publication(bytes32)"(
      _bytecodeHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendL2ToL1Log(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendL2ToL1Log(bool,bytes32,bytes32)"(
      _isService: boolean,
      _key: BytesLike,
      _value: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendToL1(
      _message: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendToL1(bytes)"(
      _message: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
