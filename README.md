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
let dataProvider = await WasteDataProvider.attach("0xAB223653bFb6AD268773dfdAb75668D100325410")
let emissionRate = 91234 // 9.1234
await dataProvider.addOrUpdateCategory(1,'categoryname', emissionRate) // catid
await dataProvider.addWasteTypeToCategory(1, 1, 'type name') // catid, typeid

await dataProvider.addOrUpdateCategory(1,'plastic', 10300) 
await dataProvider.addOrUpdateCategory(2,'paper', 35400) 
await dataProvider.addWasteTypeToCategory(1, 1, 'Drinking Bottle') 
await dataProvider.addWasteTypeToCategory(1, 2, 'Milk Bottle') 
await dataProvider.addWasteTypeToCategory(2, 3, 'Newspaper') 
await dataProvider.addWasteTypeToCategory(2, 4, 'Cardboard Box') 
```

### refetch price to WastePriceProvider
```
let WastePriceProvider = await ethers.getContractFactory("WastePriceProvider")
priceProvider = await WastePriceProvider.attach("0xc6d741f92559EdA04E3E32Fb76f87AEfE9719Ba8")
await priceProvider.requestWasteType(1)
```

### add address to be a social node 
```
let SocialNodeRegistry = await ethers.getContractFactory("SocialNodeRegistry")
socialNodeRegistry = await SocialNodeRegistry.attach("0x56287933c2e7aBf68f2C0Dd43f807De4C5DA228f")
await socialNodeRegistry.addSocialNode(0x00)
```

### mint usdc 
```
let USDC = await ethers.getContractFactory("USDC")
let usdc = await USDC.attach("0xaBB8eF316584b0f4fFc2aEC5f5242992DfE81c3A")
await usdc.mint('0x85A0B75c36D9a3f01E5f87D2fb04F31Dc270B983', '100000000000000000000000000000')
```

### add settlement as a minter
```
let WasteToken = await ethers.getContractFactory("WasteToken")
let token = await WasteToken.attach("0x398B8fFC1bB1dFe4594B1860589e18Fb040AbC88")
await token.addMinter("0x85A0B75c36D9a3f01E5f87D2fb04F31Dc270B983")
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
WastePriceProvider : 

| Chain   | Name               | Address                                    |
|---------|--------------------|--------------------------------------------|
| Sepolia | WasteToken         | 0x398B8fFC1bB1dFe4594B1860589e18Fb040AbC88 |
| Sepolia | USDC               | 0xaBB8eF316584b0f4fFc2aEC5f5242992DfE81c3A |
| Sepolia | SocialNodeRegistry | 0x56287933c2e7aBf68f2C0Dd43f807De4C5DA228f |
| Sepolia | WasteDataProvider  | 0xAB223653bFb6AD268773dfdAb75668D100325410 |
| Sepolia | WastePriceProvider | 0xb1aDeA17371fA99406ea2425fC354cB4D90C2435 |
| Sepolia | WasteSettlement    | 0x85A0B75c36D9a3f01E5f87D2fb04F31Dc270B983 |


