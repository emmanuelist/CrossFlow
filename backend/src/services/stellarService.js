const StellarSdk = require('@stellar/stellar-sdk');

// Initialize the Stellar server
const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');

// Stellar USDC Issuer (Testnet)
const USDC_ISSUER = 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN';

async function sendPayment(senderSecret, recipientAddress, amount) {
  const senderKeypair = StellarSdk.Keypair.fromSecret(senderSecret);
  const usdcAsset = new StellarSdk.Asset('USDC', USDC_ISSUER);

  const account = await server.loadAccount(senderKeypair.publicKey());

  const txBuilder = new StellarSdk.TransactionBuilder(account, {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.TESTNET,
  }).addOperation(
    StellarSdk.Operation.payment({
      destination: recipientAddress,
      asset: usdcAsset,
      amount: amount.toString(),
    })
  );

  const tx = txBuilder.setTimeout(30).build();
  tx.sign(senderKeypair);
  return server.submitTransaction(tx).then((res) => res.hash);
}

module.exports = { sendPayment };