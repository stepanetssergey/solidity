// SPDX-License-Identifier: MIT

pragma solidity 0.8.9;

contract TestContract {

    uint public TotalDeposit;

    struct sponsor {
        uint deposit;
    }

    struct user {
       bool active;
       uint deposit;
       mapping(address => sponsor) Sponsor;
       uint vote;
    }


    mapping(address => user) public Users;

    // [address(user), address(user)]

    function SetDeposit(uint _value) public {
        require(Users[msg.sender].active == true, "Not Registered user");
        TotalDeposit += _value;
    }

    function Registration() public {
       Users[msg.sender].active = true;
    }
 
    function AddVote(uint _vote) public {
      require(_vote != 0, "Set you rate");
      Users[msg.sender].vote = _vote;
    }

}