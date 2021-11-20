pragma solidity ^0.8.0;

contract Accounting {

    uint public deposit;

    mapping(address => uint) public UserDeposit;
    // function(address)

    

    constructor () {

    }
    function addDeposit(uint _deposit) public {
       deposit += _deposit;
       UserDeposit[msg.sender] += _deposit;
    }

    function removeDeposit(uint _deposit_remove) public {
       if (_deposit_remove >= UserDeposit[msg.sender]) {
           UserDeposit[msg.sender] = UserDeposit[msg.sender] - _deposit_remove;
       }
    }
}