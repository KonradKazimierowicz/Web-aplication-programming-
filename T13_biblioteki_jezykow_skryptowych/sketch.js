let numBalls = 13;
let spring = 0.05;
let gravity = 0.03;
let friction = -0.9;
let balls = [];

function setup() {
    createCanvas(1500, 750);
}


function draw() {

    background(color(0, 0, 255));

    fill(color(232, 232, 232));
    line(750, 100, 750, 275);
    circle(890, 350, 40);
    circle(610, 350, 40);
    rect(625, 250, 250, 250, 20);
    ellipse(750, 675, 250, 350);

    fill(color(0));
    circle(680, 330, 30);
    circle(815, 330, 30);
    triangle(750, 360, 750, 380, 780, 370);

    fill(color(54, 255, 0));
    circle(750, 200, 50);

    fill(color(255, 19, 0));
    circle(750, 140, 30);

    fill(color(236, 255, 0));
    circle(750, 100, 20);

    fill(color(110, 56, 56));
    square(715, 410, 70, 25);

    line(950, 580, 800, 650);
    line(950, 530, 800, 610);

    fill(color(164, 223, 231));
    circle(1150, 300, 300);

    fill(color(56, 110, 57));
    triangle(1150, 300, 1100, 370, 1200, 370);
    triangle(1150, 250, 1100, 320, 1200, 320);
    triangle(1150, 200, 1100, 270, 1200, 270);

    fill(color(45, 35, 24));
    square(1135, 370, 30);

    push();
    fill(color(256));
    translate(width * 0.1,90, height * 0.7);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    pop();
    push();
    fill(color(256));
    translate(width * 0.3,140, height * 0.7);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    pop();
    push();
    fill(color(256));
    translate(width * 0.2,270, height * 0.7);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 5);
    pop();


}
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}
