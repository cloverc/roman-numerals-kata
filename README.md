# Roman Numerals Kata

Generate a roman numeral when passed an integer.

## Installation

```sh
$ git clone git@github.com:cloverc/roman-numerals-kata.git
$ cd roman-numerals-kata
$ npm install
$ npm start
```

## Tests

```sh
$ npm test
```

## Usage

Runs from node REPL

```sh
$ node
$ const RomanNumeral = require('../src/romanNumerals');
$ RomanNumeral(543)
DXLIII
```

## Approach

I used JavaScript for my implementation of a Roman Numeral generator. Testing was carried out using the Jest testing framework.

I began by referencing the Wikipedia entry on Roman numerals and progressed to trying to convert the smallest numerals first using a TDD approach. As my code started to getting repetitive I refactored and created an object literal to store the Roman numerals as keys with the corresponding integer as the value.

The RomanNumeral method iterates through the object finding an integer match (performing some math and using the repeat method as necessary) and appends the corresponding numeral values to the result string.

### Assumptions made:
* As JavaScript doesn’t fully support Classes (or not in a true Object Oriented way) and doesn’t have interfaces, as per the problem outline, I decided to implement the kata as a simple function.
* Based on requirements, I didn’t build a front end as this wasn’t specified.
* Does not support strings.

### Caveats
* Only support numbers between 1 and 3999 


## The Kata

```
In whatever language you prefer, write a class that implements the
following interface (example given in Java):


public interface RomanNumeralGenerator {

    public String generate(int number);

}

For example, see the following sample inputs and outputs:

1 = “I”
5 = “V”
10 = “X”
20 = “XX”
3999 = “MMMCMXCIX”

Caveat: Only support numbers between 1 and 3999
```