// 2D Array Demo
// Basic Grid

let state = 'not moving';

let grid = [[0, 1, 0], [0, 1, 0], [0, 1, 0]];

let rows;
let cols;
let cellWidth;
let cellHeight;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // grid = createEmptyGrid(cols, rows);

  //replace Hardcorded grid with empty grid

  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width / 2 / cols;
  cellHeight = height / 2 / rows;
  
}


function draw() {
  background("white");
  displayGrid();

  if (frameCount % 20 === 0) {
    
    cellHeight += 2;
    cellWidth += 2;

  }
}


function mousePressed() {
  let mouseXx = mouseX - width / 4;
  let mouseYy = mouseY - height / 4;

  let x = Math.floor(mouseXx / cellWidth);
  let y = Math.floor(mouseYy / cellHeight);

    toggleCell(x, y);   //self
    toggleCell(x, y + 1);
    toggleCell(x + 1, y);
    toggleCell(x, y - 1);
    toggleCell(x - 1, y);
  state = 'moving';
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
      rect(x * cellWidth + width / 4, y * cellHeight + height / 4, cellWidth, cellHeight);
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


