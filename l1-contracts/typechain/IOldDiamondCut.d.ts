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

interface IOldDiamondCutInterface extends ethers.utils.Interface {
  functions: {
    "approveEmergencyDiamondCutAsSecurityCouncilMember(bytes32)": FunctionFragment;
    "cancelDiamondCutProposal()": FunctionFragment;
    "emergencyFreezeDiamond()": FunctionFragment;
    "executeDiamondCutProposal(tuple)": FunctionFragment;
    "proposeDiamondCut(tuple[],address)": FunctionFragment;
    "unfreezeDiamond()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveEmergencyDiamondCutAsSecurityCouncilMember",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDiamondCutProposal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyFreezeDiamond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeDiamondCutProposal",
    values: [
      {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeDiamondCut",
    values: [
      {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unfreezeDiamond",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "approveEmergencyDiamondCutAsSecurityCouncilMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelDiamondCutProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyFreezeDiamond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeDiamondCutProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeDiamondCut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unfreezeDiamond",
    data: BytesLike
  ): Result;

  events: {
    "DiamondCutProposal(tuple[],address)": EventFragment;
    "DiamondCutProposalCancelation(uint256,bytes32)": EventFragment;
    "DiamondCutProposalExecution(tuple)": EventFragment;
    "EmergencyDiamondCutApproved(address,uint256,uint256,bytes32)": EventFragment;
    "EmergencyFreeze()": EventFragment;
    "Unfreeze(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DiamondCutProposal"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DiamondCutProposalCancelation"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "DiamondCutProposalExecution"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "EmergencyDiamondCutApproved"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyFreeze"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unfreeze"): EventFragment;
}

export class IOldDiamondCut extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IOldDiamondCutInterface;

  functions: {
    approveEmergencyDiamondCutAsSecurityCouncilMember(
      _diamondCutHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "approveEmergencyDiamondCutAsSecurityCouncilMember(bytes32)"(
      _diamondCutHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cancelDiamondCutProposal(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelDiamondCutProposal()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    emergencyFreezeDiamond(overrides?: Overrides): Promise<ContractTransaction>;

    "emergencyFreezeDiamond()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    executeDiamondCutProposal(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "executeDiamondCutProposal((tuple[],address,bytes))"(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    proposeDiamondCut(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proposeDiamondCut(tuple[],address)"(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unfreezeDiamond(overrides?: Overrides): Promise<ContractTransaction>;

    "unfreezeDiamond()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  approveEmergencyDiamondCutAsSecurityCouncilMember(
    _diamondCutHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "approveEmergencyDiamondCutAsSecurityCouncilMember(bytes32)"(
    _diamondCutHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cancelDiamondCutProposal(overrides?: Overrides): Promise<ContractTransaction>;

  "cancelDiamondCutProposal()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  emergencyFreezeDiamond(overrides?: Overrides): Promise<ContractTransaction>;

  "emergencyFreezeDiamond()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  executeDiamondCutProposal(
    _diamondCut: {
      facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[];
      initAddress: string;
      initCalldata: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "executeDiamondCutProposal((tuple[],address,bytes))"(
    _diamondCut: {
      facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[];
      initAddress: string;
      initCalldata: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  proposeDiamondCut(
    _facetCuts: {
      facet: string;
      action: BigNumberish;
      isFreezable: boolean;
      selectors: BytesLike[];
    }[],
    _initAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proposeDiamondCut(tuple[],address)"(
    _facetCuts: {
      facet: string;
      action: BigNumberish;
      isFreezable: boolean;
      selectors: BytesLike[];
    }[],
    _initAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unfreezeDiamond(overrides?: Overrides): Promise<ContractTransaction>;

  "unfreezeDiamond()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    approveEmergencyDiamondCutAsSecurityCouncilMember(
      _diamondCutHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveEmergencyDiamondCutAsSecurityCouncilMember(bytes32)"(
      _diamondCutHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelDiamondCutProposal(overrides?: CallOverrides): Promise<void>;

    "cancelDiamondCutProposal()"(overrides?: CallOverrides): Promise<void>;

    emergencyFreezeDiamond(overrides?: CallOverrides): Promise<void>;

    "emergencyFreezeDiamond()"(overrides?: CallOverrides): Promise<void>;

    executeDiamondCutProposal(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "executeDiamondCutProposal((tuple[],address,bytes))"(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    proposeDiamondCut(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "proposeDiamondCut(tuple[],address)"(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unfreezeDiamond(overrides?: CallOverrides): Promise<void>;

    "unfreezeDiamond()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    DiamondCutProposal(_facetCuts: null, _initAddress: null): EventFilter;

    DiamondCutProposalCancelation(
      currentProposalId: null,
      proposedDiamondCutHash: BytesLike | null
    ): EventFilter;

    DiamondCutProposalExecution(_diamondCut: null): EventFilter;

    EmergencyDiamondCutApproved(
      _address: string | null,
      currentProposalId: null,
      securityCouncilEmergencyApprovals: null,
      proposedDiamondCutHash: BytesLike | null
    ): EventFilter;

    EmergencyFreeze(): EventFilter;

    Unfreeze(lastDiamondFreezeTimestamp: null): EventFilter;
  };

  estimateGas: {
    approveEmergencyDiamondCutAsSecurityCouncilMember(
      _diamondCutHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "approveEmergencyDiamondCutAsSecurityCouncilMember(bytes32)"(
      _diamondCutHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    cancelDiamondCutProposal(overrides?: Overrides): Promise<BigNumber>;

    "cancelDiamondCutProposal()"(overrides?: Overrides): Promise<BigNumber>;

    emergencyFreezeDiamond(overrides?: Overrides): Promise<BigNumber>;

    "emergencyFreezeDiamond()"(overrides?: Overrides): Promise<BigNumber>;

    executeDiamondCutProposal(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "executeDiamondCutProposal((tuple[],address,bytes))"(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    proposeDiamondCut(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proposeDiamondCut(tuple[],address)"(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unfreezeDiamond(overrides?: Overrides): Promise<BigNumber>;

    "unfreezeDiamond()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approveEmergencyDiamondCutAsSecurityCouncilMember(
      _diamondCutHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "approveEmergencyDiamondCutAsSecurityCouncilMember(bytes32)"(
      _diamondCutHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cancelDiamondCutProposal(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelDiamondCutProposal()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    emergencyFreezeDiamond(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "emergencyFreezeDiamond()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    executeDiamondCutProposal(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "executeDiamondCutProposal((tuple[],address,bytes))"(
      _diamondCut: {
        facetCuts: {
          facet: string;
          action: BigNumberish;
          isFreezable: boolean;
          selectors: BytesLike[];
        }[];
        initAddress: string;
        initCalldata: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    proposeDiamondCut(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proposeDiamondCut(tuple[],address)"(
      _facetCuts: {
        facet: string;
        action: BigNumberish;
        isFreezable: boolean;
        selectors: BytesLike[];
      }[],
      _initAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unfreezeDiamond(overrides?: Overrides): Promise<PopulatedTransaction>;

    "unfreezeDiamond()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
