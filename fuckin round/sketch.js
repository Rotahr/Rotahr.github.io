let allNumbers = [];
let localNumbers = [];
let potentAnswer = [];
let StoredNumbers;

let speed = 1;
let debut = 773700;
let lastNumber;
let x = debut;
let iterations = 0;
let previousIter = 0;
let highestIter = 0;
let highestNum = 0;
let answer = 0;

function preload() {
  lastNumber = loadJSON("assets/Debut.json");
  StoredNumbers = loadJSON("assets/StoredNumbers.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  textAlign(CENTER);

  for (let i in StoredNumbers) {
    allNumbers.push(StoredNumbers[i]);
  }
}

function draw() {
  background(220);
  text(highestIter + ", " + highestNum, windowWidth/2, windowHeight/2 - 300);
  text(previousIter, windowWidth/2, windowHeight/2 - 200);
  text(iterations, windowWidth/2, windowHeight/2 - 100);
  text(x, windowWidth/2, windowHeight/2);
  text(debut, windowWidth/2, windowHeight/2 + 100);
  text(answer, windowWidth/2, windowHeight/2 + 200);
  
  if (frameCount % speed === 0 && x !== "done") {
    if (x === 1) {
      x = "done";
    }
    else if (x % 2 === 0) {
      x = x / 2;
      iterations = iterations + 1;
      localChecker();
      xChecker();  
    }
    else {
      x = x * 3 + 1;
      iterations = iterations + 1;
      localChecker();
      xChecker();
    }
  }
  else if (frameCount % speed === 0 && x === "done") {
    previousIter = iterations;
    if (previousIter > highestIter) {
      highestIter = previousIter;
      highestNum = debut;
    }
    localNumbers = [];
    debut = debut + 1;
    debutChecker();
    x = debut;
    iterations = 0;
  }
}

function debutChecker() {
  for (let i = 0; i < allNumbers.length; i++) {
    if (debut === allNumbers[i]) {
      debut = debut + 1;
      debutChecker();
    }
  }
}

function xChecker() {
  for (let i = 0; i < allNumbers.length; i++) {
    if (x === allNumbers[i]) {
      x = "done";
      return;
    }
  }
  allNumbers.push(x);
}

function localChecker() {
  for (let i = 0; i < localNumbers.length; i++) {
    if (x === localNumbers[i]) {
      answer = debut;
      potentAnswer.push(answer);
      x = "done";
      return;
    }
  }
  localNumbers.push(x);
}

function keyPressed() {
  if (keyCode === 111) {
    saveJSON(allNumbers, "StoredNumbers", true);
    save(debut, "Debut");
  }
}