function setup() {
  createCanvas(200, 200);
}
function createTile() {
  translate(0, 0);
  fill('lightsalmon');
  stroke('coral');
  strokeWeight(10);
  rect(0, 0, 200, 200);
  stroke('coral');
  strokeWeight(5);
  line(0, 100, 200, 100);
  line(100, 0, 100, 200);
  //outer lines
  stroke('indianred');
  line(25, 25, 0, 0);
  line(175, 25, 200, 0);
  line(25, 175, 0, 200);
  line(175, 175, 200, 200);
  noStroke();
  fill('palevioletred');
  //outer circles
  circle(175, 25, 15);
  circle(25, 25, 15);
  circle(175, 175, 15);
  circle(25, 175, 15);
  //inner circles
  circle(125, 75, 35);
  circle(75, 75, 35);
  circle(125, 125, 35);
  circle(75, 125, 35);
  //large central circles
  fill('indianred');
  circle(150, 50, 50);
  circle(50, 50, 50);
  circle(150, 150, 50);
  circle(50, 150, 50);
  //small central circles
  fill('palevioletred');
  circle(150, 50, 25);
  circle(50, 50, 25);
  circle(150, 150, 25);
  circle(50, 150, 25);
  noFill();
  stroke('tomato');
  strokeWeight(5);
  circle(100, 100, 40);
  strokeWeight(2);
  circle(100, 100, 105);
  stroke('lightsalmon');
  circle(100, 100, 145);
}
function draw() {
  createTile()
}