const StellarSdk = require('stellar-sdk');
const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

// Send payment function
async function sendPayment(senderSecret, recipientAddress, amount, assetCode = 'USDC') {
	const senderKeypair = StellarSdk.Keypair.fromSecret(senderSecret);
	const senderPublicKey = senderKeypair.publicKey();

	// Load sender account
	const senderAccount = await server.loadAccount(senderPublicKey);

	// Create transaction
	const transaction = new StellarSdk.TransactionBuilder(senderAccount, {
		fee: StellarSdk.BASE_FEE,
		networkPassphrase: StellarSdk.Networks.TESTNET,
	})
		.addOperation(
			StellarSdk.Operation.payment({
				destination: recipientAddress,
				asset: StellarSdk.Asset.native(),
				amount: amount.toString(),
			})
		)
		.setTimeout(30)
		.build();

	// Sign and submit transaction
	transaction.sign(senderKeypair);
	const result = await server.submitTransaction(transaction);
	return result.hash;
}

module.exports = { sendPayment };