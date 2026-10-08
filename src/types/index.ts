import { Transaction, Account, Asset } from '@stellar/stellar-sdk';

export interface NetworkConfig {
  network: 'testnet' | 'mainnet';
  horizonUrl: string;
  timeout?: number;
  retryAttempts?: number;
}

export interface ValidationResult {
  valid: boolean;
  transaction?: StellarTransaction;
  errors: ValidationError[];
  timestamp: string;
}

export interface ValidationError {
  code: string;
  message: string;
  field?: string;
}

export interface StellarTransaction {
  id: string;
  hash: string;
  ledger: number;
  created_at: string;
  source_account: string;
  fee_charged: string;
  max_fee: string;
  operation_count: number;
  envelope_xdr: string;
  result_xdr: string;
  result_meta_xdr: string;
  fee_meta_xdr: string;
  memo_type: string;
  memo?: string;
  signatures: string[];
  valid_after?: string;
  valid_before?: string;
  operations: Operation[];
}

export interface Operation {
  id: string;
  paging_token: string;
  transaction_successful: boolean;
  source_account: string;
  type: string;
  type_i: number;
  created_at: string;
  transaction_hash: string;
  [key: string]: any;
}

export interface Balance {
  balance: string;
  limit?: string;
  buying_liabilities: string;
  selling_liabilities: string;
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
}

export interface Trustline {
  account: string;
  asset: Asset;
  limit: string;
  balance: string;
  is_authorized: boolean;
  is_authorized_to_maintain_liabilities: boolean;
  is_clawback_enabled: boolean;
  sponsor?: string;
}

export interface NetworkStatus {
  network_passphrase: string;
  current_protocol_version: number;
  core_supported_protocol_version: number;
  history_latest_ledger: number;
  history_elder_ledger: number;
  core_latest_ledger: number;
  ingest_latest_ledger: number;
  passphrase: string;
}

export interface MonitorConfig {
  pollInterval?: number;
  includeEffects?: boolean;
  includeOperations?: boolean;
  cursor?: string;
}

export interface PaymentEvent {
  id: string;
  account: string;
  amount: string;
  asset_code?: string;
  asset_issuer?: string;
  from: string;
  to: string;
  transaction_hash: string;
  created_at: string;
}

export interface TrustlineEvent {
  account: string;
  asset: Asset;
  limit: string;
  trustor: string;
  transaction_hash: string;
  created_at: string;
}