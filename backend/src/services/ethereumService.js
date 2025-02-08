const Web3 = require('web3');
const web3 = new Web3('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Send payment function
async function sendPayment(senderPrivateKey, recipientAddress, amount) {
	const senderAccount = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
	const nonce = await web3.eth.getTransactionCount(senderAccount.address, 'latest');
	const gasPrice = await web3.eth.getGasPrice();
	const gasLimit = 21000;

	const transaction = {
		to: recipientAddress,
		value: web3.utils.toHex(web3.utils.toWei(amount.toString(), 'ether')),
		gasPrice: web3.utils.toHex(gasPrice),
		gasLimit: web3.utils.toHex(gasLimit),
		nonce: web3.utils.toHex(nonce),
	};

	const signedTx = await web3.eth.accounts.signTransaction(transaction, senderPrivateKey);
	const result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
	return result.transactionHash;
}

module.exports = { sendPayment };