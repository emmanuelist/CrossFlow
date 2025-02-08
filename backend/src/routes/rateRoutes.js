const express = require('express');
const { getExchangeRate } = require('../services/rateService');
const router = express.Router();

// Get exchange rate route
router.get('/exchange-rate', async (req, res) => {
	const { fromCurrency, toCurrency } = req.query;
	try {
		const rate = await getExchangeRate(fromCurrency, toCurrency);
		res.json({ success: true, rate });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
});

module.exports = router;