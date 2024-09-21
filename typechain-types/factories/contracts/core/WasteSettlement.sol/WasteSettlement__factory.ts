/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  WasteSettlement,
  WasteSettlementInterface,
} from "../../../../contracts/core/WasteSettlement.sol/WasteSettlement";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_usdc",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wasteToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wastePriceProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wasteDataProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_socialNodeRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
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
        name: "tradeId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "socialNode",
        type: "address",
      },
    ],
    name: "TradeApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "socialNode",
        type: "address",
      },
    ],
    name: "TradeRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wasteTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "usdcAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalEmission",
        type: "uint256",
      },
    ],
    name: "TradeSettled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "TradeSubmitted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tradeId",
        type: "uint256",
      },
    ],
    name: "approveTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingTrades",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "approver",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "wasteTypeIds",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "rejected",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "settled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "totalTokenReceived",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalUSDCReceived",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalEmissionAmount",
            type: "uint256",
          },
        ],
        internalType: "struct WasteSettlement.WasteTrade[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalTrades",
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
        internalType: "uint256",
        name: "page",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "getTradeList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "address",
            name: "approver",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "wasteTypeIds",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "rejected",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "settled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "totalTokenReceived",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalUSDCReceived",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalEmissionAmount",
            type: "uint256",
          },
        ],
        internalType: "struct WasteSettlement.WasteTrade[]",
        name: "",
        type: "tuple[]",
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
        internalType: "uint256",
        name: "tradeId",
        type: "uint256",
      },
    ],
    name: "rejectTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "socialNodeRegistry",
    outputs: [
      {
        internalType: "contract ISocialNodeRegistry",
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
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "string[]",
        name: "wasteTypeIds",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "submitWasteTrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tradeCounter",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "trades",
    outputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "rejected",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "settled",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "totalTokenReceived",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalUSDCReceived",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalEmissionAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_socialNodeRegistry",
        type: "address",
      },
    ],
    name: "updateSocialNodeRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wasteDataProvider",
        type: "address",
      },
    ],
    name: "updateWasteDataProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wastePriceProvider",
        type: "address",
      },
    ],
    name: "updateWastePriceProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "usdc",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wasteDataProvider",
    outputs: [
      {
        internalType: "contract IWasteDataProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wastePriceProvider",
    outputs: [
      {
        internalType: "contract IWastePriceProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wasteToken",
    outputs: [
      {
        internalType: "contract IWasteToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e7b38038062001e7b83398101604081905262000034916200010f565b6200003f33620000a2565b600180546001600160a01b03199081166001600160a01b039788161790915560028054821695871695909517909455600380548516938616939093179092556004805484169185169190911790556005805490921692169190911790556200017f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200010a57600080fd5b919050565b600080600080600060a086880312156200012857600080fd5b6200013386620000f2565b94506200014360208701620000f2565b93506200015360408701620000f2565b92506200016360608701620000f2565b91506200017360808701620000f2565b90509295509295909350565b611cec806200018f6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80635a52ac42116100ad578063b127886211610071578063b1278862146102f0578063b6214e0f14610303578063d29d0d4d14610316578063ebd34f5014610329578063f2fde38b1461033157600080fd5b80635a52ac421461029a578063660d15b5146102ad578063715018a6146102c45780638da5cb5b146102cc578063a89234e3146102dd57600080fd5b80631e6c598e116100f45780631e6c598e1461018a57806325612867146102415780632928cd941461024957806338ac5655146102745780633e413bee1461028757600080fd5b806301663e5914610126578063062281c01461013b57806314b1d1d41461014e5780631e5c016d14610161575b600080fd5b61013961013436600461164d565b610344565b005b610139610149366004611682565b6104e2565b61013961015c36600461164d565b61050c565b61017461016f3660046116a4565b610688565b604051610181919061179f565b60405180910390f35b6101f361019836600461164d565b60076020819052600091825260409091208054600182015460048301546005840154600685015494909501546001600160a01b0393841695929093169360ff8083169461010084048216946201000090940490911692919088565b604080516001600160a01b03998a1681529890971660208901529415159587019590955291151560608601521515608085015260a084015260c083019190915260e082015261010001610181565b6101746109db565b60045461025c906001600160a01b031681565b6040516001600160a01b039091168152602001610181565b60025461025c906001600160a01b031681565b60015461025c906001600160a01b031681565b6101396102a8366004611682565b610c7c565b6102b660065481565b604051908152602001610181565b610139610ca6565b6000546001600160a01b031661025c565b6101396102eb36600461192e565b610cba565b6101396102fe366004611682565b610f01565b60035461025c906001600160a01b031681565b60055461025c906001600160a01b031681565b6006546102b6565b61013961033f366004611682565b610f2b565b60055460405163ce03ba1560e01b81523360048201526001600160a01b039091169063ce03ba1590602401602060405180830381865afa15801561038c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b09190611a7b565b6104015760405162461bcd60e51b815260206004820152601b60248201527f4f6e6c7920536f6369616c4e6f64652063616e20617070726f7665000000000060448201526064015b60405180910390fd5b6000818152600760205260409020600481015460ff1615801561042e57506004810154610100900460ff16155b6104745760405162461bcd60e51b8152602060048201526017602482015276151c98591948185b1c9958591e481c1c9bd8d95cdcd959604a1b60448201526064016103f8565b60048101805460ff19166001908117909155810180546001600160a01b031916339081179091556040517f642ea0b1d63cc70f38e39719b589ae0a9a111ef74ae825093d1574009bdf4e29906104cd9085815260200190565b60405180910390a26104de82610fa4565b5050565b6104ea61142f565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b60055460405163ce03ba1560e01b81523360048201526001600160a01b039091169063ce03ba1590602401602060405180830381865afa158015610554573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105789190611a7b565b6105c45760405162461bcd60e51b815260206004820152601a60248201527f4f6e6c7920536f6369616c4e6f64652063616e2072656a65637400000000000060448201526064016103f8565b6000818152600760205260409020600481015460ff161580156105f157506004810154610100900460ff16155b6106375760405162461bcd60e51b8152602060048201526017602482015276151c98591948185b1c9958591e481c1c9bd8d95cdcd959604a1b60448201526064016103f8565b60048101805461ff00191661010017905560405133907f1467d10b347736e8967d42852d25e3181fd4c70dcd2df433c27e02c051e2ab199061067c9085815260200190565b60405180910390a25050565b606060008311801561069a5750600082115b6106f45760405162461bcd60e51b815260206004820152602560248201527f5061676520616e64206c696d6974206d75737420626520677265617465722074604482015264068616e20360dc1b60648201526084016103f8565b600082610702600186611ab3565b61070c9190611ac6565b90506006548110610751576040805160008082526020820190925290610748565b6107356114d9565b81526020019060019003908161072d5790505b509150506109d5565b6006548390610761908390611ab3565b81111561077957816006546107769190611ab3565b90505b60008167ffffffffffffffff8111156107945761079461189b565b6040519080825280602002602001820160405280156107cd57816020015b6107ba6114d9565b8152602001906001900390816107b25790505b50905060005b828110156109cf57600760006107e98387611add565b81526020808201929092526040908101600090812082516101408101845281546001600160a01b0390811682526001830154168186015260028201805485518188028101880187528181529296939587019492939192909184015b828210156108f057838290600052602060002001805461086390611af0565b80601f016020809104026020016040519081016040528092919081815260200182805461088f90611af0565b80156108dc5780601f106108b1576101008083540402835291602001916108dc565b820191906000526020600020905b8154815290600101906020018083116108bf57829003601f168201915b505050505081526020019060010190610844565b5050505081526020016003820180548060200260200160405190810160405280929190818152602001828054801561094757602002820191906000526020600020905b815481526020019060010190808311610933575b5050509183525050600482015460ff80821615156020840152610100820481161515604084015262010000909104161515606082015260058201546080820152600682015460a082015260079091015460c09091015282518390839081106109b1576109b1611b2a565b602002602001018190525080806109c790611b40565b9150506107d3565b50925050505b92915050565b6060600060065467ffffffffffffffff8111156109fa576109fa61189b565b604051908082528060200260200182016040528015610a3357816020015b610a206114d9565b815260200190600190039081610a185790505b5090506000805b600654811015610c745760008181526007602052604090206004015460ff16158015610a7d5750600081815260076020526040902060040154610100900460ff16155b15610c6257600081815260076020908152604080832081516101408101835281546001600160a01b03908116825260018301541681850152600282018054845181870281018701865281815292969395948701949293919290919084015b82821015610b87578382906000526020600020018054610afa90611af0565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2690611af0565b8015610b735780601f10610b4857610100808354040283529160200191610b73565b820191906000526020600020905b815481529060010190602001808311610b5657829003601f168201915b505050505081526020019060010190610adb565b50505050815260200160038201805480602002602001604051908101604052809291908181526020018280548015610bde57602002820191906000526020600020905b815481526020019060010190808311610bca575b5050509183525050600482015460ff80821615156020840152610100820481161515604084015262010000909104161515606082015260058201546080820152600682015460a082015260079091015460c0909101528351849084908110610c4857610c48611b2a565b60200260200101819052508180610c5e90611b40565b9250505b80610c6c81611b40565b915050610a3a565b509092915050565b610c8461142f565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b610cae61142f565b610cb86000611489565b565b82518114610cfe5760405162461bcd60e51b81526020600482015260116024820152704d69736d61746368656420696e7075747360781b60448201526064016103f8565b6000835111610d445760405162461bcd60e51b8152602060048201526012602482015271139bc81dd85cdd19481cdd589b5a5d1d195960721b60448201526064016103f8565b604051806101400160405280856001600160a01b0316815260200160006001600160a01b03168152602001848152602001838380806020026020016040519081016040528093929190818152602001838360200280828437600092018290525093855250505060208083018290526040808401839052606084018390526080840183905260a0840183905260c090930182905260065482526007815290829020835181546001600160a01b039182166001600160a01b031991821617835585840151600184018054919093169116179055918301518051610e2b9260028501920190611544565b5060608201518051610e4791600384019160209091019061159a565b50608082015160048201805460a085015160c086015161ffff1990921693151561ff0019169390931761010093151584021762ff00001916620100009115159190910217905560e08301516005830155820151600680830191909155610120909201516007909101555460405190815233907fef672b28bae6a730424a771e68963a9574c78dddaf507e3d293452dc20a260129060200160405180910390a260068054906000610ef683611b40565b919050555050505050565b610f0961142f565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b610f3361142f565b6001600160a01b038116610f985760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103f8565b610fa181611489565b50565b6000818152600760205260409020600481015460ff16610ffb5760405162461bcd60e51b8152602060048201526012602482015271151c985919481b9bdd08185c1c1c9bdd995960721b60448201526064016103f8565b600481015462010000900460ff161561104e5760405162461bcd60e51b8152602060048201526015602482015274151c98591948185b1c9958591e481cd95d1d1b1959605a1b60448201526064016103f8565b6000806000805b600285015481101561128757600085600201828154811061107857611078611b2a565b90600052602060002001805461108d90611af0565b80601f01602080910402602001604051908101604052809291908181526020018280546110b990611af0565b80156111065780601f106110db57610100808354040283529160200191611106565b820191906000526020600020905b8154815290600101906020018083116110e957829003601f168201915b50505050509050600086600301838154811061112457611124611b2a565b600091825260208220015460035460405163123f2bf960e21b81529193506001600160a01b0316906348fcafe490611160908690600401611b59565b602060405180830381865afa15801561117d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a19190611b6c565b6004805460405163430be16160e11b81529293506000926001600160a01b0390911691638617c2c2916111d691889101611b59565b602060405180830381865afa1580156111f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112179190611b6c565b90506127106112268285611ac6565b61123890670de0b6b3a7640000611ac6565b6112429190611b85565b61124c9089611add565b97506112588284611ac6565b6112629088611add565b965061126e8187611add565b955050505050808061127f90611b40565b915050611055565b5060078401819055600684018290556005840183905560025484546040516340c10f1960e01b81526001600160a01b039182166004820152602481018690529116906340c10f1990604401600060405180830381600087803b1580156112ec57600080fd5b505af1158015611300573d6000803e3d6000fd5b5050600154865460405163a9059cbb60e01b81526001600160a01b039182166004820152602481018790529116925063a9059cbb91506044016020604051808303816000875af1158015611358573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061137c9190611a7b565b6113bf5760405162461bcd60e51b81526020600482015260146024820152731554d110c81d1c985b9cd9995c8819985a5b195960621b60448201526064016103f8565b60048401805462ff000019166201000017905583546040805187815260208101869052908101849052606081018390526001600160a01b03909116907fafd9029454fd898985ab25bb03c94c2831f4a6c0caba47410c601bfe4b110dff9060800160405180910390a25050505050565b6000546001600160a01b03163314610cb85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103f8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60405180610140016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160608152602001606081526020016000151581526020016000151581526020016000151581526020016000815260200160008152602001600081525090565b82805482825590600052602060002090810192821561158a579160200282015b8281111561158a578251829061157a9082611bf6565b5091602001919060010190611564565b506115969291506115e1565b5090565b8280548282559060005260206000209081019282156115d5579160200282015b828111156115d55782518255916020019190600101906115ba565b506115969291506115fe565b808211156115965760006115f58282611613565b506001016115e1565b5b8082111561159657600081556001016115ff565b50805461161f90611af0565b6000825580601f1061162f575050565b601f016020900490600052602060002090810190610fa191906115fe565b60006020828403121561165f57600080fd5b5035919050565b80356001600160a01b038116811461167d57600080fd5b919050565b60006020828403121561169457600080fd5b61169d82611666565b9392505050565b600080604083850312156116b757600080fd5b50508035926020909101359150565b6000815180845260005b818110156116ec576020818501810151868301820152016116d0565b506000602082860101526020601f19601f83011685010191505092915050565b600082825180855260208086019550808260051b84010181860160005b8481101561175757601f198684030189526117458383516116c6565b98840198925090830190600101611729565b5090979650505050505050565b600081518084526020808501945080840160005b8381101561179457815187529582019590820190600101611778565b509495945050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561188d57888303603f19018552815180516001600160a01b03168452610140818901516001600160a01b038116868b0152508782015181898701526118118287018261170c565b9150506060808301518683038288015261182b8382611764565b925050506080808301516118428288018215159052565b505060a08281015115159086015260c08083015115159086015260e08083015190860152610100808301519086015261012091820151919094015293860193908601906001016117c6565b509098975050505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156118da576118da61189b565b604052919050565b60008083601f8401126118f457600080fd5b50813567ffffffffffffffff81111561190c57600080fd5b6020830191508360208260051b850101111561192757600080fd5b9250929050565b6000806000806060858703121561194457600080fd5b61194d85611666565b935060208086013567ffffffffffffffff8082111561196b57600080fd5b818801915088601f83011261197f57600080fd5b8135818111156119915761199161189b565b8060051b6119a08582016118b1565b918252838101850191858101908c8411156119ba57600080fd5b86860192505b83831015611a48578235858111156119d757600080fd5b8601603f81018e136119e857600080fd5b87810135868111156119fc576119fc61189b565b611a0e601f8201601f19168a016118b1565b8181528f6040838501011115611a245760008081fd5b81604084018b83013760009181018a019190915283525091860191908601906119c0565b98505050506040880135925080831115611a6157600080fd5b5050611a6f878288016118e2565b95989497509550505050565b600060208284031215611a8d57600080fd5b8151801515811461169d57600080fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156109d5576109d5611a9d565b80820281158282048414176109d5576109d5611a9d565b808201808211156109d5576109d5611a9d565b600181811c90821680611b0457607f821691505b602082108103611b2457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600060018201611b5257611b52611a9d565b5060010190565b60208152600061169d60208301846116c6565b600060208284031215611b7e57600080fd5b5051919050565b600082611ba257634e487b7160e01b600052601260045260246000fd5b500490565b601f821115611bf157600081815260208120601f850160051c81016020861015611bce5750805b601f850160051c820191505b81811015611bed57828155600101611bda565b5050505b505050565b815167ffffffffffffffff811115611c1057611c1061189b565b611c2481611c1e8454611af0565b84611ba7565b602080601f831160018114611c595760008415611c415750858301515b600019600386901b1c1916600185901b178555611bed565b600085815260208120601f198616915b82811015611c8857888601518255948401946001909101908401611c69565b5085821015611ca65787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220f9d04bc3d1cce52c982bd03d3a215c2740d0896bf54e2fb43124d04f73bdc52c64736f6c63430008130033";

type WasteSettlementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WasteSettlementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WasteSettlement__factory extends ContractFactory {
  constructor(...args: WasteSettlementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usdc: PromiseOrValue<string>,
    _wasteToken: PromiseOrValue<string>,
    _wastePriceProvider: PromiseOrValue<string>,
    _wasteDataProvider: PromiseOrValue<string>,
    _socialNodeRegistry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WasteSettlement> {
    return super.deploy(
      _usdc,
      _wasteToken,
      _wastePriceProvider,
      _wasteDataProvider,
      _socialNodeRegistry,
      overrides || {}
    ) as Promise<WasteSettlement>;
  }
  override getDeployTransaction(
    _usdc: PromiseOrValue<string>,
    _wasteToken: PromiseOrValue<string>,
    _wastePriceProvider: PromiseOrValue<string>,
    _wasteDataProvider: PromiseOrValue<string>,
    _socialNodeRegistry: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _usdc,
      _wasteToken,
      _wastePriceProvider,
      _wasteDataProvider,
      _socialNodeRegistry,
      overrides || {}
    );
  }
  override attach(address: string): WasteSettlement {
    return super.attach(address) as WasteSettlement;
  }
  override connect(signer: Signer): WasteSettlement__factory {
    return super.connect(signer) as WasteSettlement__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WasteSettlementInterface {
    return new utils.Interface(_abi) as WasteSettlementInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WasteSettlement {
    return new Contract(address, _abi, signerOrProvider) as WasteSettlement;
  }
}
