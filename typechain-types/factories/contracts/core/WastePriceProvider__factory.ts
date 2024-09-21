/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WastePriceProvider,
  WastePriceProviderInterface,
} from "../../../contracts/core/WastePriceProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId_",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "relayer_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyArgs",
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
    name: "OnlyRouterCanFulfill",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "wasteType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestFulfilled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "RequestSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wasteType",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "Response",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "donID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wasteTypeId",
        type: "uint256",
      },
    ],
    name: "getWastePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "relayer",
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
        internalType: "uint256",
        name: "wasteTypeId",
        type: "uint256",
      },
    ],
    name: "requestWastePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requestWasteType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "router",
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
    inputs: [],
    name: "s_lastError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_lastRequestId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "s_lastResponse",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newRelayer",
        type: "address",
      },
    ],
    name: "setRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wasteTypeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setWastePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes",
      },
    ],
    name: "testFulfillRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "wastePrices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x600580546001600160a01b03191673b83e47c2bc239b3bf370bc41e1459a34b41238d01790557f66756e2d657468657265756d2d7365706f6c69612d31000000000000000000006006556007805463ffffffff1916620493e017905561024060405261017460a08181529062001cee60c039600a90620000809082620002f1565b503480156200008e57600080fd5b5060405162001e6238038062001e62833981016040819052620000b191620003bd565b6005546001600160a01b03166080523380600081620001175760405162461bcd60e51b815260206004820152601860248201527f43616e6e6f7420736574206f776e657220746f207a65726f000000000000000060448201526064015b60405180910390fd5b600080546001600160a01b0319166001600160a01b03848116919091179091558116156200014a576200014a81620001a1565b5050600780546001600160a01b039093166c01000000000000000000000000026001600160601b036001600160401b03909516640100000000029490941663ffffffff909316929092179290921790555062000412565b336001600160a01b03821603620001fb5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c6600000000000000000060448201526064016200010e565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200027757607f821691505b6020821081036200029857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002ec57600081815260208120601f850160051c81016020861015620002c75750805b601f850160051c820191505b81811015620002e857828155600101620002d3565b5050505b505050565b81516001600160401b038111156200030d576200030d6200024c565b62000325816200031e845462000262565b846200029e565b602080601f8311600181146200035d5760008415620003445750858301515b600019600386901b1c1916600185901b178555620002e8565b600085815260208120601f198616915b828110156200038e578886015182559484019460019091019084016200036d565b5085821015620003ad5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008060408385031215620003d157600080fd5b82516001600160401b0381168114620003e957600080fd5b60208401519092506001600160a01b03811681146200040757600080fd5b809150509250929050565b6080516118b962000435600039600081816102fd0152610caa01526118b96000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80637f27b9e5116100ad578063e4b1e43c11610071578063e4b1e43c14610274578063f2fde38b14610287578063f68016b71461029a578063f887ea40146102bf578063fa67f9ca146102d257600080fd5b80637f27b9e5146102025780638406c079146102155780638da5cb5b14610247578063af70ad8014610258578063b1e217491461026b57600080fd5b80633944ea3a116100f45780633944ea3a146101c15780634b0795a8146101d65780636548e9bc146101de5780636e74336b146101f157806379ba5097146101fa57600080fd5b806309c1ba2e146101265780630ca761751461015e57806338e7ebf51461017357806338feb688146101a1575b600080fd5b6007546101419064010000000090046001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b61017161016c3660046114bb565b6102f2565b005b610193610181366004611527565b60096020526000908152604090205481565b604051908152602001610155565b6101936101af366004611527565b60086020526000908152604090205481565b6101c9610376565b6040516101559190611586565b6101c9610404565b6101716101ec366004611599565b610411565b61019360065481565b6101716104a1565b6101716102103660046114bb565b61054b565b60075461022f90600160601b90046001600160a01b031681565b6040516001600160a01b039091168152602001610155565b6000546001600160a01b031661022f565b6101716102663660046115c2565b61055b565b61019360025481565b610171610282366004611527565b6105b2565b610171610295366004611599565b61079b565b6007546102aa9063ffffffff1681565b60405163ffffffff9091168152602001610155565b60055461022f906001600160a01b031681565b6101936102e0366004611527565b60009081526008602052604090205490565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461033b5760405163c6829f8360e01b815260040160405180910390fd5b6103468383836107af565b60405183907f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e690600090a2505050565b60038054610383906115e4565b80601f01602080910402602001604051908101604052809291908181526020018280546103af906115e4565b80156103fc5780601f106103d1576101008083540402835291602001916103fc565b820191906000526020600020905b8154815290600101906020018083116103df57829003601f168201915b505050505081565b60048054610383906115e4565b6104196108ab565b6001600160a01b0381166104745760405162461bcd60e51b815260206004820152601760248201527f496e76616c69642052454c41594552206164647265737300000000000000000060448201526064015b60405180910390fd5b600780546001600160a01b03909216600160601b026bffffffffffffffffffffffff909216919091179055565b6001546001600160a01b031633146104f45760405162461bcd60e51b815260206004820152601660248201527526bab9ba10313290383937b837b9b2b21037bbb732b960511b604482015260640161046b565b60008054336001600160a01b0319808316821784556001805490911690556040516001600160a01b0390921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b6105568383836107af565b505050565b6105636108ab565b60008281526008602090815260409182902083905581518481529081018390527f945c1c4e99aa89f648fbfe3df471b916f719e16d960fcec0737d4d56bd696838910160405180910390a15050565b600754600160601b90046001600160a01b031633146106135760405162461bcd60e51b815260206004820152601960248201527f43616c6c6572206973206e6f74207468652052454c4159455200000000000000604482015260640161046b565b6106546040805160e0810190915280600081526020016000815260200160008152602001606081526020016060815260200160608152602001606081525090565b6106f1600a8054610664906115e4565b80601f0160208091040260200160405190810160405280929190818152602001828054610690906115e4565b80156106dd5780601f106106b2576101008083540402835291602001916106dd565b820191906000526020600020905b8154815290600101906020018083116106c057829003601f168201915b50505050508261090090919063ffffffff16565b604080516001808252818301909252600091816020015b606081526020019060019003908161070857905050905061072883610911565b8160008151811061073b5761073b61161e565b602090810291909101015261075082826109a3565b61078061075c836109cd565b6007546006546001600160401b036401000000008304169163ffffffff1690610ca5565b60028190556000908152600960205260409020929092555050565b6107a36108ab565b6107ac81610d77565b50565b60008381526009602052604081205490036108005760405162461bcd60e51b8152602060048201526011602482015270125b9d985b1a59081c995c5d595cdd1259607a1b604482015260640161046b565b6000838152600960205260408120549061081984611634565b600083815260086020526040908190208290555190915085907ffc03b1503acd478faf9c08107596f6d5c04b4591fea84f8d6f21bdf613b5370e9061086390859088908890611658565b60405180910390a260408051838152602081018390527f945c1c4e99aa89f648fbfe3df471b916f719e16d960fcec0737d4d56bd696838910160405180910390a15050505050565b6000546001600160a01b031633146108fe5760405162461bcd60e51b815260206004820152601660248201527527b7363c9031b0b63630b1363290313c9037bbb732b960511b604482015260640161046b565b565b61090d8260008084610e20565b5050565b6060600061091e83610e9e565b60010190506000816001600160401b0381111561093d5761093d611419565b6040519080825280601f01601f191660200182016040528015610967576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461097157509392505050565b80516000036109c55760405163fe936cb760e01b815260040160405180910390fd5b60a090910152565b606060006109dc610100610f77565b9050610a156040518060400160405280600c81526020016b31b7b232a637b1b0ba34b7b760a11b81525082610f9890919063ffffffff16565b8251610a33906002811115610a2c57610a2c61168d565b8290610fb1565b6040805180820190915260088152676c616e677561676560c01b6020820152610a5d908290610f98565b6040830151610a74908015610a2c57610a2c61168d565b604080518082019091526006815265736f7572636560d01b6020820152610a9c908290610f98565b6060830151610aac908290610f98565b60a08301515115610b40576040805180820190915260048152636172677360e01b6020820152610add908290610f98565b610ae681610fea565b60005b8360a0015151811015610b3657610b268460a001518281518110610b0f57610b0f61161e565b602002602001015183610f9890919063ffffffff16565b610b2f816116b9565b9050610ae9565b50610b408161100e565b60808301515115610c0457600083602001516002811115610b6357610b6361168d565b03610b815760405163a80d31f760e01b815260040160405180910390fd5b60408051808201909152600f81526e39b2b1b932ba39a637b1b0ba34b7b760891b6020820152610bb2908290610f98565b610bcb83602001516002811115610a2c57610a2c61168d565b6040805180820190915260078152667365637265747360c81b6020820152610bf4908290610f98565b6080830151610c0490829061102c565b60c08301515115610c9d5760408051808201909152600981526862797465734172677360b81b6020820152610c3a908290610f98565b610c4381610fea565b60005b8360c0015151811015610c9357610c838460c001518281518110610c6c57610c6c61161e565b60200260200101518361102c90919063ffffffff16565b610c8c816116b9565b9050610c46565b50610c9d8161100e565b515192915050565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663461d27628688600188886040518663ffffffff1660e01b8152600401610cfd9594939291906116d2565b6020604051808303816000875af1158015610d1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d40919061171b565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b336001600160a01b03821603610dcf5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000604482015260640161046b565b600180546001600160a01b0319166001600160a01b0383811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b8051600003610e42576040516322ce3edd60e01b815260040160405180910390fd5b83836002811115610e5557610e5561168d565b90816002811115610e6857610e6861168d565b90525060408401828015610e7e57610e7e61168d565b90818015610e8e57610e8e61168d565b9052506060909301929092525050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610edd5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610f09576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610f2757662386f26fc10000830492506010015b6305f5e1008310610f3f576305f5e100830492506008015b6127108310610f5357612710830492506004015b60648310610f65576064830492506002015b600a8310610f71576001015b92915050565b610f7f6113e4565b8051610f8b9083611039565b5060006020820152919050565b610fa582600383516110b0565b815161055690826111cf565b8151610fbe9060c26111f7565b5061090d8282604051602001610fd691815260200190565b60405160208183030381529060405261102c565b610ff5816004611260565b6001816020018181516110089190611734565b90525050565b611019816007611260565b6001816020018181516110089190611747565b610fa582600283516110b0565b60408051808201909152606081526000602082015261105960208361175a565b156110815761106960208361175a565b611074906020611747565b61107e9083611734565b91505b6020808401839052604051808552600081529081840101818110156110a557600080fd5b604052509192915050565b6017816001600160401b0316116110dc5782516110d69060e0600585901b1683176111f7565b50505050565b60ff816001600160401b03161161111c578251611104906018611fe0600586901b16176111f7565b5082516110d6906001600160401b0383166001611277565b61ffff816001600160401b03161161115d578251611145906019611fe0600586901b16176111f7565b5082516110d6906001600160401b0383166002611277565b63ffffffff816001600160401b0316116111a057825161118890601a611fe0600586901b16176111f7565b5082516110d6906001600160401b0383166004611277565b82516111b790601b611fe0600586901b16176111f7565b5082516110d6906001600160401b0383166008611277565b6040805180820190915260608152600060208201526111f0838384516112fc565b9392505050565b604080518082019091526060815260006020820152825151600061121c826001611734565b90508460200151821061123d5761123d8561123883600261177c565b6113cd565b8451602083820101858153508051821115611256578181525b5093949350505050565b815161055690601f611fe0600585901b16176111f7565b604080518082019091526060815260006020820152835151600061129b8285611734565b905085602001518111156112b8576112b88661123883600261177c565b600060016112c886610100611877565b6112d29190611747565b905086518281018783198251161781525080518311156112f0578281525b50959695505050505050565b604080518082019091526060815260006020820152825182111561131f57600080fd5b835151600061132e8483611734565b9050856020015181111561134b5761134b8661123883600261177c565b855180518382016020019160009180851115611365578482525b505050602086015b602086106113a55780518252611384602083611734565b9150611391602082611734565b905061139e602087611747565b955061136d565b51815160001960208890036101000a0190811690199190911617905250849150509392505050565b81516113d98383611039565b506110d683826111cf565b604051806040016040528061140c604051806040016040528060608152602001600081525090565b8152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261144057600080fd5b81356001600160401b038082111561145a5761145a611419565b604051601f8301601f19908116603f0116810190828211818310171561148257611482611419565b8160405283815286602085880101111561149b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156114d057600080fd5b8335925060208401356001600160401b03808211156114ee57600080fd5b6114fa8783880161142f565b9350604086013591508082111561151057600080fd5b5061151d8682870161142f565b9150509250925092565b60006020828403121561153957600080fd5b5035919050565b6000815180845260005b818110156115665760208185018101518683018201520161154a565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006111f06020830184611540565b6000602082840312156115ab57600080fd5b81356001600160a01b03811681146111f057600080fd5b600080604083850312156115d557600080fd5b50508035926020909101359150565b600181811c908216806115f857607f821691505b60208210810361161857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b805160208083015191908110156116185760001960209190910360031b1b16919050565b8381526060602082015260006116716060830185611540565b82810360408401526116838185611540565b9695505050505050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016116cb576116cb6116a3565b5060010190565b6001600160401b038616815260a0602082015260006116f460a0830187611540565b61ffff9590951660408301525063ffffffff92909216606083015260809091015292915050565b60006020828403121561172d57600080fd5b5051919050565b80820180821115610f7157610f716116a3565b81810381811115610f7157610f716116a3565b60008261177757634e487b7160e01b600052601260045260246000fd5b500690565b8082028115828204841417610f7157610f716116a3565b600181815b808511156117ce5781600019048211156117b4576117b46116a3565b808516156117c157918102915b93841c9390800290611798565b509250929050565b6000826117e557506001610f71565b816117f257506000610f71565b816001811461180857600281146118125761182e565b6001915050610f71565b60ff841115611823576118236116a3565b50506001821b610f71565b5060208310610133831016604e8410600b8410161715611851575081810a610f71565b61185b8383611793565b806000190482111561186f5761186f6116a3565b029392505050565b60006111f083836117d656fea26469706673582212206645168bd32838225961189bdafc4993527a133cecc6a999963f4c52c0bd7c7964736f6c63430008130033636f6e737420776173746554797065203d20617267735b305d3b636f6e737420617069526573706f6e7365203d2061776169742046756e6374696f6e732e6d616b654874747052657175657374287b75726c3a6068747470733a2f2f617369612d736f75746865617374312d77617374652d70726f746f636f6c2e636c6f756466756e6374696f6e732e6e65742f77617374655072696365733f69643d247b7761737465547970657d607d293b69662028617069526573706f6e73652e6572726f7229207b7468726f77204572726f72286052657175657374206661696c656460293b7d636f6e7374207b2064617461207d203d20617069526573706f6e73653b636f6e7374205f7072696365203d20646174612e70726963653b636f6e7374207072696365203d204d6174682e666c6f6f72285f7072696365202a204d6174682e706f772831302c313829293b72657475726e2046756e6374696f6e732e656e636f646555696e74323536287072696365293b";

type WastePriceProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WastePriceProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WastePriceProvider__factory extends ContractFactory {
  constructor(...args: WastePriceProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    subscriptionId_: PromiseOrValue<BigNumberish>,
    relayer_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WastePriceProvider> {
    return super.deploy(
      subscriptionId_,
      relayer_,
      overrides || {}
    ) as Promise<WastePriceProvider>;
  }
  override getDeployTransaction(
    subscriptionId_: PromiseOrValue<BigNumberish>,
    relayer_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      subscriptionId_,
      relayer_,
      overrides || {}
    );
  }
  override attach(address: string): WastePriceProvider {
    return super.attach(address) as WastePriceProvider;
  }
  override connect(signer: Signer): WastePriceProvider__factory {
    return super.connect(signer) as WastePriceProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WastePriceProviderInterface {
    return new utils.Interface(_abi) as WastePriceProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WastePriceProvider {
    return new Contract(address, _abi, signerOrProvider) as WastePriceProvider;
  }
}
