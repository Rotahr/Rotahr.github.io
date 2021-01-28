// 2D Array Demo
// Basic Grid

const GRIDSIZE = 40;
let grid;

let rows;
let cols;
let cellWidth;
let cellHeight;
let autoturn = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmptyGrid(GRIDSIZE, GRIDSIZE);

  //replace Hardcorded grid with empty grid

  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width / cols;
  cellHeight = height / rows;

}

function draw() {
  background("white");
  displayGrid();
  autoTurnIfRequired();
}

function autoTurnIfRequired() {
  if (autoturn && frameCount % 20 === 0) {
    updateBoard();
  }
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);



    toggleCell(x, y);   //self
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else {
        fill("black");
      }
      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
}

function toggleCell(x, y) {
  //check that the coordinates are in the array
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
  }
}

function createEmptyGrid(cols, rows) {
  let emptyGrid = [];
  for (let y = 0; y<rows; y++) {
    emptyGrid.push([]);
    for (let x=0; x<cols; x++) {
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}

function keyPressed() {
  if (key === " ") {
    updateBoard();
  }
  else if (key === "c") {
    setup();
  }
  else if (key === "r") {
    grid = createRandomGrid(cols, rows);
  }
  else if (key === "a") {
    autoturn = !autoturn;
  }
}

function updateBoard() {
  let nextTurn = createEmptyGrid(cols, rows);

  //loop through current grid
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      let neighbours = 0;

      //look at cells in a 3x3 grid around current cell
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          //avoid falling off edge of array
          if (x+i >= 0 && x+i < cols && y+j >=0 && y+j < rows) {
            neighbours += grid[y+j][x+i];
          }
        }
      }

      //remove self from neighbour count
      neighbours -= grid[y][x];

      //apply rules
      if (grid[y][x] === 0) { //currently dead
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

      if (grid[y][x] === 1) { //currently alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }

  grid = nextTurn;
}

function createRandomGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        empty[y].push(0);
      }
      else {
        empty[y].push(1);
      }
    }
  }
  return empty;
} 