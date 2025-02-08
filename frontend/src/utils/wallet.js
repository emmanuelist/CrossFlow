export const connectWallet = async () => {
	if (window.ethereum) {
		const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
		return accounts[0];
	}
	throw new Error('Ethereum wallet not detected');
};

export const signTransaction = async (txData) => {
	if (window.freighter) {
		return await window.freighter.signTransaction(txData);
	}
	throw new Error('Stellar wallet not detected');
};