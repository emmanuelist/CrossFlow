import React, { useEffect, useState } from 'react';
import { fetchBalance } from '../utils/api';

const WalletBalance = ({ walletAddress }) => {
	const [balance, setBalance] = useState(0);

	useEffect(() => {
		const loadBalance = async () => {
			const bal = await fetchBalance(walletAddress);
			setBalance(bal);
		};
		if (walletAddress) loadBalance();
	}, [walletAddress]);

	return (
		<div className="wallet-balance">
			<h3>Your Balance</h3>
			<p>{balance.toFixed(2)} USDC</p>
		</div>
	);
};

export default WalletBalance;