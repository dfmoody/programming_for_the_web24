// to create package.json, type into the terminal, npm init -y
// to add node modules, type into the npm install --save-dev eslint
// add file in side panel called .gitignore, within that file type node_modules
// add file in side panel called .eslintrc
// copy lintRules.json text from gist.github.com/ken-teaches-web/d719f1b3e72c87171d6f5a0aacfe77f9
// minus the final (trailing) comma in the text you pasted, after the yoda line
// Array = variable but has multiple slots

const myArr = ['bob', 'betty', 'sue', 'jack'];
const myOtherArray = []; // didnt need to type = new Array(), literal was just []
myOtherArray.push('star wars');
myOtherArray.push('raiders of the lost ark');
// myArr.pop(); //removes last item
// myArr.shift(); //removes first item
myArr.unshift('james');

console.log(myArr);
console.log(myOtherArray);

console.log(myOtherArray[0]) // read single item
console.log(myOtherArray[1]) // read second item

console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty');
console.log(myArr[bettyIdx]);

if (bettyIdx > -1) {
  console.log(myArr[bettyIdx]);
}

myArr.splice(bettyIdx, 1); // remove item at position
console.log(myArr);
console.log(myArr.length);

// Math.random() for random 0 and 1
// Math.round(n) rounds to nearest whole number
// myArr.lenth - 1 to get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr[randomNumber]);
