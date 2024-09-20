/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace WasteDataProvider {
  export type WasteTypeStruct = {
    id: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
  };

  export type WasteTypeStructOutput = [BigNumber, string] & {
    id: BigNumber;
    name: string;
  };

  export type WasteCategoryStruct = {
    id: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    emissionRate: PromiseOrValue<BigNumberish>;
    wasteTypes: WasteDataProvider.WasteTypeStruct[];
  };

  export type WasteCategoryStructOutput = [
    BigNumber,
    string,
    BigNumber,
    WasteDataProvider.WasteTypeStructOutput[]
  ] & {
    id: BigNumber;
    name: string;
    emissionRate: BigNumber;
    wasteTypes: WasteDataProvider.WasteTypeStructOutput[];
  };
}

export interface WasteDataProviderInterface extends utils.Interface {
  functions: {
    "addOrUpdateCategory(uint256,string,uint256)": FunctionFragment;
    "addWasteTypeToCategory(uint256,uint256,string)": FunctionFragment;
    "getCarbonEmissionRate(uint256)": FunctionFragment;
    "getCategoryByWasteType(uint256)": FunctionFragment;
    "getWasteTypes(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "removeCategory(uint256)": FunctionFragment;
    "removeWasteType(uint256)": FunctionFragment;
    "setCarbonEmissionRate(uint256,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateWasteType(uint256,string)": FunctionFragment;
    "wasteCategories(uint256)": FunctionFragment;
    "wasteTypeToCategory(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addOrUpdateCategory"
      | "addWasteTypeToCategory"
      | "getCarbonEmissionRate"
      | "getCategoryByWasteType"
      | "getWasteTypes"
      | "owner"
      | "removeCategory"
      | "removeWasteType"
      | "setCarbonEmissionRate"
      | "transferOwnership"
      | "updateWasteType"
      | "wasteCategories"
      | "wasteTypeToCategory"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addOrUpdateCategory",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addWasteTypeToCategory",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCarbonEmissionRate",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCategoryByWasteType",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getWasteTypes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeCategory",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWasteType",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setCarbonEmissionRate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateWasteType",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "wasteCategories",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "wasteTypeToCategory",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addOrUpdateCategory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addWasteTypeToCategory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCarbonEmissionRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCategoryByWasteType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWasteTypes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeCategory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWasteType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCarbonEmissionRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateWasteType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wasteCategories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wasteTypeToCategory",
    data: BytesLike
  ): Result;

  events: {
    "CategoryAddedOrUpdated(uint256,string,uint256)": EventFragment;
    "CategoryRemoved(uint256)": EventFragment;
    "WasteTypeAdded(uint256,uint256,string)": EventFragment;
    "WasteTypeRemoved(uint256,uint256)": EventFragment;
    "WasteTypeUpdated(uint256,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CategoryAddedOrUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CategoryRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WasteTypeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WasteTypeRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WasteTypeUpdated"): EventFragment;
}

export interface CategoryAddedOrUpdatedEventObject {
  categoryId: BigNumber;
  name: string;
  emissionRate: BigNumber;
}
export type CategoryAddedOrUpdatedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  CategoryAddedOrUpdatedEventObject
>;

export type CategoryAddedOrUpdatedEventFilter =
  TypedEventFilter<CategoryAddedOrUpdatedEvent>;

export interface CategoryRemovedEventObject {
  categoryId: BigNumber;
}
export type CategoryRemovedEvent = TypedEvent<
  [BigNumber],
  CategoryRemovedEventObject
>;

export type CategoryRemovedEventFilter = TypedEventFilter<CategoryRemovedEvent>;

export interface WasteTypeAddedEventObject {
  categoryId: BigNumber;
  wasteTypeId: BigNumber;
  name: string;
}
export type WasteTypeAddedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  WasteTypeAddedEventObject
>;

export type WasteTypeAddedEventFilter = TypedEventFilter<WasteTypeAddedEvent>;

export interface WasteTypeRemovedEventObject {
  categoryId: BigNumber;
  wasteTypeId: BigNumber;
}
export type WasteTypeRemovedEvent = TypedEvent<
  [BigNumber, BigNumber],
  WasteTypeRemovedEventObject
>;

export type WasteTypeRemovedEventFilter =
  TypedEventFilter<WasteTypeRemovedEvent>;

export interface WasteTypeUpdatedEventObject {
  categoryId: BigNumber;
  wasteTypeId: BigNumber;
  newName: string;
}
export type WasteTypeUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, string],
  WasteTypeUpdatedEventObject
