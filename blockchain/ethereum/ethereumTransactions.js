const Web3 = require('web3');
const { USDC_ADDRESS, ERC20_ABI } = require('./ethereumConfig');

const web3 = new Web3(process.env.ETHEREUM_PROVIDER);

async function sendERC20(senderPrivateKey, recipient, amount) {
	const account = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
	const contract = new web3.eth.Contract(ERC20_ABI, USDC_ADDRESS);

	const txData = contract.methods.transfer(
		recipient,
		web3.utils.toWei(amount, 'mwei')
	).encodeABI();

	const tx = {
		from: account.address,
		to: USDC_ADDRESS,
		data: txData,
		gas: 200000,
		gasPrice: await web3.eth.getGasPrice(),
		nonce: await web3.eth.getTransactionCount(account.address)
	};

	const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
	const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
	return receipt.transactionHash;
}

module.exports = { sendERC20 };