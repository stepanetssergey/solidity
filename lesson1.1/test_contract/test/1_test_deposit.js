var TestContract = artifacts.require('./TestContract.sol')

contract("Test contract", (accounts) => {

    it("Check deposit of contract", async () => {
        testcontract = await TestContract.deployed()
        deposit = await testcontract.TotalDeposit()
        console.log(deposit.toNumber())
        console.log(accounts)
    })


    it("Registration", async() => {
        testcontract = await TestContract.deployed()
        await testcontract.Registration()
    })

    it("Set Deposit" , async() => {
        testcontract = await TestContract.deployed()
        await testcontract.SetDeposit(30)
    })

    it("Check deposit of contract", async () => {
        testcontract = await TestContract.deployed()
        deposit = await testcontract.TotalDeposit()
        assert.equal(deposit.toNumber(), 30, "not correct deposit")
    })

    // it("Create registration", async() => {
    //     testcontract = await TestContract.deployed()
    //     result = testcontract.Registration() //accounts[0]
    // })


})
