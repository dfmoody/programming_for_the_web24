let grid = undefined

let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color name in lower case", "purple");

function setup () {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("img/100px_grid.png");
}
function draw() {
    background(grid);
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(20);
    stroke("lightblue");
    // left leg
    ellipse(400, 650, 200);
    // right leg
    ellipse(600, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    // hat brim highlight
    stroke("red");
    strokeWeight(50);
    line(400, 310, 600, 310);
    line(580, 310, 590, 360);
    // head
    stroke("lightblue");
    strokeWeight(20);
    ellipse(500, 200, 200);
    // hat brim
    stroke("black");
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    quad(450, 30, 550, 30, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(50);
    point(465, 180);
    point(535, 180);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 230, 70, 50, 0, 2.9)
    // buttons
    stroke(0);
    strokeWeight(30);
    point(500, 360);
    point(500, 440);
    point(500, 520);
    // hat brim highlight
    stroke("yellow");
    strokeWeight(20);
    line(430, 90, 570, 90);
    // arms
    stroke("brown");
    strokeWeight(20);
    line(630, 310, 800, 210);
    line(750, 240, 750, 210);
    line(690, 280, 750, 280);
    line(370, 310, 200, 210);
    line(250, 240, 250, 210);
    line(250, 280, 310, 280);
    // nose
    stroke("orange");
    strokeWeight(20);
    line(495, 220, 560, 225);
}