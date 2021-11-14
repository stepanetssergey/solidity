// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

contract VERC721 is ERC721 {

    address public mintingContract;
    address public owner;
    
   
   constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {
       owner = msg.sender;
   }

   modifier onlyMintingContract() {
       require(mintingContract == msg.sender, "Only minting contract");
       _;
   }

   modifier onlyOwner() {
       require(owner == msg.sender);
       _;
   }

   function setMintingContract(address _address) public  onlyOwner() {
       mintingContract = _address;
   }

   function mintNFTForUser(address _address, uint _tokenId) public onlyMintingContract() {
       _mint(_address, _tokenId);
   }

}