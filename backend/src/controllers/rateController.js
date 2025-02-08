const { getExchangeRate } = require('../services/rateService');

exports.getExchangeRate = async (req, res) => {
	const { fromCurrency, toCurrency } = req.query;
	try {
		const rate = await getExchangeRate(fromCurrency, toCurrency);
		res.json({ success: true, rate });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
};