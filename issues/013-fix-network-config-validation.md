# Fix network configuration validation in StellarValidator

**Labels:** bug, good first issue

## Evidence
File: `src/validators/StellarValidator.ts` - Constructor doesn't validate network configuration

## Problem
Invalid network configurations can cause runtime errors. Configuration should be validated at construction time.

## Required change
Add configuration validation in StellarValidator constructor to ensure horizonUrl is valid and network parameter is correct

## Acceptance criteria
- Validates horizonUrl format and accessibility
- Ensures network is 'testnet' or 'mainnet'
- Throws descriptive errors for invalid config
- Validates optional parameters

## Validation
- Invalid configurations throw appropriate errors
- Valid configurations work correctly
- Error messages are descriptive