function setup() {
    createCanvas(500, 500)
}
function draw() {
    if (mouseIsPressed) {
        fill("maroon");
        stroke("red")
        rect(mouseX, mouseY, 40, 80)
    }   
    else {
        fill("crimson");
        stroke("pink");
        rect(mouseX, mouseY, 50, 60)
    }
    
}
