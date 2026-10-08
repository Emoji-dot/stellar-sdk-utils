# Implement caching layer for transaction and account data

**Labels:** enhancement, performance

## Evidence
No caching exists, causing repeated API calls for the same data

## Problem
Repeated validation of the same transactions or accounts makes unnecessary API calls, impacting performance and potentially hitting rate limits.

## Required change
Implement in-memory cache with TTL for transaction and account data, with configurable cache sizes and expiration times

## Acceptance criteria
- Caches transaction and account data with configurable TTL
- LRU eviction policy for memory management
- Cache hit/miss metrics
- Optional Redis backend support

## Validation
- Cache reduces API calls for repeated requests
- TTL expiration works correctly
- Memory usage stays within configured limits