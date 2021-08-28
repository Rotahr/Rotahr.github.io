// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 20;
const COLS = 30;
let grid, cellWidth, cellHeight;
let playerX = 0;
let playerY = 0;
let playerImage, wallImage, grassImage;
let snakeSize = 1;
let fruitX = 0;
let fruitY = 0;
let oldturn = 0;
let turn = 0;
let waitTime = 2000;
let increase = waitTime;
let direction = "right";

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width / COLS;
  cellHeight = height / ROWS;
  //add player to grid
  grid[playerY][playerX] = 9;
  spawnFruit();
}

function draw() {
  background(220);
  displayGrid();
  fill("white");
  text(turn, width - width/4, height - height/4);
  if (millis() > waitTime) {
    oldturn = turn;
    turn++;
    waitTime += increase;
  }
  if (turn !== oldturn) {
    if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
      if (direction === "right") {
        playerX += 1;
      }
      else if (direction === "left") {
        playerX -= 1;
      }
      else if (direction === "down") {
        playerY += 1;
      }
      else if (direction === "up") {
        playerY -= 1;
      }
      oldturn = turn;
    }
  }
  grid[playerY][playerX] = 9;
}

function spawnFruit() {
  fruitX = ceil(random(0, COLS));
  fruitY = ceil(random(0, ROWS));
  if (grid[fruitY][fruitX] !== 9) {
    grid[fruitY][fruitX] = 1;
  }
  else {
    spawnFruit();
  }
}

function keyPressed() {
  if (key === "d") {
    movePlayer(playerX+1, playerY, playerX, playerY);
    direction = "right";
  }
  if (key === "a") {
    movePlayer(playerX-1, playerY, playerX, playerY);
    direction = "left";
  }
  if (key === "s") {
    movePlayer(playerX, playerY+1, playerX, playerY);
    direction = "down";
  }
  if (key === "w") {
    movePlayer(playerX, playerY-1, playerX, playerY);
    direction = "up";
  }
}

function movePlayer(x, y, oldX, oldY) {
  if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
    if (grid[y][x] === 1) {
      spawnFruit();
    }
    grid[y][x] = 9; //new player location
    // grid[oldY][oldX] = 0; //remove player from old spot
    turn++;
  }
}

function displayGrid() {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("black");
      }
      else if (grid[y][x] === 1) {
        fill("red");
      }
      else if (grid[y][x] === 9) {
        fill("white");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}