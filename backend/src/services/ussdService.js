const AfricasTalking = require('africastalking');
const credentials = {
	apiKey: process.env.AT_API_KEY,
	username: 'sandbox'
};
const africastalking = AfricasTalking(credentials);

app.post('/ussd', (req, res) => {
	const { phoneNumber, amount } = req.body;
	africastalking.SMS.send({
		to: phoneNumber,
		message: `Confirm payment of ${amount} USDC: Reply YES`
	});
});