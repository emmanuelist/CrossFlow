const { sendPayment } = require('../src/services/stellarService');

describe('Stellar Service', () => {
	it('should send a payment', async () => {
		const senderSecret = 'SENDER_SECRET_KEY';
		const recipientAddress = 'RECIPIENT_ADDRESS';
		const amount = 10;
		const asset = 'USDC';

		const transactionHash = await sendPayment(senderSecret, recipientAddress, amount, asset);
		expect(transactionHash).toBeDefined();
	});
});