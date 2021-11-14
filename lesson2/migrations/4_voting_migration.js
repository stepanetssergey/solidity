const Voting = artifacts.require("Voting");
const VERC20 = artifacts.require("VERC20")
const VERC721 = artifacts.require("VERC721")

module.exports = function (deployer) {
  deployer.deploy(Voting, "Solidity course", "AAA", VERC20.address, VERC721.address);
};
