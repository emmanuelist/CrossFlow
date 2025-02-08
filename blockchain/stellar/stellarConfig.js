const StellarSdk = require('stellar-sdk');

module.exports = {
	network: StellarSdk.Networks.TESTNET,
	server: new StellarSdk.Server('https://horizon-testnet.stellar.org'),
};