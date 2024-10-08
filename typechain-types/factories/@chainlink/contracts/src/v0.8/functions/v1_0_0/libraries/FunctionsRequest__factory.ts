/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../common";
import type {
  FunctionsRequest,
  FunctionsRequestInterface,
} from "../../../../../../../../@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest";

const _abi = [
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "NoInlineSecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "REQUEST_DATA_VERSION",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608c610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80635d641dfc146038575b600080fd5b603f600181565b60405161ffff909116815260200160405180910390f3fea2646970667358221220b6c09da2637dd83792fadeba9c5331f713cceb8ba2b12bd69674eefc1c3b64d564736f6c63430008130033";

type FunctionsRequestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunctionsRequestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FunctionsRequest__factory extends ContractFactory {
  constructor(...args: FunctionsRequestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FunctionsRequest> {
    return super.deploy(overrides || {}) as Promise<FunctionsRequest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FunctionsRequest {
    return super.attach(address) as FunctionsRequest;
  }
  override connect(signer: Signer): FunctionsRequest__factory {
    return super.connect(signer) as FunctionsRequest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunctionsRequestInterface {
    return new utils.Interface(_abi) as FunctionsRequestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FunctionsRequest {
    return new Contract(address, _abi, signerOrProvider) as FunctionsRequest;
  }
}
