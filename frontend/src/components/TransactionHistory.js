import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../utils/api';

const TransactionHistory = ({ walletAddress }) => {
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		const loadHistory = async () => {
			const data = await fetchTransactions(walletAddress);
			setTransactions(data);
		};
		if (walletAddress) loadHistory();
	}, [walletAddress]);

	return (
		<div className="transaction-history">
			<h3>Recent Transactions</h3>
			{transactions.map(tx => (
				<div key={tx.hash} className="transaction-item">
					<p>Amount: {tx.amount} {tx.currency}</p>
					<p>To: {tx.recipient}</p>
					<p>Status: {tx.status}</p>
				</div>
			))}
		</div>
	);
};

export default TransactionHistory;