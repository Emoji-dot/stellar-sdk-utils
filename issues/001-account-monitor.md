# Add AccountMonitor class for real-time account monitoring

**Labels:** enhancement

## Evidence
File: `src/index.ts` line 2 exports `AccountMonitor` but class doesn't exist
File: `src/monitors/AccountMonitor.ts` is missing
README.md shows usage examples but functionality is not implemented

## Problem
The AccountMonitor class is exported and documented but not implemented. This class should provide real-time monitoring of Stellar account activities including payments, trustline changes, and balance updates using EventEmitter pattern.

## Required change
Create `src/monitors/AccountMonitor.ts` that extends EventEmitter3 for event-based monitoring, polls Stellar Horizon API for account changes, and emits typed events for payments, trustlines, and balance changes with proper error handling and configurable polling intervals

## Acceptance criteria
- AccountMonitor class extends EventEmitter3
- Implements constructor(accountId: string, config?: MonitorConfig)
- Provides start() and stop() methods
- Emits 'payment', 'trustline_created', 'trustline_removed' events
- Includes getBalance() and getTrustlines() methods
- Has comprehensive error handling and follows existing code patterns

## Validation
- Run test suite: `npm test`
- Test with Stellar testnet account
- Verify events are emitted correctly
- Check memory usage doesn't grow during monitoring