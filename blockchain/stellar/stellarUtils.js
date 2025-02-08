const StellarSdk = require('stellar-sdk');

exports.createAccount = async (fundingKey) => {
	const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
	const keypair = StellarSdk.Keypair.fromSecret(fundingKey);

	const account = await server.loadAccount(keypair.publicKey());
	return account;
};