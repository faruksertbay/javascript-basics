// Export each of the functions below.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return a ** b;
}

function round(a) {
  return Math.round(a);
}

function roundUp(number) {
  return Math.ceil(number);
}

function roundDown(a) {
  return Math.floor(a);
}

function absolute(number) {
  return Math.abs(number);
}

function quotient(a, b) {
  return Math.trunc(a / b);
}

function remainder(a, b) {
  return a % b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundDown,
  roundUp,
  absolute,
  quotient,
  remainder
};
