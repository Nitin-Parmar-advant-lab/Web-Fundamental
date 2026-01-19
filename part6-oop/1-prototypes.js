let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

console.log(`lenovo `, lenovo.__proto__);
// output: lenovo  { cpu: 12 }

//-----------------------------------------------------------

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla `, tesla.tyres);
// output: tesla  4

// console.log(`tesla `, Object.getPrototypeOf(tesla));
// output: tesla  { tyres: 4 }