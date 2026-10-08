# Implement AssetValidator class for asset operations

**Labels:** enhancement

## Evidence
File: `src/index.ts` line 3 exports `AssetValidator` but class doesn't exist
File: `src/validators/AssetValidator.ts` is missing
README.md shows AssetValidator usage examples

## Problem
AssetValidator class is referenced in exports and documentation but not implemented. This utility should validate Stellar assets, check authorization flags, verify issuer accounts, and validate asset operations like payments and trustlines.

## Required change
Create `src/validators/AssetValidator.ts` with methods for asset code and issuer validation, authorization flag checking, asset existence verification on the network, trustline validation for accounts, and path payment asset validation

## Acceptance criteria
- Implements isValidAssetCode(code: string): boolean
- Implements validateAsset(asset: Asset): Promise<ValidationResult>
- Implements checkAuthorization(asset: Asset, account: string): Promise<AuthResult>
- Includes validateTrustline(account: string, asset: Asset): Promise<boolean>
- Has proper error handling and retry logic
- Uses existing validation utilities where appropriate
- Comprehensive TypeScript types and JSDoc comments

## Validation
- Run test suite: `npm test`
- Test with various asset types (native, alphanumeric4, alphanumeric12)
- Verify authorization checking works correctly
- Test with mainnet and testnet assets