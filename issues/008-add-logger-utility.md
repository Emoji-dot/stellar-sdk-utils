# Add structured logging utility for better debugging

**Labels:** enhancement

## Evidence
Multiple files use console.log and console.warn without structured logging

## Problem
Debugging is difficult without proper log levels, formatting, and structured output. Production applications need configurable logging.

## Required change
Create `src/utils/logger.ts` with configurable log levels, structured output, and environment-based configuration

## Acceptance criteria
- Supports debug, info, warn, error log levels
- JSON output for production, readable format for development
- Configurable via environment variables
- Used consistently across codebase

## Validation
- Logger works in different environments
- Log levels filter correctly
- Output format is appropriate for each environment