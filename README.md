# Smart contract boiler plate
This project is a smart contract development boiler plate develop by a3r0nz.
 version 1.1.0

## Documenting
To generate documents run this command

```shell
npm run gendoc
```

## Testing

To test contracts run

```shell
npm run test
```

## To deploy

Localhost
```
npm run deploy
```

Goerli
```shell
npm run deploy:goerli
```

Sepolia
```shell
npm run deploy:sepolia
```

## To verify contracts

Goerli
```shell
npm run verify:goerli
```

Sepolia
```shell
npm run verify:sepolia
```

Scripts

### add more data to WasteDataProvider
```
let WasteDataProvider = await ethers.getContractFactory("WasteDataProvider")
let dataProvider = await WasteDataProvider.attach("0x75f8Cf9659A65AabE41Ade64BB9F1Fb123a4185b")

await dataProvider.addOrUpdateCategory('679fae79-eaca-4460-b612-7f1b1832f3be','plastic', 10300) 
await dataProvider.addOrUpdateCategory('f731c55b-7d66-4e37-8194-c784b22cfe95','paper', 35400) 
await dataProvider.addWasteTypeToCategory('679fae79-eaca-4460-b612-7f1b1832f3be', 'b074bb47-46c3-4949-a51c-533e0545030c', 'Drinking Bottle') 
await dataProvider.addWasteTypeToCategory('679fae79-eaca-4460-b612-7f1b1832f3be', '4f8cadb8-284e-42d6-8572-4f4a306bf90f', 'Milk Bottle') 
await dataProvider.addWasteTypeToCategory('f731c55b-7d66-4e37-8194-c784b22cfe95', '8578b67e-7f85-4ae0-ab5d-93dfb26b43e6', 'Newspaper') 
await dataProvider.addWasteTypeToCategory('f731c55b-7d66-4e37-8194-c784b22cfe95', '80511cb5-62de-4645-b6e2-e8538633de2b', 'Cardboard Box') 
```

### refetch price to WastePriceProvider
```
let WastePriceProvider = await ethers.getContractFactory("WastePriceProvider")
priceProvider = await WastePriceProvider.attach("0x6e0E443A26b7599EEF9af5770e407381eDDFD6e1")
await priceProvider.requestWasteType(1)
```

### add address to be a social node 
```
let SocialNodeRegistry = await ethers.getContractFactory("SocialNodeRegistry")
socialNodeRegistry = await SocialNodeRegistry.attach("0x56287933c2e7aBf68f2C0Dd43f807De4C5DA228f")
await socialNodeRegistry.addSocialNode("0x31c49142060c8AC5921163a2e554AbB2C35Df8A0")
```

### mint usdc 
```
let USDC = await ethers.getContractFactory("USDC")
let usdc = await USDC.attach("0xaBB8eF316584b0f4fFc2aEC5f5242992DfE81c3A")
await usdc.mint('0xdCE2395d97A307c6179f7ee8A7b843c768BE4221', '100000000000000000000000000000')
```

### add settlement as a minter
```
let WasteToken = await ethers.getContractFactory("WasteToken")
let token = await WasteToken.attach("0x398B8fFC1bB1dFe4594B1860589e18Fb040AbC88")
await token.addMinter("0xdCE2395d97A307c6179f7ee8A7b843c768BE4221")
```

## step to setting up 
1. deploy all contract
2. mint usdc to WasteSettlement
3. add categories and types to WasteDataProvider
4. add WastePriceProvider address to consumer in subscription.
5. call WastePriceProvider request id : 1-4
6. add social node to registry
7. add settlement as a minter of waste token 
8. test call

## Sepolia

| Chain   | Name               | Address                                    |
|---------|--------------------|--------------------------------------------|
| Sepolia | WasteToken         | 0x398B8fFC1bB1dFe4594B1860589e18Fb040AbC88 |
| Sepolia | USDC               | 0xaBB8eF316584b0f4fFc2aEC5f5242992DfE81c3A |
| Sepolia | SocialNodeRegistry | 0x56287933c2e7aBf68f2C0Dd43f807De4C5DA228f |
| Sepolia | WasteDataProvider  | 0x75f8Cf9659A65AabE41Ade64BB9F1Fb123a4185b |
| Sepolia | WastePriceProvider | 0x6e0E443A26b7599EEF9af5770e407381eDDFD6e1 |
| Sepolia | WasteSettlement    | 0xdCE2395d97A307c6179f7ee8A7b843c768BE4221 |


## Linea sepolia

| Chain   | Name               | Address                                    |
|---------|--------------------|--------------------------------------------|
| linea   | WasteToken         | 0xa84aC71C1F6C5B533dA717f4eb88596bB2871aBf |
| linea | USDC               | 0x33533a67C62AcF8595CfDFC261F90b29bB617c39 |
| linea | SocialNodeRegistry |  |
| linea | WasteDataProvider  |  |
| linea | WastePriceProvider |  |
| linea | WasteSettlement    |  |
