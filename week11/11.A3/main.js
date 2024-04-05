let s1, s2, s3;
let gravity = 9.0;
let mass = 2.0;

function setup() {
  createCanvas(720, 400);
  fill(250, 240, 20, 80); 
  // Transparent blue-purple color
  // Inputs: x, y, mass, gravity
  s1 = new Spring2D(0.0, width / 4, mass, gravity);
  s2 = new Spring2D(0.0, width / 2, mass, gravity);
  s3 = new Spring2D(0.0, 3 * width / 4, mass, gravity);

  // Creating child springs for each main spring with adjusted mass and half the distance
  s1.children = [
    new Spring2D(s1.x + 25, s1.y, mass * 3, gravity),
    new Spring2D(s1.x + 50, s1.y, mass * 3, gravity)
  ];
  s2.children = [
    new Spring2D(s2.x + 25, s2.y, mass * 3, gravity),
    new Spring2D(s2.x + 50, s2.y, mass * 3, gravity)
  ];
  s3.children = [
    new Spring2D(s3.x + 25, s3.y, mass * 3, gravity),
    new Spring2D(s3.x + 50, s3.y, mass * 3, gravity)
  ];
}

function draw() {
  background(0);
  // Update and display main springs
  s1.update(mouseX, mouseY);
  s1.display(mouseX, mouseY);
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);
  s3.update(s2.x, s2.y);
  s3.display(s2.x, s2.y);

  // Update and display child springs
  for (let child of s1.children) {
    child.update(s1.x, s1.y);
    child.display(s1.x, s1.y);
  }
  for (let child of s2.children) {
    child.update(s2.x, s2.y);
    child.display(s2.x, s2.y);
  }
  for (let child of s3.children) {
    child.update(s3.x, s3.y);
    child.display(s3.x, s3.y);
  }
}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos; // The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 15; 
  // Smaller radius for smaller circles
  this.stiffness = 0.2;
  this.damping = 0.7;
  this.children = []; 
  // Array to hold child springs

  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
    stroke(250, 180, 155, 150); 
    line(this.x, this.y, nx, ny);
  }
}
