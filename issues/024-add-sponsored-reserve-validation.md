# Add sponsored reserve validation for operations

**Labels:** enhancement

## Evidence
Sponsored reserve operations aren't validated in the current implementation

## Problem
Sponsored reserves allow accounts to have their reserves sponsored by other accounts, but this isn't validated properly.

## Required change
Implement sponsored reserve validation including sponsor relationships, reserve requirements, and sponsored operation validation

## Acceptance criteria
- Validates begin/end sponsoring future reserves operations
- Checks sponsor account balance and authorization
- Validates reserve requirements for sponsored entries
- Handles revoke sponsorship operations

## Validation
- Sponsored reserve operations validate correctly
- Sponsor balance checks work properly
- Reserve requirement calculations are accurate