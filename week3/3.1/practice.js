function logOutGreeting (greeting) {
  console.log(greeting);
}
logOutGreeting('Salutations');
// function to get stuff
function getStuff (ingredient) {
  console.log('get' + ingredient)
}

getStuff('bread');
getStuff('peanut butter');
getStuff('honey');

// new way
const createSandwich = (ingredientArray) => {
  for (let i = 0; i < ingredientArray.length; i++) {
    console.log('get', ingredientArray[i]);
  }
}
// old way
const makeSandwich = function (ingredientArray) {
  for (let i = 0; i < ingredientArray.length; i++) {
    console.log('get', ingredientArray[i]);
  }
}
makeSandwich(['bread', 'mayo', 'tunafish']);
makeSandwich(['this', 'that', 'thing']);
const output = 12;
function makeRand (maxNumber) {
  const output = math.ceil(Math.random() * maxNu,ber);
  return output;
}
console.log(makeRand(100));

function checkLegality (age) {
  return age >= 21;
}
console.log(checkLegality(18));

const KensAge = 49;
if (checkLegality(KensAge)) {
  console.log ('He is legal');
}
const myObject = {
  x: 200,
  y: 400,
  // new way is getPosition: () =>
  getPosition: function () {
    console.log('we are' + this.x + 'from the left and ' + this.y + 'from the top')
  }
}
//tile demo
function setup() {
  createCanvas(200, 200);
}
function creatTile() {
  translate(0, 0);
  fill('blue');
  rect(0, 0, 200, 200);
  stroke('white');
  strokeWeight(5);
  line(0, 0, 200, 200);
  line(200, 0, 0, 200);
  noStroke();
  fill('yellow');
  circle(100, 50, 50);
  circle(50, 100, 50);
  circle(150, 100, 50);
  circle(100, 150, 50);
  noFill();
  stroke('purple');
  strokeWeight(5);
  circle(100, 100, 100);
}

function draw() {
  createTile()
}