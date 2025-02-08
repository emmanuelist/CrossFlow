const axios = require('axios');

// Fetch exchange rate from CoinGecko API
async function getExchangeRate(fromCurrency, toCurrency) {
	const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`);
	return response.data[fromCurrency][toCurrency];
}

module.exports = { getExchangeRate };