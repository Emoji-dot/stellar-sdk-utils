# Improve error handling and timeout management in StellarValidator

**Labels:** bug, good first issue

## Evidence
File: `src/validators/StellarValidator.ts` lines 45-55
Generic error handling without specific HTTP status code handling
No timeout configuration for individual requests

## Problem
Error handling in StellarValidator is too generic and doesn't distinguish between different types of failures (network timeout, rate limiting, server errors). This makes debugging difficult and doesn't provide appropriate retry strategies for different error types.

## Required change
Enhance error handling to map specific HTTP status codes to appropriate error types, implement request timeout configuration, add exponential backoff for rate limiting, provide more detailed error messages, and handle network connectivity issues gracefully

## Acceptance criteria
- Maps 404, 429, 500, 503 status codes to specific error types
- Implements configurable request timeout (default 30s)
- Adds exponential backoff for rate limit errors
- Returns structured error objects with error codes
- Preserves original error context for debugging
- Doesn't break existing API contracts

## Validation
- Test with various error scenarios
- Verify timeout handling works correctly
- Check rate limit retry behavior
- Ensure error messages are helpful for debugging