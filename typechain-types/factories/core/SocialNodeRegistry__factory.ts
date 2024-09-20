/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  SocialNodeRegistry,
  SocialNodeRegistryInterface,
} from "../../core/SocialNodeRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "SocialNodeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "SocialNodeRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "addSocialNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "isSocialNode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "removeSocialNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600180546001600160a01b031916331790556103e1806100326000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635141b5d41461005c57806379d60cf7146100715780638da5cb5b14610084578063ce03ba15146100b4578063f2fde38b146100f0575b600080fd5b61006f61006a366004610353565b610103565b005b61006f61007f366004610353565b6101eb565b600154610097906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e06100c2366004610353565b6001600160a01b031660009081526020819052604090205460ff1690565b60405190151581526020016100ab565b61006f6100fe366004610353565b6102bf565b6001546001600160a01b031633146101365760405162461bcd60e51b815260040161012d90610383565b60405180910390fd5b6001600160a01b03811660009081526020819052604090205460ff161561019f5760405162461bcd60e51b815260206004820152601a60248201527f4e6f646520697320616c72656164792072656769737465726564000000000000604482015260640161012d565b6001600160a01b038116600081815260208190526040808220805460ff19166001179055517fe09245d372b32a6b8a9f8519973e8bd814db68eea1ea9563b6dbdf8b13fb40c19190a250565b6001546001600160a01b031633146102155760405162461bcd60e51b815260040161012d90610383565b6001600160a01b03811660009081526020819052604090205460ff166102765760405162461bcd60e51b8152602060048201526016602482015275139bd919481a5cc81b9bdd081c9959da5cdd195c995960521b604482015260640161012d565b6001600160a01b038116600081815260208190526040808220805460ff19169055517f122d6674cc1f646ff2b5f1925f2151f268b87ab97eb406201299a3d6ed2091bb9190a250565b6001546001600160a01b031633146102e95760405162461bcd60e51b815260040161012d90610383565b6001600160a01b0381166103315760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b604482015260640161012d565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60006020828403121561036557600080fd5b81356001600160a01b038116811461037c57600080fd5b9392505050565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b60408201526060019056fea2646970667358221220bba11b2a1b8bd39488f1049098a5ac7af58cc90c80b21f7a8fb01d513029040764736f6c634300080e0033";

type SocialNodeRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SocialNodeRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SocialNodeRegistry__factory extends ContractFactory {
  constructor(...args: SocialNodeRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SocialNodeRegistry> {
    return super.deploy(overrides || {}) as Promise<SocialNodeRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SocialNodeRegistry {
    return super.attach(address) as SocialNodeRegistry;
  }
  override connect(signer: Signer): SocialNodeRegistry__factory {
    return super.connect(signer) as SocialNodeRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SocialNodeRegistryInterface {
    return new utils.Interface(_abi) as SocialNodeRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SocialNodeRegistry {
    return new Contract(address, _abi, signerOrProvider) as SocialNodeRegistry;
  }
}
