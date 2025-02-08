const StellarSdk = require('stellar-sdk');
const Web3 = require('web3');

// Stellar helper functions
exports.generateStellarKeypair = () => {
	const keypair = StellarSdk.Keypair.random();
	return {
		publicKey: keypair.publicKey(),
		secretKey: keypair.secret(),
	};
};

// Ethereum helper functions
exports.generateEthereumWallet = () => {
	const web3 = new Web3();
	const account = web3.eth.accounts.create();
	return {
		address: account.address,
		privateKey: account.privateKey,
	};
};