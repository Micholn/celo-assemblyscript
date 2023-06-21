const ContractKit = require('@celo/contractkit');
const Web3 = require('web3');

// Connect to the Celo network
let web3 = new Web3('https://alfajores-forno.celo-testnet.org');
let kit = ContractKit.newKitFromWeb3(web3);

let getAccount = require('./getAccount').getAccount;

async function awaitWrapper(){
    let account = await getAccount();

    // Add your account to contractKit to sign transactions
    kit.connection.addAccount(account.privateKey);
}

awaitWrapper();