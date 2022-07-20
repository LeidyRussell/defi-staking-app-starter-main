const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD');
const DecentralBank = artifacts.require('DecentralBank');
const Nik = artifacts.require('Nik');

module.exports = async function(deployer, network, accounts) {
    await deployer.deploy(Nik)

    // Deploy mock tether contract
    await deployer.deploy(Tether)
    const tether = await Tether.deployed()

    // Deploy RWD contract
    await deployer.deploy(RWD)
    const rwd = await RWD.deployed()

    // Deploy central bank contract
    await deployer.deploy(DecentralBank, rwd.address, tether.address)
    const decentralBank = await DecentralBank.deployed()

    // Transfer all RWD tokens to Decentral Bank (1 million)
    await rwd.transfer(decentralBank.address, '1000000000000000000000000')

    // Distribute 100 Mock Tether tokens to investor
    await tether.transfer(accounts[1], '100000000000000000000')
};