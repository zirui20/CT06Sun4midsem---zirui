function setup() {
    createCanvas(600,600);
    background(220)
}

let colorValue = 0;
let spacing = 90;

function draw() {
    let diameter = 50;
    let numCircles = 10; 
    let totalWidth = diameter * numCircles;
    for(let j =0; j<5; j++) {

        let y = startY + j*diameter; 

        for(let i=0; i<5; i++) {
            fill(0, i*50, 0); 
            circle(startX+i*diameter, y, diameter); 
       

}
    }
}