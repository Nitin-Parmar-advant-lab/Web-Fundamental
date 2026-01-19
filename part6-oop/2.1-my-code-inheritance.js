// function constructor 

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const nitin = new Person("nitin", 21);
// console.log(nitin);

const me = new Person("it is me", 21);
// console.log(me);

//-------------------------------------------------

// function car(company, model){
//     this.company = company;
//     this.model = model;
//     this.makeSound = () => {
//         console.log(`yes ${this.model} make noice.`);
//     }
// }
//This constructor function may be converted to a class declaration.ts(80002):  
/*
class car {
    constructor(company, model) {
        this.company = company;
        this.model = model;
        this.makeSound = () => {
            console.log(`yes ${this.model} make noice.`);
        };
    }
}
*/

// const p1 = new car("ferrari", "pursanguae")
// console.log(p1);
// output:
/*car {
    company: 'ferrari',
    model: 'pursanguae',
    makeSound: [Function (anonymous)]
}*/

// p1.model = "roma";
 // console.log(Object.values(p1));
 // output: [ 'ferrari', 'roma', [Function (anonymous)] ]

// p1.makeSound()
 // yes roma make noice.


//------------------------------------------------- 
// Inheritance

// We must use super() before using `this` in a child class constructor
// (only if a constructor exists in the child class).

// If we don’t call super(), it will throw this error:
// ReferenceError: Must call super constructor in derived class before accessing 'this'

// This is because we are extending the parent’s properties to the child.
// In the child class, we must call the parent class constructor.

// JavaScript creates the parent class object (base object) first,
// then it creates the child class object instance.
// until super() runs, JS doesn't create the object binding behind this.

// What if we don't pass all parent class constructor parameters to super()?
// If we don't pass all parent constructor parameters to super(),
// the missing parameters will be undefined
// unless the parent constructor defines default values.


class Car {
    constructor(company, model) {
    this.company = company;
    this.model = model;
    }

    configure(exterior, interior, budget) {
    this.exterior = exterior;
    this.interior = interior;
    this.budget = budget;
    }

    wheel(number, type, inch) {
    this.wheelInfo = { number, type, inch };
    }

    start() {
    return `${this.company} ${this.model} starting...`;
    }
}

class Lambo extends Car {
    constructor(model, year, price) {
    super("Lambo", model)
    this.model = model;
    this.year = year;
    this.price = price;
    }
    
    bestLambo() {
    return `${this.model} is one of our best builds!`;
    }

    // poly Overriding a Parent Method
    start() {
            // return `${this.model} is started where loudly `
            return super.start() + "with a NA v10 engine roar"
    }
}


let nitinAgain = new Lambo("Hurcan", "2022", "4cr");
console.log(nitinAgain);
// Lambo { company: 'Lambo', model: 'Hurcan', year: '2022', price: '4cr' }
console.log(nitinAgain.model);
// Hurcan
console.log(nitinAgain.bestLambo())
//Hurcan is one of our best builds!
console.log(nitinAgain.company)
// Lambo
console.log(nitinAgain.start())
// Hurcan is started where loudly

let nitinCar = new Car("Toyota", "Camray")
console.log(nitinCar.start());
//Toyota Camray starting...

console.log(nitinAgain instanceof Car)
// true