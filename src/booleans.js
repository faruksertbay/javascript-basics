// Function to negate a boolean value
function negate(value) {
  return !value;
}

function both(a, b) {
  return a && b;
}

function either(a, b) {
  return a || b;
}

function none(a, b) {
  return !a && !b;
}

function one(a, b) {
  return (a && !b) || (!a && b);
}

function truthiness(value) {
  return Boolean(value);
}

function isEqual(a, b) {
  return a === b;
}

function isGreaterThan(a, b) {
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  return a <= b;
}

function isSquare(number) {
  return Math.sqrt(number) % 1 === 0;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

function startsWith(char, string) {
  return string.startsWith(char);
}

function containsVowels(str) {
  return [...str.toLowerCase()].some(char => 'aeiou'.includes(char));
}

function isLowerCase(str) {
  return str === str.toLowerCase();
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
