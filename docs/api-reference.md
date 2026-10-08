# API Reference 📚

> **⚠️ WAVE CONTRIBUTORS NEEDED**: This documentation is incomplete and needs your help! Look for `TODO` sections and `[HELP NEEDED]` tags.

## Overview

The Blockchain Bridge Validator provides a REST API for validating cross-chain transactions between Stellar and Optimism networks.

Base URL: `http://localhost:3000/api/v1`

## Authentication

```javascript
// TODO: Add authentication documentation
// [HELP NEEDED] - Document API key setup and usage
```

## Endpoints

### Transaction Validation

#### `POST /validate/stellar`

Validates a Stellar network transaction.

**Request Body:**
```json
{
  "transactionHash": "string",
  "network": "testnet" | "mainnet"
}
```

**Response:**
```json
{
  "valid": boolean,
  "transaction": {
    // TODO: Document transaction object structure
    // [HELP NEEDED] - Add complete transaction response schema
  },
  "errors": string[]
}
```

**Example:**
```bash
curl -X POST http://localhost:3000/api/v1/validate/stellar \
  -H "Content-Type: application/json" \
  -d '{
    "transactionHash": "abc123...",
    "network": "testnet"
  }'
```

#### `POST /validate/optimism`

Validates an Optimism L2 transaction.

**Request Body:**
```json
{
  "transactionHash": "string",
  "chainId": number
}
```

**Response:**
```json
{
  "valid": boolean,
  "transaction": {
    // TODO: Add Optimism transaction schema
    // [HELP NEEDED] - Document L2 specific fields
  }
}
```

### Bridge Operations

#### `POST /bridge/validate`

Validates a cross-chain bridge operation.

**Request Body:**
```json
{
  "sourceChain": "stellar" | "optimism",
  "targetChain": "stellar" | "optimism",
  "sourceHash": "string",
  "targetHash": "string"
}
```

**Response:**
```json
{
  "bridgeValid": boolean,
  "sourceTransaction": {
    // TODO: Document source transaction details
  },
  "targetTransaction": {
    // TODO: Document target transaction details  
  },
  "bridgeProof": {
    // [HELP NEEDED] - Add merkle proof documentation
  }
}
```

#### `GET /bridge/status/:bridgeId`

Get status of a bridge operation.

**Parameters:**
- `bridgeId`: Unique identifier for the bridge operation

**Response:**
```json
{
  "status": "pending" | "completed" | "failed",
  "progress": {
    // TODO: Add progress tracking schema
    // [HELP NEEDED] - Document all possible status states
  }
}
```

### Network Status

#### `GET /network/stellar/status`

Get Stellar network status and health.

**Response:**
```json
{
  "network": "testnet" | "mainnet",
  "latestLedger": number,
  "averageCloseTime": number,
  "healthy": boolean
  // TODO: Add more network metrics
  // [HELP NEEDED] - Document additional status fields
}
```

#### `GET /network/optimism/status`

Get Optimism network status and health.

**Response:**
```json
{
  "chainId": number,
  "latestBlock": number,
  "gasPrice": string,
  "l1BatchIndex": number
  // TODO: Add L2-specific metrics
  // [HELP NEEDED] - Document rollup-specific fields
}
```

## Error Handling

All endpoints return errors in the following format:

```json
{
  "error": {
    "code": string,
    "message": string,
    "details": object
  }
}
```

### Common Error Codes

| Code | Description | HTTP Status |
|------|-------------|-------------|
| `INVALID_HASH` | Invalid transaction hash format | 400 |
| `NETWORK_ERROR` | Network connection failed | 503 |
| `TRANSACTION_NOT_FOUND` | Transaction not found on network | 404 |
| `VALIDATION_FAILED` | Transaction validation failed | 422 |

// TODO: Add more error codes and descriptions
// [HELP NEEDED] - Document all possible error scenarios

## Rate Limiting

- **Default**: 100 requests per minute per IP
- **Authenticated**: 1000 requests per minute per API key

// TODO: Add rate limiting headers documentation
// [HELP NEEDED] - Document rate limit response headers

## SDKs and Libraries

### JavaScript/TypeScript

```typescript
// TODO: Add SDK usage examples
// [HELP NEEDED] - Create comprehensive SDK documentation

import { BridgeValidator } from 'blockchain-bridge-validator';

const validator = new BridgeValidator({
  // Configuration options
});
```

### Python

```python
# TODO: Add Python SDK documentation
# [HELP NEEDED] - Create Python client examples
```

## Webhooks

// TODO: Add webhook documentation
// [HELP NEEDED] - Document webhook setup and payload formats

## Testing

Use our test endpoints for development:

- Stellar Testnet: `https://horizon-testnet.stellar.org`
- Optimism Goerli: `https://goerli.optimism.io`

// TODO: Add testing examples and mock data
// [HELP NEEDED] - Create comprehensive testing guide

---

**Contributing to this documentation?** 
- Look for `TODO` comments for missing sections
- Check `[HELP NEEDED]` tags for specific areas needing attention
- All contributions welcome through Wave Program cycles!