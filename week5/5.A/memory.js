// Constants
const boxWidth = 100;
const boxHeight = 140;

// starting positions and arrays
let startingX = 50;
let startingY = 150;
let selectedFront = [];
let cardFrontArray = [];
let fontTitle;

// Game starting state
const gameState = {
  totalPairs: 10,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false,
  timer: {
    minutes: 0,
    seconds: 0,
    timerInterval: null
  }
};
const DOWN = 'down';
const UP = 'up';
const cards = [];

// Preload to load images & font
function preload () {
  cardBack = loadImage('img/cardBack.png');
  cardFrontArray = [
    loadImage('img/parkOne.png'),
    loadImage('img/parkTwo.png'),
    loadImage('img/parkThree.png'),
    loadImage('img/parkFour.png'),
    loadImage('img/parkFive.png'),
    loadImage('img/parkSix.png'),
    loadImage('img/parkSeven.png'),
    loadImage('img/parkEight.png'),
    loadImage('img/parkNine.png'),
    loadImage('img/parkTen.png')
  ]
  // load font
  fontTitle = loadFont('fonts/PhosphateInline.ttf');
}

function setup () {
  createCanvas(1600, 1200);
  background(0, 0, 0, 0);
  initializeGame();
}

// Initialize the game
function initializeGame() {
  let selectedFaces = [];
  for (let z = 0; z < 10; z++) {
    const randomIndex = floor(random(cardFrontArray.length));
    const face = cardFrontArray[randomIndex];
    selectedFront.push(face);
    selectedFront.push(face);
    // Remove the selected face from the array to prevent duplicates
    cardFrontArray.splice(randomIndex, 1);
  }
  // Shuffle the selected faces
  selectedFront = shuffleArray(selectedFront);
  // Create cards based on selected faces
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 5; i++) {
      const frontImage = selectedFront.pop();
      cards.push(new Card(startingX, startingY, frontImage));
      startingX += 150;
    }
    startingX = 50;
    startingY += 150;
  }
  // Reset starting positions
  startingX = 225;
  startingY = 650;
  // Start the timer
  startTimer();
}

// Draw function to display the game state
function draw () {
  noStroke();
  // Loop through all cards and display them
  for (let a = 0; a < cards.length; a++) {
    if (!cards[a].isMatch) {
      cards[a].face = DOWN;
    }
    cards[a].show();
  }
  noLoop();
  // Clear the flipped cards array and reset the waiting state
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  // Draw the attempts and matches counters
  fill('black');
  stroke('black');
  strokeWeight(4)
  rect(250, 40, 300, 80);
  fill('white');
  noStroke();
  textAlign(LEFT);
  textSize(25);
  textFont(fontTitle);
  text('ATTEMPTS:  ' + gameState.attempts + ' / 30', 300, 70);
  text('MATCHES:  ' + gameState.numMatched + ' / 10', 300, 105);
  fill('darkgray');
  stroke('black');
  strokeWeight(5);
  rect(50, 40, 175, 80);
  strokeWeight(5);
  rect(575, 40, 175, 80);
  // Check if the game is won
  if (gameState.numMatched === gameState.totalPairs) {
    fill('darkgreen');
    stroke(255);
    strokeWeight(5);
    rect(50, 40, 175, 80);
    fill(255);
    noStroke();
    textSize(30);
    text('YOU WIN!', 75, 90);
    noLoop();
    noStroke();
  }
  // Check if the game is lost
  if (gameState.attempts > 29 && gameState.numMatched != gameState.totalPairs) {
    fill('darkred');
    stroke(255);
    strokeWeight(5);
    rect(575, 40, 175, 80);
    fill(255);
    noStroke();
    textSize(30);
    text('YOU LOSE.', 600, 90);
    gameState.attempts = 0;
    gameState.numMatched = 0;
    gameState.waiting = true;
    // Reload the page after 4.5 seconds
    const loopTimeout = window.setTimeout(() => {
      loop();
      window.clearTimeout(loopTimeout);
      window.location.reload();
    }, 4500)
    noLoop();
    noStroke();
  }
  // Draw the timer
  fill('black');
  noStroke();
  rect(200, 775, 400, 50);
  fill('white');
  textSize(24);
  text('TIMER: ' + formatTime(gameState.timer), 330, 810);
  // Draw the game title
  fill('darkred');
  textSize(30);
  textFont(fontTitle);
  text('NATIONAL PARK MEMORY GAME', 165, 25);
}

// Mouse pressed function to handle card flipping
function mousePressed () {
  if (gameState.waiting) {
    return
  }
  for (let k = 0; k < cards.length; k++) {
    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  // Check if two cards are flipped and update the game state accordingly
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    // Match
    if (gameState.flippedCards[0].cardFrontImg === gameState.flippedCards[1].cardFrontImg) {
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
      gameState.flippedCards.length = 0;
      gameState.numMatched++;
      loop();
      // No match with timeout
    } else {
      gameState.waiting = true;
      const loopTimeout = window.setTimeout(() => {
        loop();
        window.clearTimeout(loopTimeout);
      }, 1000)
    }
  }
}

// Card class to represent each card
class Card {
  constructor (x, y, cardFrontImg) {
    this.x = x;
    this.y = y;
    this.w = boxWidth;
    this.h = boxHeight;
    this.face = DOWN;
    this.cardFrontImg = cardFrontImg;
    this.isMatch = false;
    this.show();
  }

  // Show method to display the card
  show () {
    if (this.face === UP || this.isMatch) {
      fill('green');
      rect(this.x, this.y, this.w, this.h);
      image(this.cardFrontImg, this.x, this.y, this.w, this.h)
    } else {
      fill('white');
      rect(this.x, this.y, this.w, this.h);
      image(cardBack, this.x, this.y, this.w, this.h)
    }
  }

  // check if the card is clicked
  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }

  // flip the card
  flip() {
    if (this.face === DOWN) {
      this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
}

// Shuffle function
function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);
    counter--;
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}

// Update the timer every second
function updateTimer () {
  gameState.timer.seconds++;
  if (gameState.timer.seconds === 60) {
    gameState.timer.minutes++;
    gameState.timer.seconds = 0;
  }
}

// Start the timer
function startTimer () {
  gameState.timer.timerInterval = setInterval(updateTimer, 1000);
}

// Format the timer display
function formatTime (time) {
  return `${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
}
