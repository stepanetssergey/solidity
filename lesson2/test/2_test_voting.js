var VotingContract = artifacts.require('./Voting.sol')

contract("Voting contract", (accounts) => {

    it("Check name and symbol for the contract", async () => {
        votingContract = await VotingContract.deployed()
        name = await votingContract.name()
        symbol = await votingContract.symbol()

        console.log(name)
        console.log(symbol)
    })

    it("Signup user", async () => {
        votingContract = await VotingContract.deployed()
        await votingContract.signup(25, "guru", {from: accounts[4]})
        const user = await votingContract.Users(accounts[4])

        console.log((user.age).toNumber())
        console.log(user.nickname)

        console.log((user.id).toNumber())
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

    it("Vote for subject", async () => {
        votingContract = await VotingContract.deployed()
        await votingContract.vote(1, 7, {from: accounts[4]})

        const userVote = await votingContract.getUserVote(1, accounts[4])

        console.log(userVote.toNumber())
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

})
