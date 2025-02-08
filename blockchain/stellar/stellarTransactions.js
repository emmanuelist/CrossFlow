const StellarSdk = require('stellar-sdk');
const { USDC_ISSUER, NETWORK } = require('./stellarConfig');

const server = new StellarSdk.Server(process.env.STELLAR_HORIZON);

async function sendUSDC(senderSecret, recipient, amount) {
	const sourceKeypair = StellarSdk.Keypair.fromSecret(senderSecret);
	const usdcAsset = new StellarSdk.Asset('USDC', USDC_ISSUER);

	const account = await server.loadAccount(sourceKeypair.publicKey());

	const txBuilder = new StellarSdk.TransactionBuilder(account, {
		fee: StellarSdk.BASE_FEE,
		networkPassphrase: NETWORK
	}).addOperation(
		StellarSdk.Operation.payment({
			destination: recipient,
			asset: usdcAsset,
			amount: amount.toString()
		})
	);

	const tx = txBuilder.setTimeout(30).build();
	tx.sign(sourceKeypair);
	return server.submitTransaction(tx);
}

module.exports = { sendUSDC };