const axios = require('axios');

async function pollTransactionStatus(txHash, chain) {
	const MAX_RETRIES = 5;
	const POLL_INTERVAL = 5000; // 5 seconds

	for (let i = 0; i < MAX_RETRIES; i++) {
		try {
			let response;
			if (chain === 'ethereum') {
				response = await axios.get(`https://api.etherscan.io/api?module=transaction&action=gettxreceiptstatus&txhash=${txHash}&apikey=${process.env.ETHERSCAN_API_KEY}`);
			} else if (chain === 'stellar') {
				response = await axios.get(`https://horizon-testnet.stellar.org/transactions/${txHash}`);
			}

			if (response.data.status === 'success') {
				return { success: true, txHash };
			}
		} catch (error) {
			console.error('Polling error:', error);
		}

		await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
	}

	throw new Error('Transaction polling timed out');
}

module.exports = { pollTransactionStatus };