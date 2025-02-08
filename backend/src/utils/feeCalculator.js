exports.calculateFee = (chain, amount) => {
	const fees = {
		stellar: 0.01,   // XLM fee per tx
		ethereum: 0.001  // ETH fee approx
	};
	return fees[chain];
};