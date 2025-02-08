const { sendPayment } = require('../services/ethereumService');

exports.sendPayment = async (req, res) => {
	const { senderPrivateKey, recipientAddress, amount } = req.body;
	try {
		const transactionHash = await sendPayment(senderPrivateKey, recipientAddress, amount);
		res.json({ success: true, transactionHash });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
};