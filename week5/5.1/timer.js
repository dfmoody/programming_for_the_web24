// variables and constants
// x & y coordinates
let blockX = 0;
let blockY = 0;
// Array for RGB values
let blockColor = [255, 255, 255];
let drawTimer;
// Speed of the animation
const speed = 10;
// Distance moved per frame
const distance = 2;

function setup () {
  createCanvas(500, 500);
  background(0);
}

// function to draw a square at a given coordinate and rgb color
function drawBlock (x, y, color) {
  fill(color || [255, 255, 255]); // white by default
  rect(x, y, 50, 50);
}

// This function activated when a key is pressed
function keyTyped() {
  // Convert the pressed key to a number
  let keyToNumber = Number(key);
  // Check if the key is not a number, If not a number, return without doing anything
  if (isNaN(keyToNumber)) {
    return;
  }
  // If a number key is pressed, generate a random RGB color
  blockColor = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
  ];
}
// Set a timer to call the draw function at an interval
window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    // Check if the block is within the canvas height, draw at coordinates and color
    if (blockY - 50 <= height) {
      drawBlock(blockX, blockY, blockColor);
      // Move the block down by 'distance' pixels
      blockY += distance;
      // If the block has moved beyond the canvas height, Reset the y-coordinate to 0 and shift to the righ 50 pixels
    } else {
      blockY = 0;
      blockX += 50;
    }
    // stop the annimation if it has moved beyond the canvas width
    if (blockY - 50 > height && blockX - 50 > width) {
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
// Start the animation 1.5 seconds after the page loads
}, 1500);
