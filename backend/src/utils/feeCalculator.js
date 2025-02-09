const Web3 = require('web3');
const StellarSdk = require('stellar-sdk');

async function calculateFee(chain) {
	if (chain === 'ethereum') {
		const web3 = new Web3('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID');
		const gasPrice = await web3.eth.getGasPrice();
		return web3.utils.fromWei(gasPrice, 'gwei');
	} else if (chain === 'stellar') {
		const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
		const feeStats = await server.feeStats();
		return feeStats.fee_charged.mode;
	}
}

module.exports = { calculateFee };