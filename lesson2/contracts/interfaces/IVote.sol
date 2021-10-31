pragma solidity ^0.8.4;

interface IVote {
    function getUserVote(uint _subjectId, address userAddress) external view returns (uint);


}