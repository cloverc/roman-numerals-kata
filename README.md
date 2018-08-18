# Roman Numerals Kata

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