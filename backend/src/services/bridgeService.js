const StellarSdk = require('stellar-sdk');
const Web3 = require('web3');
const crypto = require('crypto');

// Generate secret hash for HTLC
function generateHashLock() {
	const secret = crypto.randomBytes(32);
	const hash = crypto.createHash('sha256').update(secret).digest('hex');
	return { secret: secret.toString('hex'), hash };
}

// Stellar -> Ethereum Bridge
async function bridgeToEthereum(senderSecret, amount, recipientEthAddress) {
	const { secret, hash } = generateHashLock();

	// 1. Lock USDC on Stellar
	const stellarTxHash = await stellar.lockFunds(senderSecret, hash, amount);

	// 2. Wait for Ethereum claim
	const ethTxHash = await ethereum.claimFunds(recipientEthAddress, secret);

	return { stellarTxHash, ethTxHash };
}