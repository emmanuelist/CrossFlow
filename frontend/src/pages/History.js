import React from 'react';
import TransactionHistory from '../components/TransactionHistory';

const History = ({ walletAddress }) => {
	return (
		<div className="history-page">
			<h2>Transaction History</h2>
			<TransactionHistory walletAddress={walletAddress} />
		</div>
	);
};

export default History;