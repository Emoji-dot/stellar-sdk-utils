import winston from 'winston';
import { LoggerConfig } from '../types';

// 🐛 MULTIPLE BUGS: This logger has several issues that need fixing!

export class Logger {
  private logger: winston.Logger;

  constructor(config: LoggerConfig) {
    // BUG: No validation of config parameter
    // TODO: Add config validation
    // WAVE OPPORTUNITY: Trivial complexity
    
    this.logger = winston.createLogger({
      level: config.level,
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
        // BUG: Missing error stack trace formatting
        // TODO: Add proper error formatting for stack traces
        // WAVE OPPORTUNITY: Medium complexity
      ),
      transports: [
        new winston.transports.Console({
          // BUG: Console logs should have different formatting in development
          // TODO: Add conditional formatting based on environment
          // WAVE OPPORTUNITY: Trivial complexity
        })
        // BUG: Missing file transport for production logging
        // TODO: Add file transport configuration
        // WAVE OPPORTUNITY: Trivial complexity
      ]
    });
  }

  info(message: string, meta?: any): void {
    this.logger.info(message, meta);
  }

  error(message: string, error?: Error, meta?: any): void {
    // BUG: Error object not being properly logged
    // TODO: Extract error stack and details properly
    // WAVE OPPORTUNITY: Medium complexity
    this.logger.error(message, { error, ...meta });
  }

  warn(message: string, meta?: any): void {
    this.logger.warn(message, meta);
  }

  debug(message: string, meta?: any): void {
    this.logger.debug(message, meta);
  }

  // BUG: Missing method to change log level at runtime
  // TODO: Add setLevel method
  // WAVE OPPORTUNITY: Trivial complexity

  // BUG: Missing method to add custom transports
  // TODO: Add addTransport method
  // WAVE OPPORTUNITY: Medium complexity
}

// BUG: Missing singleton pattern - creating multiple loggers is inefficient
// TODO: Implement singleton logger or factory pattern
// WAVE OPPORTUNITY: Medium complexity

export const createLogger = (config: LoggerConfig): Logger => {
  return new Logger(config);
};

// BUG: Missing default logger instance
// TODO: Export default configured logger
// WAVE OPPORTUNITY: Trivial complexity