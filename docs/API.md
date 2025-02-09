# API Documentation

## Authentication

All API endpoints require authentication using JWT tokens.

```typescript
headers: {
  'Authorization': 'Bearer <token>'
}
```

## Bridge API

### Initiate CrossFlow Transfer

```typescript
POST /api/bridge/swap

Request:
{
  sourceChain: "ethereum" | "stellar",
  targetChain: "ethereum" | "stellar",
  amount: string,
  senderAddress: string,
  recipientAddress: string
}

Response:
{
  success: boolean,
  txHash: string,
  status: "pending" | "completed" | "failed"
}
```

### Get Transaction Status

```typescript
GET /api/bridge/status/:txHash

Response:
{
  status: "pending" | "completed" | "failed",
  sourceChain: string,
  targetChain: string,
  amount: string,
  timestamp: number
}
```

## Rate API

### Get Exchange Rate

```typescript
GET /api/rates/exchange-rate

Query Parameters:
- fromCurrency: string (e.g., "NGN", "KES")
- toCurrency: string (default: "USDC")

Response:
{
  rate: string,
  timestamp: number,
  source: string
}
```

## Payment API

### Create Deposit

```typescript
POST /api/payments/deposit

Request:
{
  method: "bank" | "card" | "mobile" | "ussd",
  amount: string,
  currency: string,
  details: {
    // Method-specific details
  }
}

Response:
{
  success: boolean,
  paymentId: string,
  paymentUrl?: string // For redirect-based methods
}
```

### Create Withdrawal

```typescript
POST /api/payments/withdraw

Request:
{
  method: "bank" | "mobile" | "pickup",
  amount: string,
  currency: string,
  details: {
    // Method-specific details
  }
}

Response:
{
  success: boolean,
  withdrawalId: string,
  status: "pending" | "processing" | "completed"
}
```

## Error Handling

All endpoints return errors in the following format:

```typescript
{
  success: false,
  error: {
    code: string,
    message: string,
    details?: any
  }
}
```

Common error codes:

- `INVALID_INPUT`: Request validation failed
- `INSUFFICIENT_FUNDS`: Not enough balance
- `RATE_LIMIT`: Too many requests
- `NETWORK_ERROR`: Blockchain network issues
