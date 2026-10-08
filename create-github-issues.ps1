# PowerShell script to create GitHub Issues 
# GitHub CLI is already installed and authenticated

# Add GitHub CLI to PATH for this session
$env:PATH += ";C:\Program Files\GitHub CLI"

Write-Host "GitHub CLI authenticated as Emoji-dot"
Write-Host "Creating GitHub Issues..."
Write-Host ""

Write-Host "[1/5] Creating: Add AccountMonitor class for real-time account monitoring" -ForegroundColor Green

$body1 = @"
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
"@

gh issue create --title "Add AccountMonitor class for real-time account monitoring" --body $body1 --label "enhancement"
Write-Host "✓ Issue #1 created successfully" -ForegroundColor Green
Start-Sleep -Seconds 2

Write-Host "[2/5] Creating: Add comprehensive signature validation for transactions" -ForegroundColor Green

$body2 = @"
## Evidence
File: `src/validators/StellarValidator.ts` lines 95-110
Method `validateSignatures()` is placeholder with TODO comment
Current implementation only checks if signatures exist, not validity

## Problem
Transaction signature validation is incomplete. The current implementation only verifies that signatures exist but doesn't validate them against the transaction envelope or account signers, creating a security gap where invalid transactions could pass validation.

## Required change
Implement complete signature validation in `validateSignatures()` method that validates signatures against transaction envelope XDR, checks signature weights against account signer thresholds, verifies all required signatures are present, and handles multi-signature accounts correctly

## Acceptance criteria
- Validates signature cryptography using Stellar SDK
- Checks signer weights against account thresholds
- Handles low, medium, and high threshold operations
- Validates master key and additional signers
- Returns specific error codes for different signature failures
- Includes comprehensive test coverage for edge cases
- Performance impact is minimal (< 100ms additional validation time)

## Validation
- Run signature validation tests: `npm run test:integration`
- Test with multi-signature accounts
- Verify invalid signatures are rejected
- Test performance with complex transactions
"@

gh issue create --title "Add comprehensive signature validation for transactions" --body $body2 --label "enhancement,security"
Write-Host "✓ Issue #2 created successfully" -ForegroundColor Green

Write-Host ""
Write-Host "First 2 issues created successfully! 🎉"
Write-Host "Visit: https://github.com/Emoji-dot/stellar-sdk-utils/issues"