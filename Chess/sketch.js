// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pieces = [];

let rows = 8;
let cols = 8;
let grid, cellWidth, cellHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmptyGrid(cols, rows);
  cellWidth = width / cols;
  cellHeight = height / rows;
  //add pawn to grid
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (y === 1 || y === 6) {
        let pawns = new Piece(x, y, "pawn");
        pieces.push(pawns);
      }
    }
  }
}

class Piece {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  display() {
    noStroke();
    if (this.type === "pawn") {
      grid[this.y][this.x] = 9;
    }
  }
}

function draw() {
  for (let i=0; i<pieces.length; i++) {
    pieces[i].display();
  }
  displayGrid();
}

function displayGrid() {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
        // image(grassImage, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        fill("black");
        // image(wallImage, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        fill("red");
        // image(pawnImage, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyGrid(cols, rows) {
  let empty = [];
  let turn = 1;
  for (let y=0; y<rows; y++) {
    empty.push([]);
    turn++;
    for (let x=0; x<cols; x++) {
      turn++;
      if (turn % 2 === 0) {
        empty[y].push(1);
      }
      else {
        empty[y].push(0);
      }
    }
  }
  return empty;
}