# Add comprehensive signature validation for transactions

**Labels:** enhancement, security

## Evidence
File: `src/validators/StellarValidator.ts` lines 95-110
Method `validateSignatures()` is placeholder with TODO comment
Current implementation only checks if signatures exist, not validity

## Problem
Transaction signature validation is incomplete. The current implementation only verifies that signatures exist but doesn't validate them against the transaction envelope or account signers, creating a security gap where invalid transactions could pass validation.

## Required change
Implement complete signature validation in `validateSignatures()` method that validates signatures against transaction envelope XDR, checks signature weights against account signer thresholds, verifies all required signatures are present, and handles multi-signature accounts correctly

## Acceptance criteria
- Validates signature cryptography using Stellar SDK
- Checks signer weights against account thresholds
- Handles low, medium, and high threshold operations
- Validates master key and additional signers
- Returns specific error codes for different signature failures
- Includes comprehensive test coverage for edge cases
- Performance impact is minimal (< 100ms additional validation time)

## Validation
- Run signature validation tests: `npm run test:integration`
- Test with multi-signature accounts
- Verify invalid signatures are rejected
- Test performance with complex transactions