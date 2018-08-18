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
});
