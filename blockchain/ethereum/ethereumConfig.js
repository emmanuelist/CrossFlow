// blockchain/ethereum/ethereumConfig.js

// Ethereum Network Configuration
module.exports = {
	NETWORK: 'sepolia', // Use 'mainnet' for production
	PROVIDER_URL: 'https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Sepolia Testnet

	// USDC Contract Details (Sepolia Testnet Example)
	USDC_CONTRACT_ADDRESS: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
	USDC_DECIMALS: 6, // USDC uses 6 decimals

	// ERC-20 ABI (Minimal ABI for USDC transfers)
	ERC20_ABI: [
		{
			"constant": false,
			"inputs": [
				{ "name": "_to", "type": "address" },
				{ "name": "_value", "type": "uint256" }
			],
			"name": "transfer",
			"outputs": [{ "name": "", "type": "bool" }],
			"type": "function"
		}
	],

	// Transaction Defaults
	GAS_LIMIT: 200000, // Standard gas limit for ERC-20 transfers
	GAS_PRICE_MULTIPLIER: 1.2 // Multiplier for current gas price
};