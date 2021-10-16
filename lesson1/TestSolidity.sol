pragma solidity ^0.8.4;



contract TestContract {
    
    
    address public myAddress;
    address payable myAddressPayable;
    uint public integerValue;
    bytes32 bytesValue;
    string public stringValue;
    uint[] integerValueList;
    bool public valueLess10;
    uint userId;
    address[] public addressPablicValue;
    
    // days minutes ether wei
    
    modifier moreThenLimit() {
        require(msg.value >= 1 ether, "Only more then one ether"); // 1 ether
        _; // function
    }
    
    modifier onlySubscribed() {
        require(Users[msg.sender].active == true, "Only active user");
        _;
    }
    
    struct user {
        uint balance;
        bool active;
        uint withdraw;
    }
    
    mapping(address => user) public Users;
    mapping(uint => user) public UsersById;
    
    function subscribeUser() public payable  {
        userId += 1;
        Users[msg.sender].active = true;
    }
    
    
    function checkUserActivity(address _address) public view returns(bool){
        return Users[_address].active;
    }
    
    
    
    function addToDeposit() public payable onlySubscribed {
        Users[msg.sender].balance += msg.value;
    }
    

    
    
}