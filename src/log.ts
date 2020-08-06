export interface Logger {
  debug(...args: any[]): void;
  info(...args: any[]): void;
}

// Dummy placeholder for a logging function
export function getLogger(): Logger {
  throw new Error("This is unimplemented.");
}
