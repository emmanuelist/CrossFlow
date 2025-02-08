const axios = require('axios');

// African Fiat Currencies (NGN, KES, ZAR)
async function getExchangeRate(fromCurrency, toCurrency = 'USDC') {
  const response = await axios.get('https://api.flutterwave.com/v3/forex', {
    headers: { Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}` },
    params: { from: fromCurrency, to: 'USD', amount: 1 } // Convert to USD first
  });

  const usdRate = response.data.data.rate;
  const usdcRate = 1 / usdRate; // Assuming 1 USDC = 1 USD
  return usdcRate.toFixed(4);
}