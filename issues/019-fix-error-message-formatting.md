# Fix inconsistent error message formatting

**Labels:** bug, good first issue

## Evidence
File: `src/validators/StellarValidator.ts` - Error messages have inconsistent format and structure

## Problem
Error messages are inconsistent, making it hard for developers to handle errors programmatically and provide good user experience.

## Required change
Standardize error message format with consistent error codes, messages, and additional context information

## Acceptance criteria
- All errors follow consistent format structure
- Error codes are standardized and documented
- Messages are clear and actionable
- Additional context provided where helpful

## Validation
- All error messages follow the same format
- Error codes are consistent across the codebase
- Messages provide clear guidance for resolution