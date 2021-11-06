var VotingContract = artifacts.require('./Voting.sol')
var VERC20 = artifacts.require('./VERC20.sol')
var Web3 = require('web3')

contract("Voting contract", (accounts) => {

    it("Check name and symbol for the contract", async () => {
        votingContract = await VotingContract.deployed()
        name = await votingContract.name()
        symbol = await votingContract.symbol()

        console.log(name)
        console.log(symbol)
    })
    
    it("Move tokens to contract", async () => {
        votingContract = await VotingContract.deployed()
        votetoken = await VERC20.deployed()
        web3 = new Web3()
        tokenAmount = web3.utils.toBN(5000)
        tokenAmountWeis = web3.utils.toWei(tokenAmount)
        await votetoken.transfer(votingContract.address, tokenAmountWeis)
        balanceContract = await votetoken.balanceOf(votingContract.address)
        console.log('Contract balance:', balanceContract.toString())
    })


    it("Signup user", async () => {
        votingContract = await VotingContract.deployed()
        await votingContract.signup(25, "guru", {from: accounts[4]})
        const user = await votingContract.Users(accounts[4])
        console.log((user.age).toNumber())
        console.log(user.nickname)
        console.log((user.id).toNumber())
    })

    it("Get tokens after sign up", async () => {
        votetoken = await VERC20.deployed()
        balanceAfterSign = await votetoken.balanceOf(accounts[4]);
        console.log('Balance for user after sign up', balanceAfterSign.toString())
    })

    it("Get tokens in contact after sign up", async () => {
        votetoken = await VERC20.deployed()
        votingContract = await VotingContract.deployed()
        balanceAfterSign = await votetoken.balanceOf(votingContract.address);
        console.log('Balance contract after signup:', balanceAfterSign.toString())
    })

    it("Signup user with ID", async () => {
        votingContract = await VotingContract.deployed()
        const userById = await votingContract.UserById(1)

        console.log(userById, accounts[4])
    })

    it("Set admin", async () => {
        votingContract = await VotingContract.deployed()
        await votingContract.setAdmin(accounts[5], true)

        const isAdmin = await votingContract.Admins(accounts[5])

        console.log(isAdmin)
    })

    it("Add subject", async () => {
        votingContract = await VotingContract.deployed()
        await votingContract.addSubject("Name", "description test", 10, 36258237, 459998987, {from: accounts[5]})

        const subject = await votingContract.Subjects(1)

        console.log(subject.name)
        console.log(subject.description)
        console.log(subject.rate)
        console.log(subject.startDate)
        console.log(subject.endDate)
    })

    // it("Transfer token accounts 4", async () => {
    //     erc20 = await VERC20.deployed()
    //     // await erc20.transfer(accounts[4], web3.utils.toBN(10 * 10 ** 18))  // accounts[0] -> accounts[4]
    //     await erc20.transferFrom(accounts[0], accounts[4], web3.utils.toBN(10 * 10 ** 18))
    //     const balance4 = await erc20.balanceOf(accounts[4])
    //     assert.equal(balance4.toString(), (10 * 10 ** 18).toString(), "Not correct balance")
    // })

    it("Approve 10 tokens for contract", async () => {
        votetoken = await VERC20.deployed()
        votingContract = await VotingContract.deployed()
        await votetoken.approve(votingContract.address, web3.utils.toBN(10 * 10 ** 18), {from: accounts[4]})
    })

    it("Vote for subject", async () => {
        votingContract = await VotingContract.deployed()

        await votingContract.vote(1, 7, web3.utils.toBN(10 * 10 ** 18), {from: accounts[4]})

        const userVote = await votingContract.getUserVote(1, accounts[4])

        console.log(userVote.toString())
    })

    it("Balance of contract after voting", async () => {
        votingContract = await VotingContract.deployed()
        votetoken = await VERC20.deployed()
        balanceAfterVoter = await votetoken.balanceOf(votingContract.address)
        console.log('Balance of contract after voting', balanceAfterVoter.toString())
    })

    it("Get user's subjects", async () => {
        votingContract = await VotingContract.deployed()
        const userSubjects = await votingContract.getUserSubjects(accounts[4])


        for (var i = 0; i < userSubjects.length; i++) {
            console.log((userSubjects[i]).toNumber())
        }
        // console.log(userSubjects)
    })

    it("Get user's subjects and votes", async () => {
        votingContract = await VotingContract.deployed()
        const userSubjectsAndVotes = await votingContract.SubjectPlusVoteList(accounts[4], 0)
        console.log(userSubjectsAndVotes)
    })

    it("Balance of minting token", async () => {
        erc20 = await VERC20.deployed()
        const balance = await erc20.balanceOf(accounts[0])
        console.log(balance.toString())
    })

    it("Check token address", async () => {
        erc20 = await VERC20.deployed()
        votingContract = await VotingContract.deployed()
        const erc20Address = await votingContract.voteTokenAddress()
        console.log('ERC token address:', erc20.address, erc20Address)
    })

})
