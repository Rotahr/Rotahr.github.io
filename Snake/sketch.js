// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 5;
const COLS = 5;
let grid, cellWidth, cellHeight;
let playerX = 0;
let playerY = 0;
let playerImage, wallImage, grassImage;
let snakeSize = 1;
let fruitX = 0;
let fruitY = 0;
let check;
let turn = 1;
let timer = 0;
let waitTime = 1000;
let increase = waitTime;
let direction = 2;
let directions = [1, 2, 3, 4];

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width / COLS;
  cellHeight = height / ROWS;
  //add player to grid
  grid[playerY][playerX] = 1;
  spawnFruit();
}

function draw() {
  background(220);
  displayGrid();
  fill("cyan");
  textSize(height/10);
  text(turn, 0, height/13);
  text(snakeSize, 0, height/5);
  if (timer > waitTime) {
    movePlayer();
    waitTime = millis() + increase;
  }
  timer = millis();

}

function spawnFruit() {
  fruitX = floor(random(0, COLS));
  fruitY = floor(random(0, ROWS));
  if (grid[fruitY][fruitX] === 0) {
    grid[fruitY][fruitX] = -1;
    check = 0;
  }
  else {
    spawnFruit();
  }
}

function keyPressed() {
  if (key === "d") {
    direction = 2;
    timer = waitTime+1;
  }
  if (key === "a") {
    direction = 4;
    timer = waitTime+1;
  }
  if (key === "s") {
    direction = 3;
    timer = waitTime+1;
  }
  if (key === "w") {
    direction = 1;
    timer = waitTime+1;
  }
}

function movePlayer() {
  let x = playerX;
  let y = playerY;
  if (direction === 2) {
    x++;
  }
  if (direction === 1) {
    y--;
  }
  if (direction === 3) {
    y++;
  }
  if (direction === 4) {
    x--;
  }
  if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
    if (grid[y][x] === -1 || grid[y][x] === 0) {
      if (grid[y][x] === -1) {
        spawnFruit();
        snakeSize++;
        check = 0;
        for (let y=0; y<ROWS; y++) {
          for (let x=0; x<COLS; x++) {
            if (grid[y][x] === -1) {
              check++;
            }
          }
        }
      }
      turn++;
      grid[y][x] = turn;
      playerY = y;
      playerX = x;
      if (check === 1) {
        spawnFruit();
      }
      for (let y=0; y<ROWS; y++) {
        for (let x=0; x<COLS; x++) {
          if (grid[y][x] === turn - snakeSize) {
            grid[y][x] = 0;
          }
        }
      }
    }
  }
}

function displayGrid() {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("black");
      }
      else if (grid[y][x] === -1) {
        fill("red");
      }
      else if (grid[y][x] >= 1) {
        fill("white");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      fill("black");
      text(grid[y][x] - turn + snakeSize, x*cellWidth, y*cellWidth);
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