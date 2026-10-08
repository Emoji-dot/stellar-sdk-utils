# Implement rate limiting for Horizon API requests

**Labels:** enhancement, performance

## Evidence
No rate limiting exists for Horizon API calls, risking 429 errors

## Problem
Stellar Horizon has rate limits. Without client-side rate limiting, applications may hit limits and fail unexpectedly.

## Required change
Create rate limiting mechanism that queues requests and respects Horizon's rate limits with configurable limits per second

## Acceptance criteria
- Respects Horizon rate limits (default 3600/hour)
- Queues excess requests instead of failing
- Configurable rate limits
- Integrates with existing validator classes

## Validation
- Rate limiter prevents 429 errors
- Requests are queued and processed correctly
- Performance impact is minimal