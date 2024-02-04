/* eslint-disable prettier/prettier */
function getNthElement(index, array) {
  return array[index % array.length];
}

function arrayToCSVString(array) {
  return array.join(',');
}

function csvStringToArray(string) {
  return string.split(',');
}

function addToArray(item, array) {
  array.push(item);
}

function addToArray2(item, array) {
  return [...array, item];
}

function removeNthElement(index, array) {
  array.splice(index, 1);
  return array;
}

function numbersToStrings(array) {
  return array.map(String);
}

function uppercaseWordsInArray(array) {
  return array.map(word => word.toUpperCase());
}

function reverseWordsInArray(array) {
  return array.map(word => 
    word
      .split('')
      .reverse()
      .join('')
  );
}

function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

function removeNthElement2(index, array) {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

function elementsStartingWithAVowel(array) {
  return array.filter(word => /^[aeiou]/i.test(word));
}

function removeSpaces(string) {
  return string.replace(/\s/g, '');
}

function sumNumbers(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

function sortByLastLetter(array) {
  return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
