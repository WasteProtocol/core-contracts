import { HardhatRuntimeEnvironment } from 'hardhat/types';

const contractName = 'WasteSettlement';

module.exports = async function ({ ethers, network, getNamedAccounts, deployments }: HardhatRuntimeEnvironment) {
  const { provider } = ethers;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log(deployer);
  const balance = await provider.getBalance(deployer);
  console.log(`Remaining balance is: ${balance}`);

  const usdc = await deployments.get('USDC');
  const wasteToken = await deployments.get('WasteToken');
  const wasteDataProvider = await deployments.get('WasteDataProvider');
  const wastePriceProvider = await deployments.get('WastePriceProvider');
  const socialNodeRegistry = await deployments.get('SocialNodeRegistry');

  const chainId = network.config.chainId;
  const contract = await deploy(contractName, {
    from: deployer,
    args: [
      usdc.address,
      wasteToken.address,
      wastePriceProvider.address,
      wasteDataProvider.address,
      socialNodeRegistry.address,
    ],
    log: true,
    deterministicDeployment: false,
  });

  console.log(`Contract ${contractName} was deployed at address ${contract.address} at chain id : ${chainId}`);
  console.log('==================');
};

module.exports.tags = [contractName, 'Token'];
module.exports.dependencies = [];
