const VERC721 = artifacts.require("VERC721");

module.exports = function (deployer) {
  deployer.deploy(VERC721, "VoteCollection", 'VCL');
};
