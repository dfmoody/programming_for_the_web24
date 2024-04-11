let song;
let button;
let amp;

function setup() {
  createCanvas(700, 400);
  // 23843807 "Sunset Vibes"
  song = loadSound("sunset_vibes.mp3", loaded);
  amp = new p5.Amplitude();
  background(51);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(0);

  let vol = amp.getLevel();

  let numShapes = int(map(vol, 0, 1, 1, 20));

  for (let i = 0; i < numShapes; i++) {
    let r = random(50, 200);
    let g = random(100, 255);
    let b = random(150, 255);

    stroke(r, g, b, 200);
    strokeWeight(2);
    noFill();

    // Randomly choose between line and shape
    let choice = random(1);
    if (choice < 0.5) {
      // Draw lines radiating outwards from the center
      let angle = random(TWO_PI);
      let length = map(vol, 0, 1, 10, 400); 
      let x2 = width / 2 + cos(angle) * length;
      let y2 = height / 2 + sin(angle) * length;
      let x3 = width / 2 + cos(angle + PI / 2) * length * random(0.5, 1.5);
      let y3 = height / 2 + sin(angle + PI / 2) * length * random(0.5, 1.5);
      bezier(width / 2, height / 2, x3, y3, x2, y2, x2, y2);
    } else {
      // Draw shapes around the center
      let radius = map(vol, 0, 1, 20, 200); 
      let x = width / 2 + cos(TWO_PI / numShapes * i) * radius * random(0.5, 1.5);
      let y = height / 2 + sin(TWO_PI / numShapes * i) * radius * random(0.5, 1.5);
      let size = map(vol, 0, 1, 10, 50) * random(1, 2); 
      beginShape();
      for (let j = 0; j < 5; j++) {
        let angle = TWO_PI / 5 * j;
        let x1 = x + cos(angle) * size;
        let y1 = y + sin(angle) * size;
        vertex(x1, y1);
      }
      endShape(CLOSE);
    }
  }
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}
