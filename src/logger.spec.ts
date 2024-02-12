/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoggerProtocol } from './interfaces/logger-protocol';

class LoggerMock implements LoggerProtocol {
  showMsg(msg: string): void {}
}

const createSut = () => {
  const sut = new LoggerMock();
  return sut;
};

describe('Logger', () => {
  it('should return undefined when method showMsg is called', () => {
    const sut = createSut();
    expect(sut.showMsg('')).toBe(undefined);
  });
});
