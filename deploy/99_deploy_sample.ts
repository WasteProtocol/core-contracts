import { HardhatRuntimeEnvironment } from 'hardhat/types';

const contractName = 'GettingStartedFunctionsConsumer';

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
    args: [],
    log: true,
    deterministicDeployment: false,
  });

  console.log(`Contract ${contractName} was deployed at address ${contract.address} at chain id : ${chainId}`);
  console.log('==================');
};

module.exports.tags = [contractName, 'Sample'];
module.exports.dependencies = [];
