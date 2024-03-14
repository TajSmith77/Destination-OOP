const Bag = require('../../classes/Bag.js');
const Person = require('../../classes/Person.js');


describe('A bag...', () => {
        const bag1 = new Bag(5, 1245);
        test('is an instance of Bag class', () => {
            expect(bag1).toBeInstanceOf(Bag);
        })

        test('has correct weight', () => {
            expect(bag1.weight).toBe(5);
        })

        test('has correct id', () => {
            expect(bag1.id).toBe(1245);
        })

        test('initially has no owner', () => {
            expect(bag1.getOwner()).toEqual(null);
        })

        test('can be assigned an owner', () => {
            const person1 = new Person('Peter', 'New York');
            bag1.assignOwner(person1);
            expect(bag1.getOwner()).toEqual(person1);
        })
})