const ROMAN = {
  IV: 4,
  I: 1,
};

const RomanNumeral = (number) => {
  if (number < 1 || number > 3999 || Number.isNaN(number)) {
    throw new Error('Value must be a number between 1 and 3999');
  }
  let result = '';
  const numerals = Object.keys(ROMAN);
  numerals.forEach((key) => {
    if (number >= ROMAN[key]) {
      result += key.repeat(Math.floor(number / ROMAN[key]));
      number -= ROMAN[key] * Math.floor(number / ROMAN[key]); // eslint-disable-line no-param-reassign
    }
  });
  return result;
};

module.exports = RomanNumeral;
