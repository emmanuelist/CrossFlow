const express = require('express');
const { sendPayment } = require('../services/stellarService');
const router = express.Router();

// Send payment route
router.post('/send-payment', async (req, res) => {
	const { senderSecret, recipientAddress, amount, asset } = req.body;
	try {
		const transactionHash = await sendPayment(senderSecret, recipientAddress, amount, asset);
		res.json({ success: true, transactionHash });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
});

module.exports = router;