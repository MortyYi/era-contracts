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

interface IPaymasterInterface extends ethers.utils.Interface {
  functions: {
    "postTransaction(bytes,tuple,bytes32,bytes32,uint8,uint256)": FunctionFragment;
    "validateAndPayForPaymasterTransaction(bytes32,bytes32,tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "postTransaction",
    values: [
      BytesLike,
      {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      BytesLike,
      BytesLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validateAndPayForPaymasterTransaction",
    values: [
      BytesLike,
      BytesLike,
      {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "postTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateAndPayForPaymasterTransaction",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPaymaster extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IPaymasterInterface;

  functions: {
    postTransaction(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "postTransaction(bytes,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes),bytes32,bytes32,uint8,uint256)"(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    validateAndPayForPaymasterTransaction(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "validateAndPayForPaymasterTransaction(bytes32,bytes32,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes))"(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  postTransaction(
    _context: BytesLike,
    _transaction: {
      txType: BigNumberish;
      from: BigNumberish;
      to: BigNumberish;
      gasLimit: BigNumberish;
      gasPerPubdataByteLimit: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymaster: BigNumberish;
      nonce: BigNumberish;
      value: BigNumberish;
      reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
      data: BytesLike;
      signature: BytesLike;
      factoryDeps: BytesLike[];
      paymasterInput: BytesLike;
      reservedDynamic: BytesLike;
    },
    _txHash: BytesLike,
    _suggestedSignedHash: BytesLike,
    _txResult: BigNumberish,
    _maxRefundedGas: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "postTransaction(bytes,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes),bytes32,bytes32,uint8,uint256)"(
    _context: BytesLike,
    _transaction: {
      txType: BigNumberish;
      from: BigNumberish;
      to: BigNumberish;
      gasLimit: BigNumberish;
      gasPerPubdataByteLimit: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymaster: BigNumberish;
      nonce: BigNumberish;
      value: BigNumberish;
      reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
      data: BytesLike;
      signature: BytesLike;
      factoryDeps: BytesLike[];
      paymasterInput: BytesLike;
      reservedDynamic: BytesLike;
    },
    _txHash: BytesLike,
    _suggestedSignedHash: BytesLike,
    _txResult: BigNumberish,
    _maxRefundedGas: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  validateAndPayForPaymasterTransaction(
    _txHash: BytesLike,
    _suggestedSignedHash: BytesLike,
    _transaction: {
      txType: BigNumberish;
      from: BigNumberish;
      to: BigNumberish;
      gasLimit: BigNumberish;
      gasPerPubdataByteLimit: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymaster: BigNumberish;
      nonce: BigNumberish;
      value: BigNumberish;
      reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
      data: BytesLike;
      signature: BytesLike;
      factoryDeps: BytesLike[];
      paymasterInput: BytesLike;
      reservedDynamic: BytesLike;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "validateAndPayForPaymasterTransaction(bytes32,bytes32,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes))"(
    _txHash: BytesLike,
    _suggestedSignedHash: BytesLike,
    _transaction: {
      txType: BigNumberish;
      from: BigNumberish;
      to: BigNumberish;
      gasLimit: BigNumberish;
      gasPerPubdataByteLimit: BigNumberish;
      maxFeePerGas: BigNumberish;
      maxPriorityFeePerGas: BigNumberish;
      paymaster: BigNumberish;
      nonce: BigNumberish;
      value: BigNumberish;
      reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
      data: BytesLike;
      signature: BytesLike;
      factoryDeps: BytesLike[];
      paymasterInput: BytesLike;
      reservedDynamic: BytesLike;
    },
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    postTransaction(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "postTransaction(bytes,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes),bytes32,bytes32,uint8,uint256)"(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validateAndPayForPaymasterTransaction(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<{
      magic: string;
      context: string;
      0: string;
      1: string;
    }>;

    "validateAndPayForPaymasterTransaction(bytes32,bytes32,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes))"(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<{
      magic: string;
      context: string;
      0: string;
      1: string;
    }>;
  };

  filters: {};

  estimateGas: {
    postTransaction(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "postTransaction(bytes,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes),bytes32,bytes32,uint8,uint256)"(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    validateAndPayForPaymasterTransaction(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "validateAndPayForPaymasterTransaction(bytes32,bytes32,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes))"(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    postTransaction(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "postTransaction(bytes,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes),bytes32,bytes32,uint8,uint256)"(
      _context: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _txResult: BigNumberish,
      _maxRefundedGas: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    validateAndPayForPaymasterTransaction(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "validateAndPayForPaymasterTransaction(bytes32,bytes32,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[4],bytes,bytes,bytes32[],bytes,bytes))"(
      _txHash: BytesLike,
      _suggestedSignedHash: BytesLike,
      _transaction: {
        txType: BigNumberish;
        from: BigNumberish;
        to: BigNumberish;
        gasLimit: BigNumberish;
        gasPerPubdataByteLimit: BigNumberish;
        maxFeePerGas: BigNumberish;
        maxPriorityFeePerGas: BigNumberish;
        paymaster: BigNumberish;
        nonce: BigNumberish;
        value: BigNumberish;
        reserved: [BigNumberish, BigNumberish, BigNumberish, BigNumberish];
        data: BytesLike;
        signature: BytesLike;
        factoryDeps: BytesLike[];
        paymasterInput: BytesLike;
        reservedDynamic: BytesLike;
      },
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
