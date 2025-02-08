const express = require('express');
const { sendPayment } = require('../services/ethereumService');
const router = express.Router();

// Send payment route
router.post('/send-payment', async (req, res) => {
	const { senderPrivateKey, recipientAddress, amount } = req.body;
	try {
		const transactionHash = await sendPayment(senderPrivateKey, recipientAddress, amount);
		res.json({ success: true, transactionHash });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
});

module.exports = router;