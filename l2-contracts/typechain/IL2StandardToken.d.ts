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

interface IL2StandardTokenInterface extends ethers.utils.Interface {
  functions: {
    "bridgeBurn(address,uint256)": FunctionFragment;
    "bridgeMint(address,uint256)": FunctionFragment;
    "l1Address()": FunctionFragment;
    "l2Bridge()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "bridgeBurn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "bridgeMint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "l1Address", values?: undefined): string;
  encodeFunctionData(functionFragment: "l2Bridge", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bridgeBurn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bridgeMint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l1Address", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "l2Bridge", data: BytesLike): Result;

  events: {
    "BridgeBurn(address,uint256)": EventFragment;
    "BridgeInitialize(address,string,string,uint8)": EventFragment;
    "BridgeMint(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BridgeBurn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BridgeInitialize"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BridgeMint"): EventFragment;
}

export class IL2StandardToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IL2StandardTokenInterface;

  functions: {
    bridgeBurn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bridgeBurn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    bridgeMint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "bridgeMint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    l1Address(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "l1Address()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    l2Bridge(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "l2Bridge()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  bridgeBurn(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bridgeBurn(address,uint256)"(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  bridgeMint(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "bridgeMint(address,uint256)"(
    _account: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  l1Address(overrides?: CallOverrides): Promise<string>;

  "l1Address()"(overrides?: CallOverrides): Promise<string>;

  l2Bridge(overrides?: CallOverrides): Promise<string>;

  "l2Bridge()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bridgeBurn(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "bridgeBurn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    bridgeMint(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "bridgeMint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    l1Address(overrides?: CallOverrides): Promise<string>;

    "l1Address()"(overrides?: CallOverrides): Promise<string>;

    l2Bridge(overrides?: CallOverrides): Promise<string>;

    "l2Bridge()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    BridgeBurn(_account: string | null, _amount: null): EventFilter;

    BridgeInitialize(
      l1Token: string | null,
      name: null,
      symbol: null,
      decimals: null
    ): EventFilter;

    BridgeMint(_account: string | null, _amount: null): EventFilter;
  };

  estimateGas: {
    bridgeBurn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bridgeBurn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    bridgeMint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "bridgeMint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    l1Address(overrides?: CallOverrides): Promise<BigNumber>;

    "l1Address()"(overrides?: CallOverrides): Promise<BigNumber>;

    l2Bridge(overrides?: CallOverrides): Promise<BigNumber>;

    "l2Bridge()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bridgeBurn(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bridgeBurn(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    bridgeMint(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "bridgeMint(address,uint256)"(
      _account: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    l1Address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "l1Address()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    l2Bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "l2Bridge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