>;

export type WasteTypeUpdatedEventFilter =
  TypedEventFilter<WasteTypeUpdatedEvent>;

export interface WasteDataProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WasteDataProviderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addOrUpdateCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      emissionRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addWasteTypeToCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      wasteTypeId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCarbonEmissionRate(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getCategoryByWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[WasteDataProvider.WasteCategoryStructOutput]>;

    getWasteTypes(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[WasteDataProvider.WasteTypeStructOutput[]]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCarbonEmissionRate(
      categoryId: PromiseOrValue<BigNumberish>,
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      newName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wasteCategories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        id: BigNumber;
        name: string;
        emissionRate: BigNumber;
      }
    >;

    wasteTypeToCategory(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  addOrUpdateCategory(
    categoryId: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    emissionRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addWasteTypeToCategory(
    categoryId: PromiseOrValue<BigNumberish>,
    wasteTypeId: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCarbonEmissionRate(
    wasteTypeId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCategoryByWasteType(
    wasteTypeId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<WasteDataProvider.WasteCategoryStructOutput>;

  getWasteTypes(
    categoryId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<WasteDataProvider.WasteTypeStructOutput[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeCategory(
    categoryId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeWasteType(
    wasteTypeId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCarbonEmissionRate(
    categoryId: PromiseOrValue<BigNumberish>,
    rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateWasteType(
    wasteTypeId: PromiseOrValue<BigNumberish>,
    newName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wasteCategories(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, BigNumber] & {
      id: BigNumber;
      name: string;
      emissionRate: BigNumber;
    }
  >;

  wasteTypeToCategory(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    addOrUpdateCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      emissionRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addWasteTypeToCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      wasteTypeId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getCarbonEmissionRate(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCategoryByWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<WasteDataProvider.WasteCategoryStructOutput>;

    getWasteTypes(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<WasteDataProvider.WasteTypeStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCarbonEmissionRate(
      categoryId: PromiseOrValue<BigNumberish>,
      rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      newName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    wasteCategories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, BigNumber] & {
        id: BigNumber;
        name: string;
        emissionRate: BigNumber;
      }
    >;

    wasteTypeToCategory(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "CategoryAddedOrUpdated(uint256,string,uint256)"(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      name?: null,
      emissionRate?: null
    ): CategoryAddedOrUpdatedEventFilter;
    CategoryAddedOrUpdated(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      name?: null,
      emissionRate?: null
    ): CategoryAddedOrUpdatedEventFilter;

    "CategoryRemoved(uint256)"(
      categoryId?: PromiseOrValue<BigNumberish> | null
    ): CategoryRemovedEventFilter;
    CategoryRemoved(
      categoryId?: PromiseOrValue<BigNumberish> | null
    ): CategoryRemovedEventFilter;

    "WasteTypeAdded(uint256,uint256,string)"(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      wasteTypeId?: null,
      name?: null
    ): WasteTypeAddedEventFilter;
    WasteTypeAdded(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      wasteTypeId?: null,
      name?: null
    ): WasteTypeAddedEventFilter;

    "WasteTypeRemoved(uint256,uint256)"(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      wasteTypeId?: null
    ): WasteTypeRemovedEventFilter;
    WasteTypeRemoved(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      wasteTypeId?: null
    ): WasteTypeRemovedEventFilter;

    "WasteTypeUpdated(uint256,uint256,string)"(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      wasteTypeId?: null,
      newName?: null
    ): WasteTypeUpdatedEventFilter;
    WasteTypeUpdated(
      categoryId?: PromiseOrValue<BigNumberish> | null,
      wasteTypeId?: null,
      newName?: null
    ): WasteTypeUpdatedEventFilter;
  };

  estimateGas: {
    addOrUpdateCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      emissionRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addWasteTypeToCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      wasteTypeId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCarbonEmissionRate(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCategoryByWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWasteTypes(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCarbonEmissionRate(
      categoryId: PromiseOrValue<BigNumberish>,
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      newName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wasteCategories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wasteTypeToCategory(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addOrUpdateCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      emissionRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addWasteTypeToCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      wasteTypeId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCarbonEmissionRate(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCategoryByWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWasteTypes(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeCategory(
      categoryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCarbonEmissionRate(
      categoryId: PromiseOrValue<BigNumberish>,
      rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateWasteType(
      wasteTypeId: PromiseOrValue<BigNumberish>,
      newName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wasteCategories(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wasteTypeToCategory(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
