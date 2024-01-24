// objects

// create
const myObject = {
  color: 'black',
  features: 4
};
console.log(myObject);

// mutate: add data (properties)
myObject.fuelInjection = true;
console.log(myObject);
myObject['4-wheel-drive'] = true;

// display single item with dot
console.log('my object is', myObject.color)

// display single item with array notation
console.log('is it 4 wheel drive', myObject['4-wheel-drive']);

// using toString (works with arrays too)
console.log(myObject.toString());
const myCar = ['rav', 'pilot', 'juke'];
console.log(myCar.toString());

// mutate:  remove property
delete myObject.features;
console.log('my object without features', myObject)

// merge two object
const basicJuke = {
  wheels: 4,
  color: 'red',
  doors: 4,
  make: 'Nissan'
};
const newJuke = Object.assign({}, myObject, basicJuke);
console.log('new juke', newJuke);

// objects in arrays
const cars = [
  { make: 'Nissan', model: 'Rogue', color: 'orange' },
  { make: 'Nissan', model: 'Altima', color: 'blue' },
  { make: 'Dodge', model: 'Viper', color: 'blue' }
];
console.log('make is', cars[0].make);
const randomIdx = Math.round(Math.random() * cars.length - 1);
console.log('My car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);
