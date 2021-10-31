// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

contract Voting {
    address public owner;
    address public voteTokenAddress;
    string public name;
    string public symbol;

    uint public userId;
    uint public subjectId;

    event VoteEvent (address _userAddress, uint _subject, uint _vote);

    struct user {
        uint id;
        uint rate;
        uint age;
        string nickname;

        mapping(uint => uint) Vote;
    }

    struct subject {
        string name;
        string description;
        uint rate;
        uint startDate;
        uint endDate;
        bool active;
    }

    struct subjectAndVote {
        uint subject;
        uint vote;
    }

    constructor(string memory _name, string memory _symbol, address _address) {
        name = _name;
        symbol = _symbol;
        owner = msg.sender;
        voteTokenAddress = _address;
    }

    mapping(address => bool) public Admins;
    mapping(address => user) public Users;
    mapping(uint => address) public UserById;

    mapping(uint => subject) public Subjects;

    mapping(address => uint[]) public UserSubjects;

    mapping(address => subjectAndVote[]) public SubjectPlusVoteList;

    modifier onlyOwner(){
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyAdmin(){
        require(Admins[msg.sender] == true, "Only admin!");
        _;
    }


    function setVoteTokenAddress(address _address) public onlyOwner {
        voteTokenAddress = _address;
    }

    function setAdmin(address _address, bool _status) public onlyOwner {
        Admins[_address] = _status;
    }

    function signup(uint _age, string memory _nickname) public {
        userId += 1;

        UserById[userId] = msg.sender;
        Users[msg.sender].id = userId;
        Users[msg.sender].age = _age;
        Users[msg.sender].nickname = _nickname;
    }

    function addSubject(string memory _name,
        string memory _description,
        uint _rate,
        uint _startDate,
        uint _endDate) public onlyAdmin {

        subjectId += 1;

        Subjects[subjectId].name = _name;
        Subjects[subjectId].description = _description;
        Subjects[subjectId].rate = _rate;
        Subjects[subjectId].startDate = _startDate;
        Subjects[subjectId].endDate = _endDate;
    }

    function vote(uint _subjectId, uint _vote) public {
        require(Users[msg.sender].id != 0, "Not registered user!");
        require(_vote <= Subjects[_subjectId].rate, "Subject rate cannot be more than rate");

        IERC20 _vote_token = IERC20(voteTokenAddress);
        require(_vote_token.balanceOf(msg.sender) > 0, "Onle tokens owners");
        
        subjectAndVote memory currentList = subjectAndVote ({subject: _subjectId, vote: _vote});

        Users[msg.sender].Vote[_subjectId] = _vote;
        UserSubjects[msg.sender].push(_subjectId);

        SubjectPlusVoteList[msg.sender].push(currentList);

        emit VoteEvent(msg.sender, _subjectId, _vote);
    }

    function getUserVote(uint _subjectId, address userAddress) public view returns (uint) {
        return Users[userAddress].Vote[_subjectId];
    }

    function getUserSubjects(address _userAddress) public view returns (uint[] memory){
        return UserSubjects[_userAddress];
    }
}