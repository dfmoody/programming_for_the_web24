// Set up coordinates of the rectangle
let rectX = 0;
let rectY;

// Set up hieght and width of rectangle
const rectHeight = 75;
const rectWidth = 75;

// Set up function of click counter starting at 0
let clickCount = 0;
let loopCount = 0;

function setup () {
  createCanvas(500, 500);
  // Randomly assign a y-coordinate for the rectangle within the canvas
  rectY = random(height - rectHeight);
}

function draw () {
  background('cornsilk');
  // Call the function to draw the rectangle - function below
  fill('darkred');
  text('You have 2 tries to click the Square as many times as possible', 10, 15);
  text('Total Hits: ' + clickCount, 170, 35);
  text('Rectangle Location: ' + [rectX], 10, 35);
  drawShape();
  // Increment the x-coordinate of the rectangle to make it move horizontally
  rectX++;

  if (rectX > width) {
    loopCount++; // Increment loop counter
    rectY = random(height - rectHeight);
    if (loopCount >= 2) { // Check if loopCount is equal to or greater than 2
      noLoop();
      text('Great Job! Your score was ' + clickCount, 100, 200);
    } else {
      rectX = 0; // Reset the x-coordinate of the rectangle to restart the loop
    }
  }
}

function mousePressed() {
  // Check if the mouse click is within the boundaries of the rectangle, rectX is constantly increasing by 1, rectY is a randomized
  if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
    // Increment the click count if the mouse click is within the rectangle
    clickCount++;
    // Log the hit count to the console
    console.log('hit', clickCount);
  }
}

function drawShape() {
  fill('slateblue'); // Set the fill color of rect outlined below
  // Draw the rectangle using the specified coordinates and dimensions
  rect(rectX, rectY, rectWidth, rectHeight);
}