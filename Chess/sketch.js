// Chess + Engine
// Samein Dorazahi
// 26/07/21

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
      if (y === 6) {
        let pawns = new Piece(x, y, "pawn", "white");
        pieces.push(pawns);
      }
      if (y === 1) {
        let pawns = new Piece(x, y, "pawn", "black");
        pieces.push(pawns);
      }
    }
  }
}

class Piece {
  constructor(x, y, type, side) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.side = side;
  }

  display() {
    if (this.type === "pawn" && this.side === "black") {
      grid[this.y][this.x] = 9;
    }
    else if (this.type === "pawn" && this.side === "white") {
      grid[this.y][this.x] = 8;
    }
  }

  Move() {
    let x = Math.floor(mouseX / cellWidth);
    let y = Math.floor(mouseY / cellHeight);

    if (grid[y][x] === 9) { 
      if (grid[y+1][x] === 1) {
        grid[y][x] = 0;
      }  
      else if (grid[y+1][x] === 0) {
        grid[y][x] = 1;
      }        
    }
  }
}

function mousePressed() {
  
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
      }
      else if (grid[y][x] === 8) {
        fill("blue");
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