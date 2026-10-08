# Implement transaction sequence number validation

**Labels:** enhancement, security

## Evidence
StellarValidator doesn't validate transaction sequence numbers against account state

## Problem
Invalid sequence numbers cause transaction failures. Validation should check if sequence number is correct for the source account.

## Required change
Add sequence number validation that fetches account state and validates transaction sequence against current account sequence

## Acceptance criteria
- Fetches source account current sequence
- Validates transaction sequence is account_sequence + 1
- Handles account not found scenarios
- Returns descriptive error messages

## Validation
- Valid sequences pass validation
- Invalid sequences are rejected
- Account lookup errors are handled properly