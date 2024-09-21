import { HardhatRuntimeEnvironment } from 'hardhat/types';

const contractName = 'WastePriceProvider';

module.exports = async function ({ ethers, network, getNamedAccounts, deployments }: HardhatRuntimeEnvironment) {
  const { provider } = ethers;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log(deployer);
  const balance = await provider.getBalance(deployer);
  console.log(`Remaining balance is: ${balance}`);

  const chainId = network.config.chainId;
  const contract = await deploy(contractName, {
    from: deployer,
    args: [3538, deployer],
    log: true,
    deterministicDeployment: false,
  });

  console.log(`Contract ${contractName} was deployed at address ${contract.address} at chain id : ${chainId}`);
  console.log('==================');

  // TODO : set default price
};

module.exports.tags = [contractName, 'PriceProvider', 'Core'];
module.exports.dependencies = [];
