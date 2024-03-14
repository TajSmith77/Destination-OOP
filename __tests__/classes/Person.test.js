const Person = require('../../classes/Person.js');
const Bag = require('../../classes/Bag.js');

describe('Person', () => {
  test('check if Person is a class', () => {
    const person = new Person('Lily', 'London');
    expect(person).toBeInstanceOf(Person);
  });

  test('should have name and destination', () => {
    const person = new Person('Lily', 'London');
    expect(person.name).toBe('Lily');
    expect(person.destination).toBe('London');
  });

  test('bags should initialize as an empty array', () => {
    const person = new Person('Lily', 'London');
    expect(person.bags).toEqual([]);
  });


  test('addBag() should add a bag to the bags array', () => {
    const person = new Person('Lily', 'London');
    const bag = {weight: 10, id: 23153};
    person.addBag(bag);
    expect(person.bags.length).toBe(1);
    expect(person.bags[0]).toBe(bag);
  });

  test('should return the bags array', () => {
    const person = new Person('Lily', 'London');
    const bag = {weight: 10, id: 23153};
    person.addBag(bag);
    const bags = person.getBags();
    expect(bags.length).toBe(1);
    expect(bags[0]).toBe(bag);
  });
});
