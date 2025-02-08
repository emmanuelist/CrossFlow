import React, { useState } from 'react';
import axios from 'axios';

const SendPayment = () => {
	const [senderSecret, setSenderSecret] = useState('');
	const [recipientAddress, setRecipientAddress] = useState('');
	const [amount, setAmount] = useState('');
	const [transactionHash, setTransactionHash] = useState('');

	const handleSendPayment = async () => {
		try {
			const response = await axios.post('http://localhost:5000/api/stellar/send-payment', {
				senderSecret,
				recipientAddress,
				amount,
			});
			setTransactionHash(response.data.transactionHash);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h2>Send Payment</h2>
			<input
				type="text"
				placeholder="Sender Secret Key"
				value={senderSecret}
				onChange={(e) => setSenderSecret(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Recipient Address"
				value={recipientAddress}
				onChange={(e) => setRecipientAddress(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Amount"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
			/>
			<button onClick={handleSendPayment}>Send</button>
			{transactionHash && <p>Transaction Hash: {transactionHash}</p>}
		</div>
	);
};

export default SendPayment;