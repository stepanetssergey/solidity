const TestContract = artifacts.require("./TestContract.sol");
const ITTOKEN = artifacts.require("./ITTOKEN.sol")

module.exports = function (deployer) {
  deployer.deploy(TestContract);
  deployer.deploy(ITTOKEN)
};