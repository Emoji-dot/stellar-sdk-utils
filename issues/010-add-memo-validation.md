# Add memo validation for transactions

**Labels:** enhancement, good first issue

## Evidence
Transaction validation doesn't check memo field validity

## Problem
Transaction memos have specific format requirements that should be validated to prevent transaction failures.

## Required change
Add memo validation to StellarValidator that checks memo type and content according to Stellar specifications

## Acceptance criteria
- Validates memo types (MEMO_TEXT, MEMO_ID, MEMO_HASH, MEMO_RETURN)
- Checks memo content length and format
- Returns appropriate error messages
- Integrates with existing validation

## Validation
- All memo types validate correctly
- Invalid memos are rejected with clear errors
- Valid memos pass validation