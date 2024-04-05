// Ghost properties
let numGhosts = 4;
let ghosts = [];

function setup() {
  createCanvas(710, 400);
  background(150, 100, 255); // Gradient purple background

  // Create ghosts
  for (let i = 0; i < numGhosts; i++) {
    let randomSpringing = random(0.0005, 0.001); // Generate random springing factor for variable speed
    ghosts.push({
      centerX: random(width),
      centerY: random(height),
      radius: 45,
      rotAngle: -90,
      accelX: 0.0,
      accelY: 0.0,
      deltaX: 0.0,
      deltaY: 0.0,
      springing: randomSpringing, // Random springing factor for variable speed
      damping: 0.98,
      nodes: 5,
      nodeStartX: [],
      nodeStartY: [],
      nodeX: [],
      nodeY: [],
      angle: [],
      frequency: [],
      organicConstant: 1.0
    });

    //initialize arrays to 0
    for (let j = 0; j < ghosts[i].nodes; j++){
      ghosts[i].nodeStartX[j] = 0;
      ghosts[i].nodeStartY[j] = 0;
      ghosts[i].nodeY[j] = 0;
      ghosts[i].nodeY[j] = 0;
      ghosts[i].angle[j] = 0;
    }

    // iniitalize frequencies for corner nodes
    for (let j = 0; j < ghosts[i].nodes; j++){
      ghosts[i].frequency[j] = random(5, 12);
    }
  }

  noStroke();
  frameRate(30);
}

function draw() {
  //fade background
  fill(150, 100, 255, 10); // Slightly transparent purple background to create a ghost-like effect
  rect(0, 0, width, height);

  // Draw and move each ghost
  for (let i = 0; i < numGhosts; i++) {
    drawShape(ghosts[i]);
    moveShape(ghosts[i]);
  }
}

function drawShape(ghost) {
  //  calculate node  starting locations
  for (let i = 0; i < ghost.nodes; i++){
    ghost.nodeStartX[i] = ghost.centerX + cos(radians(ghost.rotAngle)) * ghost.radius;
    ghost.nodeStartY[i] = ghost.centerY + sin(radians(ghost.rotAngle)) * ghost.radius;
    ghost.rotAngle += 360.0 / ghost.nodes;
  }

  // draw shape
  fill(255, 150); // Adjust the transparency to make it more ghost-like
  beginShape();
  for (let i = 0; i < ghost.nodes; i++){
    curveVertex(ghost.nodeX[i], ghost.nodeY[i]);
  }
  endShape(CLOSE);
}

function moveShape(ghost) {
  //move center point
  ghost.deltaX = mouseX - ghost.centerX;
  ghost.deltaY = mouseY - ghost.centerY;

  // create springing effect
  ghost.deltaX *= ghost.springing;
  ghost.deltaY *= ghost.springing;
  ghost.accelX += ghost.deltaX;
  ghost.accelY += ghost.deltaY;

  // move center
  ghost.centerX += ghost.accelX;
  ghost.centerY += ghost.accelY;

  // slow down springing
  ghost.accelX *= ghost.damping;
  ghost.accelY *= ghost.damping;

  // change curve tightness
  ghost.organicConstant = 1 - ((abs(ghost.accelX) + abs(ghost.accelY)) * 0.1);

  //move nodes
  for (let i = 0; i < ghost.nodes; i++){
    let noiseFactor = noise(frameCount * 0.05 + i) * 20 - 10; // Generate organic movement using Perlin noise
    ghost.nodeX[i] = ghost.nodeStartX[i] + sin(radians(ghost.angle[i])) * noiseFactor;
    ghost.nodeY[i] = ghost.nodeStartY[i] + sin(radians(ghost.angle[i])) * noiseFactor;
    ghost.angle[i] += ghost.frequency[i];
  }
}
