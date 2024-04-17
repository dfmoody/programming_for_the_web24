let colors = []; 
let colorIndex = 0; 

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    // random colors within a blue voilet 
    for (let i = 0; i < 100; i++) {
        colors.push(color(random(50), random(50), random(255)));
    }
}

function draw() {
    background(0);
    noFill();
    strokeWeight(2);
    translate(width / 2, height / 2);
    for (let i = 0; i < 200; i++) {
        push();
        rotate(sin(frameCount + i) * 100);
        stroke(colors[(colorIndex + i) % colors.length]);
        rect(0, 0, cos(600 - i) * 3, 600 - i * 3, 200 - i);
        pop();
    }
    // Slowly transition to the next color
    colorIndex = (colorIndex + 1) % colors.length;
}