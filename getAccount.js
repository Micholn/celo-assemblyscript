const fs = require('fs');
const path = require('path');

function getAccount() {
    // Read the generated account info from the local file system.
    const filePath = path.join(__dirname, 'account.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

module.exports = {
    getAccount
};

//Please replace the content of account.json with your actual account details. Please be very careful with your account's private key, it should be kept secret.
