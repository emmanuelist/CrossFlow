const { sendPayment } = require('../services/stellarService');

exports.sendPayment = async (req, res) => {
  const { senderSecret, recipientAddress, amount, asset } = req.body;
  try {
    const transactionHash = await sendPayment(senderSecret, recipientAddress, amount, asset);
    res.json({ success: true, transactionHash });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};