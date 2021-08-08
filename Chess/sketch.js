// Chess + Engine
// Samein Dorazahi
// 26/07/21

let pieces = [];

let rows = 8;
let cols = 8;
let grid, cellWidth, cellHeight, backGrid, pnum, pnumr, my, mx, myr, mxr;


function setup() {
  createCanvas(windowWidth, windowHeight);

  backGrid = createEmptyGrid(cols, rows);
  grid = createEmptyGrid(cols, rows);
  cellWidth = width / cols;
  cellHeight = height / rows;
  //add pawn to grid
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (y === 6) {
        let pawns = new Piece(x, y, "pawn", "white", "blue");
        pieces.push(pawns);
      }
      else if (y === 1) {
        let pawns = new Piece(x, y, "pawn", "black", "red");
        pieces.push(pawns);
      }
      else {
        pieces.push(0);
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

  move() {
    pieces[pnumr] = pieces[pnum];
    this.x = mxr;
    this.y = myr;
    if (pnumr !== pnum) {
      pieces[pnum] = 0;
      grid[my][mx] = 0;
    }
  }
}

function draw() {
  displayBackGrid();
  displayGrid();
  strokeWeight(13);
  noFill();
  rect(mx * cellWidth, my * cellHeight, cellWidth, cellHeight);
  strokeWeight(1);
  for (let i=0; i<pieces.length; i++) {
    if (pieces[i] !== 0) {
      pieces[i].display();
    }
  }
}

function mouseReleased() {
  mxr = Math.floor(mouseX / cellWidth);
  myr = Math.floor(mouseY / cellHeight);
  pnumr = myr*8 + mxr;
  console.log(myr, mxr, grid[myr][mxr], "pr", pnumr);
  pieces[pnum].move();
}

function mousePressed() {
  mx = Math.floor(mouseX / cellWidth);
  my = Math.floor(mouseY / cellHeight);
  pnum = my*8 + mx;
  console.log(my, mx, grid[my][mx], "p", pnum);
}

function displayGrid() {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 9) {
        fill("red");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 8) {
        fill("blue");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 37) {
        fill("gray");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function displayBackGrid() {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (backGrid[y][x] === 0) {
        fill("white");
        // image(grassImage, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
      else if (backGrid[y][x] === 1) {
        fill("black");
        // image(wallImage, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
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
