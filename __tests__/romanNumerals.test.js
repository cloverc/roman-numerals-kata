const RomanNumeral = require('../src/romanNumerals');

describe('RomanNumeral', () => {
  it('converts 1 to I', () => {
    expect(RomanNumeral(1)).toBe('I');
  });
  it('converts 2 to II', () => {
    expect(RomanNumeral(2)).toBe('II');
  });
  it('converts 3 to III', () => {
    expect(RomanNumeral(3)).toBe('III');
  });
  it('converts 4 to IV', () => {
    expect(RomanNumeral(4)).toBe('IV');
  });
  it('converts 10 to X', () => {
    expect(RomanNumeral(10)).toBe('X');
  });
  it('converts 50 to L', () => {
    expect(RomanNumeral(50)).toBe('L');
  });
  it('converts 100 to XL', () => {
    expect(RomanNumeral(100)).toBe('C');
  });
  it('converts 1000 to M', () => {
    expect(RomanNumeral(1000)).toBe('M');
  });
  it('throws an error on inputs greater than 3999', () => {
    expect(() => RomanNumeral(4000)).toThrow('Value must be a number between 1 and 3999');
  });
  it('throws an error on inputs less than 1', () => {
    expect(() => RomanNumeral(0)).toThrow('Value must be a number between 1 and 3999');
  });
});
