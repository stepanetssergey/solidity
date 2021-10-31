const VERC20 = artifacts.require("VERC20");

module.exports = function (deployer) {
  deployer.deploy(VERC20);
};
