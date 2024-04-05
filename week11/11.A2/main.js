let ds;

function setup() {
  createCanvas(710, 400);
  ds = new PenroseLSystem();
  ds.simulate(5);
}

function draw() {
  background(0);
  ds.render();
}

function PenroseLSystem() {
  this.steps = 0;

  // Axiom and rules for a modified L-system
  this.axiom = "F";
  this.ruleF = "FF+[+F-F-F]-[-F+F+F]";

  this.startLength = 600.0; 
  // Increased initial length to fill the screen more quickly
  this.theta = radians(25); 
  // Changed angle to a more organic shape
  this.reset();
}

PenroseLSystem.prototype.simulate = function (gen) {
  while (this.getAge() < gen) {
    this.iterate();
  }
}

PenroseLSystem.prototype.reset = function () {
  this.production = this.axiom;
  this.drawLength = this.startLength;
  this.generations = 0;
}

PenroseLSystem.prototype.getAge = function () {
  return this.generations;
}

PenroseLSystem.prototype.iterate = function () {
  let newProduction = "";

  for (let i = 0; i < this.production.length; ++i) {
    let step = this.production.charAt(i);
    // Apply the rule for 'F'
    if (step == 'F') {
      newProduction += this.ruleF;
    } else {
      // Keep non-'F' characters unchanged
      newProduction += step;
    }
  }

  this.drawLength *= 0.5;
  this.generations++;
  this.production = newProduction;
}

PenroseLSystem.prototype.render = function () {
  translate(width / 2, height);

  let hue = 0; // Variable to control hue for color change

  this.steps += 5;
  if (this.steps > this.production.length) {
    this.steps = this.production.length;
  }

  for (let i = 0; i < this.steps; ++i) {
    let step = this.production.charAt(i);

    if (step == 'F') {
      stroke(hue % 255, 180, 125); 
      hue += 5; // Incrementing hue for the next segment
      line(0, 0, 0, -this.drawLength);
      translate(0, -this.drawLength);
    } else if (step == '+') {
      rotate(this.theta);
    } else if (step == '-') {
      rotate(-this.theta);
    } else if (step == '[') {
      push();
    } else if (step == ']') {
      pop();
    }
  }
}
