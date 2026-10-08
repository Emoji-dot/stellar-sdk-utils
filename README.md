# Stellar SDK Utils

[![npm version](https://badge.fury.io/js/stellar-sdk-utils.svg)](https://www.npmjs.com/package/stellar-sdk-utils)
[![Build Status](https://travis-ci.org/stellar/stellar-sdk-utils.svg?branch=master)](https://travis-ci.org/stellar/stellar-sdk-utils)
[![Coverage Status](https://coveralls.io/repos/github/stellar/stellar-sdk-utils/badge.svg?branch=master)](https://coveralls.io/github/stellar/stellar-sdk-utils?branch=master)

Production-ready utilities for Stellar blockchain development. Provides transaction validation, account monitoring, and asset management tools for TypeScript/JavaScript applications.

## Features

- **Transaction Validation**: Comprehensive Stellar transaction verification
- **Account Management**: Balance tracking, trustline monitoring, sequence validation
- **Asset Operations**: Payment validation, path payment analysis, DEX operations
- **Network Monitoring**: Real-time Stellar network status and health checks
- **Error Handling**: Robust retry mechanisms and error classification
- **TypeScript Support**: Full type safety with comprehensive interfaces
- **Production Ready**: Battle-tested in production environments

## Installation

```bash
npm install stellar-sdk-utils
# or
yarn add stellar-sdk-utils
```

## Quick Start

```typescript
import { StellarValidator, AccountMonitor } from 'stellar-sdk-utils';

const validator = new StellarValidator({
  network: 'mainnet',
  horizonUrl: 'https://horizon.stellar.org'
});

// Validate a transaction
const result = await validator.validateTransaction('tx_hash_here');

// Monitor account changes
const monitor = new AccountMonitor('GABC...XYZ');
monitor.on('payment', (payment) => {
  console.log('Payment received:', payment.amount);
});
```

## API Reference

### StellarValidator

```typescript
class StellarValidator {
  constructor(config: NetworkConfig)
  
  async validateTransaction(hash: string): Promise<ValidationResult>
  async getTransaction(hash: string): Promise<StellarTransaction>
  async validateAccount(accountId: string): Promise<boolean>
  async getNetworkStatus(): Promise<NetworkStatus>
}
```

### AccountMonitor

```typescript
class AccountMonitor extends EventEmitter {
  constructor(accountId: string, config?: MonitorConfig)
  
  start(): void
  stop(): void
  getBalance(): Promise<Balance[]>
  getTrustlines(): Promise<Trustline[]>
}
```

### Types

```typescript
interface ValidationResult {
  valid: boolean;
  transaction?: StellarTransaction;
  errors: string[];
  timestamp: string;
}

interface StellarTransaction {
  id: string;
  hash: string;
  ledger: number;
  created_at: string;
  source_account: string;
  fee_charged: string;
  operations: Operation[];
}

interface NetworkConfig {
  network: 'testnet' | 'mainnet';
  horizonUrl: string;
  timeout?: number;
}
```

## Usage Examples

### Transaction Validation

```typescript
import { StellarValidator } from 'stellar-sdk-utils';

const validator = new StellarValidator({
  network: 'mainnet',
  horizonUrl: 'https://horizon.stellar.org'
});

try {
  const result = await validator.validateTransaction(
    'a1b2c3d4e5f6789...'
  );
  
  if (result.valid) {
    console.log('Transaction is valid:', result.transaction);
  } else {
    console.log('Validation errors:', result.errors);
  }
} catch (error) {
  console.error('Validation failed:', error);
}
```

### Account Monitoring

```typescript
import { AccountMonitor } from 'stellar-sdk-utils';

const monitor = new AccountMonitor(
  'GABC123DEF456GHI789JKL012MNO345PQR678STU901VWX234YZ567ABC890'
);

monitor.on('payment', (payment) => {
  console.log(`Received ${payment.amount} ${payment.asset_code}`);
});

monitor.on('trustline_created', (trustline) => {
  console.log(`New trustline: ${trustline.asset_code}`);
});

monitor.start();
```

### Asset Operations

```typescript
import { AssetValidator } from 'stellar-sdk-utils';

const assetValidator = new AssetValidator();

// Validate asset code format
const isValid = assetValidator.isValidAssetCode('USDC');

// Check if asset is authorized
const authResult = await assetValidator.checkAuthorization(
  'USDC',
  'GABC...XYZ'
);
```

## Development

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Setup

```bash
git clone https://github.com/stellar/stellar-sdk-utils.git
cd stellar-sdk-utils
npm install
```

### Environment Configuration

Create a `.env` file:

```bash
STELLAR_NETWORK=testnet
STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org
LOG_LEVEL=info
```

### Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run integration tests
npm run test:integration

# Run tests in watch mode
npm run test:watch
```

### Building

```bash
# Build for production
npm run build

# Build and watch for changes
npm run build:watch
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

### Code Standards

- Follow TypeScript strict mode
- Maintain test coverage above 90%
- Use conventional commit messages
- Include JSDoc comments for public APIs

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/stellar/stellar-sdk-utils/issues)
- **Discussions**: [GitHub Discussions](https://github.com/stellar/stellar-sdk-utils/discussions)
- **Documentation**: [API Docs](https://stellar-sdk-utils.readthedocs.io)

## Related Projects

- [Stellar SDK](https://github.com/StellarCN/js-stellar-sdk) - Official Stellar SDK for JavaScript
- [Stellar Laboratory](https://laboratory.stellar.org) - Interactive tool for Stellar development
- [Stellar Expert](https://stellar.expert) - Stellar network explorer