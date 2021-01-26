// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = createEmptyGrid(10, 10);

let rows, cols, cellWidth, cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width/cols;
  cellHeight = height/rows;
}

function draw() {
  background(220);
  displayGrid();

}

function createEmptyGrid(cols, rows) {
  let empty = [];
  for (let y = 0; y < cols; y++) {
    empty.push([]);
    for (let x = 0; x < rows; x++) { 
      empty(y).push(0); 
    }
  }
  return empty;
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  toggleCell(x, y);
  toggleCell(x - 1, y);
  toggleCell(x, y - 1);
  toggleCell(x, y + 1);
  toggleCell(x + 1, y);
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

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill("blue");
      }
      if (grid[y][x] === 1) {
        fill("red");
      }
      rect(x * cellWidth, y * cellHeight,cellWidth, cellHeight);
    }
  }
}