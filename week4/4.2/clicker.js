// select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
// put an h1 inside of it
// create a new element
const heading1 = document.createElement('h1');
const heading2 = document.createElement('h2');
const heading3 = document.createElement('h3');
const heading4 = document.createElement('h4');
const heading5 = document.createElement('h5');

// add text to new elements of H1-H5
heading1.innerHTML = 'All About Llamas';
heading2.innerHTML = 'Llamas are related to camels, and like camels, are used to carry goods over long distances.';
heading3.innerHTML = 'Click HERE to see what color Llamas are';
heading4.innerHTML = 'A llama can carry as much as 200 pounds for 12 hours a day, but are not ridden.';
heading5.innerHTML = 'Habitat: Llamas are native to the mountainous region of South America.';

// attach new elements to emptydiv
myEmptyDiv.appendChild(heading1);
myEmptyDiv.appendChild(heading2);
myEmptyDiv.appendChild(heading4);
myEmptyDiv.appendChild(heading5);
myEmptyDiv.appendChild(heading3);

heading3.style.color = 'darkred';


// make cursor a point when hovering over h3
heading3.style.cursor = 'pointer';

heading3.addEventListener('click', handleHeadingClick);

function handleHeadingClick () {
  console.log('Heading has been clicked');
  document.body.style.backgroundColor = 'papayawhip';
}
