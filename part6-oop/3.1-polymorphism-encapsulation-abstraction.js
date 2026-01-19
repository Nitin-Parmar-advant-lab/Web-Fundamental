// important topic before oop

// this is constructorFunction, it can be class, act same in both
function Animal(type) {
  this.type = type;
}


let dog = new Animal("dog");
console.log(dog);
// output: Animal { type: 'dog' }

// now let add new method to it

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

let dog1 = new Animal("dog");
console.log(dog1.speak());
// output : dog makes a sound
console.log(dog1);
// output: Animal { type: 'dog' }

// mean it does not contain the speak function in the object
// Methods added via prototype do NOT belong to the object itself. They belong to the object’s prototype.
// because if we create lot of object and add function direct into constructorFunction then each object will get its own copy of function, and that will be not memory efficient 

// so if we use the constructorFunction then add function using prototype
// and if we don't want to do this then just use class 
// and best practise is to use calss

//----------------------------------------------------

// Polymorphism


class Camera {
    constructor(company, megaPixel, year) {
        this.company = company
        this.megaPixel = megaPixel
        this.year = year
    }

    About(){
        return `This is ${this.company} Camera and it has ${this.megaPixel} megaPixel quality`
    }
}

class Sony extends Camera{
    constructor(model,megaPixel,year) {
        super("Sony", megaPixel, year)
        this.model = model
        this.megaPixel = megaPixel
        this.year = year
    }

    About(){
        return `Welcome to the Sony world, you have curruntly ${this.model}, which was launched in ${this.year} with ${this.megaPixel} megaPixel quality`
    }
}

let nitinCamera = new Sony("Sony alphs a6700", 24, 2024)
console.log(nitinCamera);
/* output:
Sony {
    company: 'Sony',
    megaPixel: 24,
    year: 2024,
    model: 'Sony alphs a6700'
}
*/
console.log(nitinCamera.company)
// output: Sony
console.log(nitinCamera.megaPixel);
// output: 24
console.log(nitinCamera.About());
// output: 
// Welcome to the Sony world, you have curruntly Sony alphs a6700, which was launched in 2024 with 24 megaPixel quality


console.log("-------------------------------------------------------------------)")
// -------------------------------------------------------------------
// Encapsulation


// Hiding the internal details of an object and exposing only the necessary information to the outside world

// For achiving Encapsulation in JS we use two symbols

// "_" : this is used in older class pattern
// it is convention among developers to signal that a variable or method is intended for internal use (private) and should not be accessed from outside the object or class
// Example : _salary;
// it is not true private, it can be accessed and can be modified like notmal variable 

// "#" : this is modern JS to create true private class fields.
// The JavaScript engine enforces this privacy at a syntax level. Any attempt to access a #-prefixed field from outside the class will result in a SyntaxError or TypeError
// Example : #salary;

class Employee {
    #salary = 0; // private field

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    get salary() {
        return `salary ${this.#salary}`;
    }

    set salary(value) {
        if (value < 0) {
            console.log("Invalid Salary!");
        } else {
        this.#salary = value;
        }
    }
}

// let emp = new Employee("Alice", -50000);
// Invalid Salary

let emp1 = new Employee("Alice", 60000);
// console.log(emp1.salary);
// output: salary 60000

// emp1.#salary = 60000; 
// // SyntaxError: Private field '#salary' must be declared in an enclosing class



// console.log("-------------------------------------------------------")
// -------------------------------------------------------

// Abstraction

// Abstraction = hiding complexity + exposing only necessary interface

//Encapsulation protects data(hide variable) and Abstraction hides details(or hides implementation or hide process)

class CoffeeMachine {
    #beans; 
    #water;
    constructor(water, beans) {
    this.water = water;   // user input
    this.beans = beans;   // user input
    }

    brew() {
    this.#heatWater();
    this.#grindBeans();
    console.log(`☕ Coffee Ready!" with ${this.#water} and ${this.#beans}`);
    }

    #heatWater() {
    console.log(`Heating ${this.water}ml water...`);
    }

    #grindBeans() {
    console.log(`Grinding ${this.beans}g beans...`);
    }

    getWater(){
        return this.#water
    }
    // getWater will work like function and for getting water info we have to use it like this
    // machine.getWater()

    get beans(){
        return this.#beans
    }
    // this will work nomrally 
    // machine.beans

    set water(water){
        if(water < 0){
            throw new Error("be postivie brother, your water level is low")
        } else {
            this.#water = water
        }
    }
    set beans(beans){
        if(beans < 0){
            throw new Error("Don't be cheap")
        } else {
            this.#beans = beans
        }
    }
}
const machine = new CoffeeMachine(200, 15);
machine.brew();
// console.log(machine.getWater());