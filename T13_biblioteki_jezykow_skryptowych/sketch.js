function setup() {
    createCanvas(1300, 630);
}



function draw() {
    if (mouseIsPressed) {
        fill(152,251,56);
    } else {
        fill(112,215,140);
    }
    ellipse(mouseX, mouseY, 80, 80);
    arc(mouseX+40, mouseY+15, 80, 80, 0, PI + QUARTER_PI, PIE);
    rect(400, 200, 100,300);
}