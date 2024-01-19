let grid = undefined

let stroke1 = prompt("enter a basic color name in lower case (scarf color)", "red");
let stroke2 = prompt("enter another basic color name in lower case (hat ribbon)", "yellow");

function setup () {
    createCanvas(1000, 800);
    background("lavender");
    // grid = loadImage("img/100px_grid.png");
}
function draw() {
    // background
    fill("#f1f1f1");
    strokeWeight(20);
    stroke("black");
    rect(-10,650,1020,160)
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
    // scarf
    stroke(stroke1);
    strokeWeight(50);
    line(410, 300, 600, 300);
    line(580, 310, 610, 360);
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
    // eyes pupils
    stroke("white");
    strokeWeight(15);
    point(455, 180);
    point(525, 180);
    // mouth
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(500, 230, 70, 50, 0, 2.9)
    // buttons
    stroke(0);
    strokeWeight(30);
    point(500, 360);
    point(500, 440);
    point(500, 520);
    // hat brim highlight
    stroke(stroke2);
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

     // small body
     fill("#f1f1f1");
     strokeWeight(20);
     stroke("lightblue");
     ellipse(150, 600, 200, 300);
     // head
     stroke("lightblue");
     strokeWeight(20);
     ellipse(150, 400, 150);
    // hat brim
    stroke("black");
    strokeWeight(40);
    line(90, 330, 210, 330);
    // hat body
    quad(110, 330, 110, 280, 190, 280, 190, 330);
     // eyes
     stroke(0);
     strokeWeight(30);
     point(115, 380);
     point(180, 380);
     // eyes pupils
     stroke("white");
     strokeWeight(10);
     point(119, 380);
     point(184, 380);
    // mouth
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(150, 410, 70, 30, 0.5, 3)
    // buttons
    stroke(0);
    strokeWeight(30);
    point(150, 520);
    point(150, 570);
    point(150, 620);
}