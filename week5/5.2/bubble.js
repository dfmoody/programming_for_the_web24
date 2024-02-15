let bubble = [];

function setup () {
  createCanvas(600, 400);
  background(10, 20, 30);

  for (let i = 0; i < 5; i++) {
    // Random color selected
    let color = [random(255), random(255), random(255)];
    bubble.push(new Bubble(random(width), random(height), color));
  }
}
function draw () {
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].move();
    bubble[i].show();
  }
}
class Bubble {
  constructor (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  move () {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-20, 20);
  }

  show () {
    noFill();
    stroke(this.color);
    strokeWeight(2);
    ellipse(this.x, this.y, 50, 50);
  }
}