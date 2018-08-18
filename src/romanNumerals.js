const ROMAN = {
  IV: 4,
  I: 1,
};

const RomanNumeral = (number) => {
  let result = '';
  const numerals = Object.keys(ROMAN);
  numerals.forEach((key) => {
    // console.log(key);
    // console.log(ROMAN[key]);

    if (number >= ROMAN[key]) {
      result += key.repeat(Math.floor(number / ROMAN[key]));
      number -= ROMAN[key] * Math.floor(number / ROMAN[key]);
    }
  });
  return result;
};

module.exports = RomanNumeral;
