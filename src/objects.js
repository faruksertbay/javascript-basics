/* eslint-disable prettier/prettier */
const createPerson = (name, age) => {
  return {
    name,age
  };
};

function getName(person) {
  return person.name;
}

function getProperty(propertyName, object) {
  return object[propertyName];
}

function hasProperty(propertyName, object) {
  return propertyName in object;
}

function isOver65(person) {
  return person.age > 65;
}

function getAges(people) {
  return people.map(person => person.age);
}

function findByName(name, people) {
  return people.find(person => person.name === name);
}


function findHondas(cars) {
  return cars.filter(car => car.manufacturer === 'Honda');
}

function averageAge(people) {
  if (people.length === 0) {
    return 0;
  }

  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

function createTalkingPerson(name, age) {
  const person = {
    name,
    age,
    introduce(otherPersonName) {
      return `Hi ${otherPersonName}, my name is ${this.name} and I am ${this.age}!`;
    }
  };

  return person;
}

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
