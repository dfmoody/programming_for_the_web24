let rows = 1;
let cols = 12;
let squareWidth = 40;
let squareHeight = 160;
let grid = [];
let audioFiles = [];

function preload() {
  // Load audio files
  for (let i = 1; i <= 12; i++) {
    audioFiles.push(loadSound('sounds/audio' + i + '.wav'));
  }
}

function setup() {
  createCanvas(cols * (squareWidth + 2), rows * (squareHeight + 2));
  // Create rectangle, change colors to look like a piano
  for (let i = 1; i <= cols; i++) {
    let x = (i - 1) * (squareWidth + 2);
    let y = 0;
    if (i === 1 || i === 3 || i === 5 || i === 6 || i === 8 || i === 10 || i === 12) {
      grid.push(new Square(x, y, squareWidth, squareHeight, i, false)); // White rectangles
    } else {
      grid.push(new Square(x, y, squareWidth, squareHeight, i, true)); // Black rectangles
    }
  }
  // Add keyboard event listeners
  document.addEventListener('keydown', keyPressed);
}

function draw() {
  background(255, 0); 
  for (let square of grid) {
    square.display();
  }
}

function mouseClicked() {
  // Check if the mouse is inside any of the squares and play the corresponding audio file
  for (let square of grid) {
    if (square.contains(mouseX, mouseY)) {
      let index = square.index - 1; 
      if (index < audioFiles.length) {
        audioFiles[index].play();
      }
      break;
    }
  }
}

function keyPressed(event) {
  // Check if the pressed key corresponds to a number between 1-9 plus 0,-,+
  let keyIndex = parseInt(event.key);
  if (keyIndex === 0) {
    audioFiles[9].play(); 
  } else if (event.key === '-') {
    audioFiles[10].play(); 
  } else if (event.key === '=') {
    audioFiles[11].play(); 
  } else if (keyIndex >= 1 && keyIndex <= 9) {
    let index = keyIndex - 1;
    audioFiles[index].play();
  }
}

class Square {
  constructor(x, y, w, h, index, isBlack) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.index = index;
    this.isBlack = isBlack;
  }

  display() {
    stroke(0); 
    if (this.isBlack) {
      fill(0);
    } else {
      fill(255);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  contains(px, py) {
    return px > this.x && px < this.x + this.width && py > this.y && py < this.y + this.height;
  }
}
