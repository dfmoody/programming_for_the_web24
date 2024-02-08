// Set-up Input Variables
let canvasWidth = 700;
let canvasHeight = 600;
let cardWidth = 90;
let cardHeight = 100;
let padding = 40;
let numColumns = 5;
let numRows = 4;

// Set-up variables for the inner spacing - math equation style
let spacingY = ((canvasHeight - ((2 * padding) + (numRows * cardHeight))) / (numRows - 1));
let spacingX = ((canvasWidth - ((2 * padding) + (numColumns * cardWidth))) / (numColumns - 1));

// Create Canavas
function setup () {
  createCanvas(canvasWidth, canvasHeight);
  background('black');
}

// Create Rectangles which represent cards within the Memory Game
function draw () {
  fill('darkseagreen')
  // Create loop based on how many Rows and Columns fit
  for (var r = 0; r <= numRows; r++) {
    for (var c = 0; c <= numColumns; c++) {
      var y = r * (cardHeight + spacingY);
      var x = c * (cardWidth + spacingX);
      rect(padding + x, padding + y, cardWidth, cardHeight);
    }
  }
}
