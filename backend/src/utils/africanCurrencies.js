module.exports = {
	SUPPORTED_CURRENCIES: ['NGN', 'KES', 'ZAR', 'GHS', 'UGX'],

	validateCurrency: (currency) => {
		return this.SUPPORTED_CURRENCIES.includes(currency.toUpperCase());
	},

	formatCurrency: (amount, currency) => {
		const formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currency,
			minimumFractionDigits: 2
		});
		return formatter.format(amount);
	}
};