let backgroundImage;
let fireflies = [];

function preload() {
  // background image from Unsplash
  let imageUrl = 'https://images.unsplash.com/photo-1630695230041-8909e3204778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  backgroundImage = loadImage(imageUrl);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 16; i++) {
    let x = random(width);
    // keep the fireflies in the upper half
    let y = random(height * 0.6);
    let firefly = new Firefly(x, y, random(2, 5), random(0.1, 0.3));
    fireflies.push(firefly);
  }
}

function draw() {
  image(backgroundImage, 0, 0, width, height);

  for (let i = 0; i < fireflies.length; i++) {
    let firefly = fireflies[i];
    firefly.update();
    firefly.display();
  }
}

class Firefly {
  constructor(x, y, size, speed) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D().mult(speed);
    this.size = size;
    // create the outer glow
    this.glowColor = color(150, 255, 0, 10); 
    this.outerGlowColor = color(150, 255, 0, 5); 
    this.maxSpeed = 1;
  }

  update() {
    // Move the firefly in a random direction
    this.position.add(this.velocity);

    // Slowly change direction
    if (random(1) < 0.21) {
      this.velocity.rotate(random(-PI / 4, PI / 4));
    }

    this.velocity.limit(this.maxSpeed);

    // Wrap around the canvas edges
    if (this.position.x < 0) this.position.x = width;
    if (this.position.x > width) this.position.x = 0;
    if (this.position.y < 0) this.position.y = height;
    if (this.position.y > height) this.position.y = 0;
  }

  display() {
    noStroke();
    fill(this.outerGlowColor);
    ellipse(this.position.x, this.position.y, this.size * 15, this.size * 15);

    fill(this.glowColor);
    ellipse(this.position.x, this.position.y, this.size * 5, this.size * 5);

    fill(230, 200, 150, 200); // Light yellow core
    ellipse(this.position.x, this.position.y, this.size, this.size);
  }
}
