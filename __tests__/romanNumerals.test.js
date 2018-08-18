const RomanNumeral = require('../src/romanNumerals');

describe('RomanNumeral', () => {
  it('converts 1 to I', () => {
    expect(RomanNumeral(1)).toBe('I');
  });
  it('converts 2 to II', () => {
    expect(RomanNumeral(2)).toBe('II');
  });
});
