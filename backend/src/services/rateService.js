const axios = require('axios');

async function getExchangeRate(fromCurrency, toCurrency = 'USDC') {
    try {
        // Fetch fiat to USD rate from Flutterwave
        const fiatToUsdResponse = await axios.get('https://api.flutterwave.com/v3/forex', {
            headers: { Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}` },
            params: { from: fromCurrency, to: 'USD', amount: 1 },
        });

        const usdRate = fiatToUsdResponse.data.data.rate;

        // Fetch USDC to USD rate from CoinGecko
        const usdcToUsdResponse = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: { ids: 'usd-coin', vs_currencies: 'usd' },
        });

        const usdcRate = usdcToUsdResponse.data['usd-coin'].usd;

        // Calculate final rate
        const finalRate = usdRate * usdcRate;
        return finalRate.toFixed(4);
    } catch (error) {
        console.error('Exchange rate error:', error);
        throw new Error('Failed to fetch exchange rate');
    }
}

module.exports = { getExchangeRate };