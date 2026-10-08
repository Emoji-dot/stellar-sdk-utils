# Add stellar.toml validation for asset issuers

**Labels:** enhancement

## Evidence
AssetValidator doesn't exist and no stellar.toml validation is implemented

## Problem
Asset issuers should have valid stellar.toml files. Applications need to validate issuer legitimacy and asset information.

## Required change
Implement stellar.toml fetching and validation to verify asset issuer information, including asset details, issuer verification, and compliance information

## Acceptance criteria
- Fetches and parses stellar.toml from issuer domains
- Validates asset information matches toml declarations
- Checks issuer verification and compliance data
- Handles CORS and network issues gracefully

## Validation
- stellar.toml files are fetched and parsed correctly
- Asset information validation works properly
- Network and parsing errors are handled appropriately