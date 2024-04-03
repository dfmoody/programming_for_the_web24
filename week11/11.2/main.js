function setup() {
  // Create white background to draw on
  createCanvas(800, 600);
  background(255); 
}

function draw() {
  // Set parameters for the drawing
  let numShapes = 3;

  // Set up the drawing of triangles
  for (let i = 0; i < numShapes; i++) {
      let x1 = random(width);
      let y1 = random(height);
      let x2 = x1 + random(-50, 50);
      let y2 = y1 + random(-50, 50);
      let x3 = x1 + random(-50, 50);
      let y3 = y1 + random(-50, 50);
      let colorVariation = random(-50, 50);
      let chosenColor = color(47, 90 + colorVariation, 192, 150); // Shades of pink
      fill(chosenColor);
      noStroke();
      triangle(x1, y1, x2, y2, x3, y3);
  }

  // Set up the drawing of curve
  for (let i = 0; i < numShapes / 2; i++) {
      let x1 = random(width);
      let y1 = random(height);
      let x2 = x1 + random(-100, 100);
      let y2 = y1 + random(-100, 100);
      let x3 = x1 + random(-100, 100);
      let y3 = y1 + random(-100, 100);
      let x4 = x1 + random(-100, 100);
      let y4 = y1 + random(-100, 100);
      let colorVariation = random(-50, 50);
      let chosenColor = color(116, 198 + colorVariation, 246, 100); // Shades of purple
      stroke(chosenColor);
      noFill();
      strokeWeight(random(1, 5));
      bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }

  // Set up the drawing of ellipse
  for (let i = 0; i < numShapes; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(5, 50);
      let colorVariation = random(-50, 50);
      let chosenColor = color(6 + colorVariation, 162, 162, 50); // Shades of yellow
      fill(chosenColor);
      noStroke();
      ellipse(x, y, size, size);
  }
}
