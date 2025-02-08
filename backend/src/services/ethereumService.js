const Web3 = require('web3');
const web3 = new Web3('https://sepolia.infura.io/v3/YOUR_INFURA_KEY');

// Sepolia USDC Contract (Testnet)
const USDC_ADDRESS = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238';
const ERC20_ABI = [{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"type":"function"}];

async function sendPayment(senderPrivateKey, recipientAddress, amount) {
  const sender = web3.eth.accounts.privateKeyToAccount(senderPrivateKey);
  const contract = new web3.eth.Contract(ERC20_ABI, USDC_ADDRESS);
  
  const txData = contract.methods.transfer(recipientAddress, web3.utils.toWei(amount, 'mwei')).encodeABI(); // USDC has 6 decimals
  
  const tx = {
    from: sender.address,
    to: USDC_ADDRESS,
    data: txData,
    gas: 200000,
    gasPrice: await web3.eth.getGasPrice(),
    nonce: await web3.eth.getTransactionCount(sender.address),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
  return web3.eth.sendSignedTransaction(signedTx.rawTransaction).then(res => res.transactionHash);
}