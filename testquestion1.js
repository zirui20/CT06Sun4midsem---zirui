function setup() {
    createCanvas(600,400);
    background(255);
}

function draw() {
    let diameter = 40;
    circle(150,200,100);
    triangle(260,200,220,260,280,200);
    quad(20,50,70,50,70,100,20,100)

    stroke("red");
    strokeWeight(10);


}

