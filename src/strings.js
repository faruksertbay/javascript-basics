// Create the following functions:
function sayHello(name) {
  return `Hello, ${name}!`;
}

function uppercase(str) {
  return str.toUpperCase();
}

function lowercase(str) {
  return str.toLowerCase();
}

function countCharacters(str) {
  return str.length;
}

function firstCharacter(str) {
  return str.charAt(0);
}

function firstCharacters(str, count) {
  return str.slice(0, count);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
