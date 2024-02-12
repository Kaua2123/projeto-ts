import { LoggerProtocol } from './interfaces/logger-protocol';

export class Logger implements LoggerProtocol {
  constructor() {}

  showMsg(msg: string): void {
    console.log(msg);
  }
}
