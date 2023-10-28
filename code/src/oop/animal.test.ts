import { Animal, Cat, Dog, Owner, Pet } from "./animal";

describe('Dog', () => {
    it('should be able to eat like animal', () => {
        // polymorphism
        let animal: Animal = new Dog('Poodle');
        expect(animal.eat()).toBe('I am eating like dog');

        // animal.bark() // error
        (animal as Dog).bark()     
    });
});

describe('Owner', () => {
    it('should be able to play with Dog', () => {
        const owner = new Owner();

        let pet: Pet = new Dog('Poodle');
        owner.have(pet);

        expect(owner.play()).toBe('Whoof! Whoof!')

        pet = new Cat('Thai');
        owner.have(pet);
        expect(owner.play()).toBe('Meow!')
        
    });
});