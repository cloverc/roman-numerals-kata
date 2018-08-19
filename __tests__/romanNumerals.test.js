const RomanNumeral = require('../src/romanNumerals');

describe('RomanNumeral', () => {
  const testCases = [
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [9, 'IX'],
    [10, 'X'],
    [40, 'XL'],
    [48, 'XLVIII'],
    [50, 'L'],
    [59, 'LIX'],
    [90, 'XC'],
    [93, 'XCIII'],
    [100, 'C'],
    [141, 'CXLI'],
    [163, 'CLXIII'],
    [402, 'CDII'],
    [500, 'D'],
    [575, 'DLXXV'],
    [900, 'CM'],
    [999, 'CMXCIX'],
    [1000, 'M'],
    [1024, 'MXXIV'],
    [3999, 'MMMCMXCIX'],
  ];

  testCases.forEach(([input, expected]) => {
    it(`converts ${input} to ${expected}`, () => {
      expect(RomanNumeral(input)).toBe(expected);
    });
  });
  it('throws an error on inputs greater than 3999', () => {
    expect(() => RomanNumeral(4000)).toThrow('Value must be a number between 1 and 3999');
  });
  it('throws an error on inputs less than 1', () => {
    expect(() => RomanNumeral(0)).toThrow('Value must be a number between 1 and 3999');
  });
  it('throws an error if input is a string', () => {
    expect(() => RomanNumeral('one')).toThrow('Value must be a number between 1 and 3999');
  });
});
