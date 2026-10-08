/**
 * Validates Stellar transaction hash format
 */
export function isValidTransactionHash(hash: string): boolean {
  if (!hash || typeof hash !== 'string') {
    return false;
  }
  
  // Stellar transaction hashes are 64-character hexadecimal strings
  const hexPattern = /^[a-fA-F0-9]{64}$/;
  return hexPattern.test(hash);
}

/**
 * Validates Stellar account ID format
 */
export function isValidAccountId(accountId: string): boolean {
  if (!accountId || typeof accountId !== 'string') {
    return false;
  }
  
  // Stellar account IDs start with 'G' and are 56 characters long
  return accountId.length === 56 && accountId.startsWith('G');
}

/**
 * Validates Stellar asset code format
 */
export function isValidAssetCode(code: string): boolean {
  if (!code || typeof code !== 'string') {
    return false;
  }
  
  // Asset codes can be 1-12 alphanumeric characters
  const pattern = /^[A-Za-z0-9]{1,12}$/;
  return pattern.test(code);
}

/**
 * Validates network parameter
 */
export function isValidNetwork(network: string): boolean {
  return network === 'testnet' || network === 'mainnet';
}

/**
 * Sanitizes string input
 */
export function sanitizeString(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Validates amount string format
 */
export function isValidAmount(amount: string): boolean {
  if (!amount || typeof amount !== 'string') {
    return false;
  }
  
  const numAmount = parseFloat(amount);
  return !isNaN(numAmount) && numAmount >= 0;
}