import { Logger } from './logger';

const createSut = () => {
  const sut = new Logger();
  return sut;
};

describe('Logger', () => {
  it('should showMsg', () => {
    const sut = createSut();
    const sutSpy = jest.spyOn(sut, 'showMsg');
    sut.showMsg('hello world');
    expect(sutSpy).toHaveBeenCalledTimes(1);
  });

  it('should return undefined when method showMsg is called', () => {
    const sut = createSut();
    expect(sut.showMsg('')).toBe(undefined);
  });
});
