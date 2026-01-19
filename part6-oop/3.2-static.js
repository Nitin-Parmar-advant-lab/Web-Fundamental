// Static

// like in java in JS:
// it can be used without initialization of object
// used when no we don't want to create object and still want to use method

// They are associated with the class itself, not with instances of the class (Objects). 


class Calculator{
    static sum(a, b){
        return console.log(`${a + b}`)
    }
}

let addIt = new Calculator()
// addIt.sum(6, 4)
// TypeError: addIt.sum is not a function

Calculator.sum(6, 4)
// 10

// -----------------------------------------
// Good example of static function and stataic properties

class Car {
  static totalCarsCreated = 0; // Static property
  static API_URL = 'https://api.example.com'; // Static constant

    constructor(make, model) {
    this.make = make;
    this.model = model;
    Car.totalCarsCreated++; // Access the static property to increment the count
    }

  static displayTotalCars() { // Static method
    console.log(`Total cars created: ${this.totalCarsCreated}`);
    }
}

// Accessing static properties and methods directly on the class
console.log(Car.API_URL); 
// Output: 'https://api.example.com'
Car.displayTotalCars(); 
// Output: 'Total cars created: 0'

// Creating instances
const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Accord');

// Accessing static data after instantiation
Car.displayTotalCars(); 
// Output: 'Total cars created: 2'