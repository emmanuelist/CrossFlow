import { signStellarTransaction } from '../utils/wallet';

const handleSendPayment = async () => {
	const txXdr = await axios.post('/api/stellar/build-tx', {
		recipientAddress,
		amount
	});

	const signedTx = await signStellarTransaction(txXdr); // Using Freighter wallet
	const result = await axios.post('/api/stellar/submit-tx', { signedTx });
	setTransactionHash(result.hash);
};