const Web3 = require('web3');

// Initialize Web3 with Infura
const web3 = new Web3('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// USDC Contract Details
const USDC_ADDRESS = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';
const ERC20_ABI = [
    {
        constant: false,
        inputs: [
            { name: '_to', type: 'address' },
            { name: '_value', type: 'uint256' },
        ],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        type: 'function',
    },
];

async function sendPayment(senderAddress, recipientAddress, amount) {
    const contract = new web3.eth.Contract(ERC20_ABI, USDC_ADDRESS);

    const txData = contract.methods
        .transfer(recipientAddress, web3.utils.toWei(amount, 'mwei'))
        .encodeABI();

    const tx = {
        from: senderAddress,
        to: USDC_ADDRESS,
        data: txData,
        gas: 200000,
        gasPrice: await web3.eth.getGasPrice(),
        nonce: await web3.eth.getTransactionCount(senderAddress),
    };

    // The frontend will sign the transaction using MetaMask
    return tx;
}

module.exports = { sendPayment };