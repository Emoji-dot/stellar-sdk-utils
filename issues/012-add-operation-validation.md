# Add comprehensive operation validation for transactions

**Labels:** enhancement

## Evidence
Transaction validation doesn't validate individual operations within transactions

## Problem
Each operation type has specific validation rules. Invalid operations should be caught before submission.

## Required change
Implement operation-specific validation for payment, create_account, path_payment, and other operation types with their specific requirements

## Acceptance criteria
- Validates each operation type individually
- Checks operation-specific fields and requirements
- Validates amounts, assets, and accounts in operations
- Returns operation-specific error messages

## Validation
- All operation types validate correctly
- Invalid operations are rejected with specific errors
- Valid operations pass validation