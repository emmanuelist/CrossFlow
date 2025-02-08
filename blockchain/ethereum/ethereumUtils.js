const Web3 = require('web3');

function createEthWallet() {
	const web3 = new Web3();
	const account = web3.eth.accounts.create();
	return {
		address: account.address,
		privateKey: account.privateKey
	};
}

function validateEthAddress(address) {
	return Web3.utils.isAddress(address);
}

module.exports = {
	createEthWallet,
	validateEthAddress
};