# Cross-Chain USDC Bridge

A decentralized bridge for transferring USDC between Ethereum and Stellar networks, with integrated fiat on/off ramps for African currencies.

![Bridge Architecture](https://res.cloudinary.com/djp3vatc1/image/upload/v1/bridge-architecture.png)

## Features

- 🌉 Cross-chain USDC transfers between Ethereum and Stellar
- 💱 Fiat on/off ramps supporting multiple African currencies
- 📱 Mobile money and USSD integration
- 🔒 Secure wallet management
- 📊 Real-time transaction monitoring
- 💳 Multiple payment methods

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Setup

Create a `.env` file with the following variables:

```env
# Ethereum
ETHEREUM_PROVIDER=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
USDC_CONTRACT_ADDRESS=0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238

# Stellar
STELLAR_NETWORK=TESTNET
STELLAR_HORIZON=https://horizon-testnet.stellar.org
USDC_ISSUER=GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN

# APIs
FLUTTERWAVE_SECRET_KEY=YOUR_FLUTTERWAVE_KEY
AT_API_KEY=YOUR_AFRICASTALKING_KEY
```

## Architecture

### Backend Services

- **Bridge Service**: Manages cross-chain transfers using Connext protocol
- **Rate Service**: Real-time exchange rates for African currencies
- **Blockchain Services**: Ethereum and Stellar transaction handling
- **USSD Service**: Mobile money integration via Africa's Talking

### Frontend Components

- **Wallet Dashboard**: Balance management and network selection
- **Bridge Interface**: Cross-chain transfer initiation
- **Transaction Monitor**: Real-time status tracking
- **Payment Forms**: Fiat deposit/withdrawal interfaces

## API Documentation

### Bridge Endpoints

```typescript
POST /api/bridge/swap
{
  sourceChain: "ethereum" | "stellar",
  targetChain: "ethereum" | "stellar",
  amount: string,
  senderAddress: string
}
```

### Rate Endpoints

```typescript
GET /api/rates/exchange-rate?fromCurrency=NGN&toCurrency=USDC
```

### Payment Endpoints

```typescript
POST /api/payments/deposit
{
  method: "bank" | "card" | "mobile" | "ussd",
  amount: string,
  currency: string
}

POST /api/payments/withdraw
{
  method: "bank" | "mobile" | "pickup",
  amount: string,
  details: string
}
```

## Security

- Row-level security (RLS) enabled for all database tables
- Secure wallet connection handling
- Real-time transaction monitoring
- Rate limiting on API endpoints
- Input validation and sanitization

## Testing

```bash
# Run all tests
npm test

# Run specific test suite
npm test ethereum
npm test stellar
npm test rates
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details