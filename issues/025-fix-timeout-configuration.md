# Fix timeout configuration for network requests

**Labels:** bug, good first issue

## Evidence
File: `src/validators/StellarValidator.ts` - Timeout configuration isn't properly applied to all requests

## Problem
The timeout configuration is set but not consistently applied to all Horizon API requests, leading to hanging requests.

## Required change
Ensure timeout configuration is properly applied to all HTTP requests made to Horizon API

## Acceptance criteria
- All API requests respect the configured timeout
- Timeout errors are handled gracefully
- Default timeout is reasonable for production use
- Timeout can be configured per request type if needed

## Validation
- Requests timeout after configured time
- Timeout errors return appropriate error messages
- Configuration changes are applied correctly