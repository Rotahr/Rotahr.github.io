// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// let time2 = 0;

let rectHeights;
let bikeLocation = 0;
let vroom = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectHeights = generateHeight();

  console.log(rectHeights);

}

function draw() {
  background(220);

  let rectNum = width;

  for(let i = bikeLocation; i < bikeLocation + rectNum; i++) {
    let rectWidth = width / rectNum;
    rect(rectWidth * (i - bikeLocation), height - rectHeights[i], 
      rectWidth, rectHeights[i]);
  }

  if (keyIsPressed) {
    if (key === "d") {
      bikeLocation += vroom;
      vroom += 10;
    }
    if (key === "a") {
      bikeLocation -= vroom;
      vroom -= 10;
    }
  }


  // let rectHeight = noise(time) * height;
  // // let y = noise(time2) * height;

  // rect(0, height - rectHeight, 50, rectHeight);
  // time += 0.005;
  // // time2 += 0.01;

}

function generateHeight() {
  
  let theHeights = [];
  for (let i = 0; i<5000; i++) {
    let rectHeight = noise(i * 0.001) * height;

    theHeights.push(rectHeight);

  }

  return theHeights;

}