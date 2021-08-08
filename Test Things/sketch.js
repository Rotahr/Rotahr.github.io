// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Mappy = new Map();
Mappy.set(0, 10);
Mappy.set(1, 11);
Mappy.set(2, 12);
Mappy.set(3, 13);
Mappy.set(4, 14);
Mappy.set(5, 15);
Mappy.set(6, 16);
Mappy.set(7, 17);
Mappy.set(8, 18);
Mappy.set(9, 19);

let Arrayy = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = 0; i < Mappy.size; i++) {
    Arrayy.push(Mappy.get(i));
  }
}
