# Add NetworkMonitor class for Stellar network health tracking

**Labels:** enhancement

## Evidence
File: `src/index.ts` line 4 exports `NetworkMonitor` but class doesn't exist
File: `src/monitors/NetworkMonitor.ts` is missing
No network health monitoring capabilities exist

## Problem
Network monitoring functionality is missing. Applications need to track Stellar network health, ledger progression, and detect network issues. This is critical for production applications that need to respond to network problems.

## Required change
Implement NetworkMonitor class that monitors ledger close times and progression, tracks Horizon server response times, detects network congestion or issues, provides network health metrics, and emits events for network status changes

## Acceptance criteria
- Extends EventEmitter3 for status events
- Monitors ledger close intervals and detects delays
- Tracks Horizon API response times
- Implements getNetworkHealth(): Promise<NetworkHealth>
- Emits 'network_slow', 'network_recovered', 'ledger_gap' events
- Includes configurable health check intervals
- Has graceful error handling and reconnection logic

## Validation
- Run monitoring tests: `npm test`
- Test network health detection accuracy
- Verify events are emitted at correct times
- Check performance impact is minimal