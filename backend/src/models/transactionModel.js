const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
	sender: { type: String, required: true },
	recipient: { type: String, required: true },
	amount: { type: Number, required: true },
	asset: { type: String, required: true },
	transactionHash: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);