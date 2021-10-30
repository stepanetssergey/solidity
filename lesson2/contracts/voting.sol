pragma solidity ^0.8.0;

contract Voting {

    address public owner;
    string public name;
    string public symbol;

    struct user {
        uint id;
        uint rate;
        uint age;
        string nickname;
    }


    constructor(string memory _name, string memory _symbol) {
       owner = msg.sender;
       name = _name;
       symbol = _symbol;
    }


    mapping (address => bool) public Admins; // [ address{true/false}]
    mapping (address => user) public Users;  // [ address{user(id, rate, age)}]

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyAdmin {
        require(Admins[msg.sender] == true, "Only admin");
        _;
    }

    function setAdmin(address _address, bool _status) public onlyOwner {
        Admins[_address] = _status;
    }

    function signUp(uint _age, string memory _nickname) public {
        Users[msg.sender].age = _age;
        Users[msg.sender].nickname = _nickname;
    }
}