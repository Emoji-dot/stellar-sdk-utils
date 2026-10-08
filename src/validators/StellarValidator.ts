import { Server, Networks, Transaction } from '@stellar/stellar-sdk';
import pRetry from 'p-retry';
import { NetworkConfig, ValidationResult, StellarTransaction, ValidationError } from '../types';
import { isValidTransactionHash, isValidAccountId } from '../utils/validation';

export class StellarValidator {
  private server: Server;
  private network: string;
  private config: NetworkConfig;

  constructor(config: NetworkConfig) {
    this.config = {
      timeout: 30000,
      retryAttempts: 3,
      ...config
    };
    
    this.server = new Server(config.horizonUrl, {
      allowHttp: config.network === 'testnet'
    });
    this.network = config.network;
  }

  /**
   * Validates a Stellar transaction by hash
   */
  async validateTransaction(hash: string): Promise<ValidationResult> {
    const errors: ValidationError[] = [];
    const timestamp = new Date().toISOString();

    // Validate hash format
    if (!isValidTransactionHash(hash)) {
      errors.push({
        code: 'INVALID_HASH_FORMAT',
        message: 'Transaction hash must be 64 characters long and hexadecimal',
        field: 'hash'
      });
      return { valid: false, errors, timestamp };
    }

    try {
      const transaction = await this.getTransaction(hash);
      
      if (!transaction) {
        errors.push({
          code: 'TRANSACTION_NOT_FOUND',
          message: 'Transaction not found on the network'
        });
        return { valid: false, errors, timestamp };
      }

      // Validate transaction structure
      const structureErrors = await this.validateTransactionStructure(transaction);
      errors.push(...structureErrors);

      // Validate signatures
      const signatureErrors = await this.validateSignatures(transaction);
      errors.push(...signatureErrors);

      return {
        valid: errors.length === 0,
        transaction,
        errors,
        timestamp
      };

    } catch (error: any) {
      errors.push({
        code: 'VALIDATION_FAILED',
        message: error.message || 'Unknown validation error'
      });
      
      return { valid: false, errors, timestamp };
    }
  }

  /**
   * Retrieves a transaction by hash with retry logic
   */
  async getTransaction(hash: string): Promise<StellarTransaction | null> {
    try {
      const response = await pRetry(
        async () => {
          return await this.server.transactions().transaction(hash).call();
        },
        {
          retries: this.config.retryAttempts || 3,
          onFailedAttempt: (error) => {
            console.warn(`Transaction fetch attempt ${error.attemptNumber} failed:`, error.message);
          }
        }
      );

      return this.transformTransaction(response);
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  }

  /**
   * Validates account existence and status
   */
  async validateAccount(accountId: string): Promise<ValidationResult> {
    const errors: ValidationError[] = [];
    const timestamp = new Date().toISOString();

    if (!isValidAccountId(accountId)) {
      errors.push({
        code: 'INVALID_ACCOUNT_FORMAT',
        message: 'Account ID format is invalid',
        field: 'accountId'
      });
      return { valid: false, errors, timestamp };
    }

    try {
      await this.server.accounts().accountId(accountId).call();
      return { valid: true, errors: [], timestamp };
    } catch (error: any) {
      if (error.response?.status === 404) {
        errors.push({
          code: 'ACCOUNT_NOT_FOUND',
          message: 'Account does not exist on the network'
        });
      } else {
        errors.push({
          code: 'ACCOUNT_VALIDATION_FAILED',
          message: error.message || 'Failed to validate account'
        });
      }
      
      return { valid: false, errors, timestamp };
    }
  }

  /**
   * Gets current network status
   */
  async getNetworkStatus() {
    try {
      const ledger = await this.server.ledgers().order('desc').limit(1).call();
      const status = {
        network_passphrase: this.network === 'mainnet' ? Networks.PUBLIC : Networks.TESTNET,
        current_ledger: ledger.records[0].sequence,
        timestamp: new Date().toISOString()
      };
      
      return status;
    } catch (error) {
      throw new Error(`Failed to get network status: ${error}`);
    }
  }

  /**
   * Validates transaction structure and required fields
   */
  private async validateTransactionStructure(transaction: StellarTransaction): Promise<ValidationError[]> {
    const errors: ValidationError[] = [];

    // Check required fields
    if (!transaction.source_account) {
      errors.push({
        code: 'MISSING_SOURCE_ACCOUNT',
        message: 'Transaction must have a source account'
      });
    }

    if (!transaction.fee_charged) {
      errors.push({
        code: 'MISSING_FEE',
        message: 'Transaction must have fee information'
      });
    }

    if (!transaction.operations || transaction.operations.length === 0) {
      errors.push({
        code: 'NO_OPERATIONS',
        message: 'Transaction must contain at least one operation'
      });
    }

    return errors;
  }

  /**
   * Validates transaction signatures
   * Note: This is a placeholder for signature validation logic
   */
  private async validateSignatures(transaction: StellarTransaction): Promise<ValidationError[]> {
    const errors: ValidationError[] = [];

    if (!transaction.signatures || transaction.signatures.length === 0) {
      errors.push({
        code: 'NO_SIGNATURES',
        message: 'Transaction must be signed'
      });
    }

    // Additional signature validation would go here
    // This would involve checking against account signers, weights, etc.

    return errors;
  }

  /**
   * Transforms Horizon API response to our StellarTransaction type
   */
  private transformTransaction(response: any): StellarTransaction {
    return {
      id: response.id,
      hash: response.hash,
      ledger: response.ledger,
      created_at: response.created_at,
      source_account: response.source_account,
      fee_charged: response.fee_charged,
      max_fee: response.max_fee,
      operation_count: response.operation_count,
      envelope_xdr: response.envelope_xdr,
      result_xdr: response.result_xdr,
      result_meta_xdr: response.result_meta_xdr,
      fee_meta_xdr: response.fee_meta_xdr,
      memo_type: response.memo_type,
      memo: response.memo,
      signatures: response.signatures || [],
      valid_after: response.valid_after,
      valid_before: response.valid_before,
      operations: [] // Operations would be populated separately if needed
    };
  }
}