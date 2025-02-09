const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const stellarRoutes = require('./routes/stellarRoutes');
const ethereumRoutes = require('./routes/ethereumRoutes');
const rateRoutes = require('./routes/rateRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/stellar', stellarRoutes);
app.use('/api/ethereum', ethereumRoutes);
app.use('/api/rates', rateRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add this route to src/index.js
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Cross-Chain Payment API' });
});