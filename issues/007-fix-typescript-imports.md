# Fix missing TypeScript import in validation utils

**Labels:** bug, good first issue

## Evidence
File: `src/utils/validation.ts` - Missing import for Asset type from Stellar SDK

## Problem
The validation utility functions reference Asset type but don't import it, causing TypeScript compilation errors.

## Required change
Add proper import statement for Asset type from @stellar/stellar-sdk

## Acceptance criteria
- TypeScript compilation passes without errors
- All validation functions work correctly
- Import follows project conventions

## Validation
- Run `npm run build` successfully
- No TypeScript errors in validation.ts