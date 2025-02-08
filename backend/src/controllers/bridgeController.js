const { initiateCrossChainSwap } = require('../services/bridgeService');

exports.initiateSwap = async (req, res) => {
  try {
    const { sourceChain, targetChain, amount, senderAddress } = req.body;
    const result = await initiateCrossChainSwap(sourceChain, targetChain, amount, senderAddress);
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};