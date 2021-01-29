// 2D Array Demo
// Basic Grid

let state = 'not moving';

let grid = [[0,0,0],[0,0,0],[0,0,0]];

let gridWinBlack = [[1,1,1],[1,1,1],[1,1,1]];

let rows;
let cols;
let cellWidth;
let cellHeight;

let rectX;
let rectY;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // grid = createEmptyGrid(cols, rows);

  //replace Hardcorded grid with empty grid

  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width / 2 / cols;
  cellHeight = height / 2 / rows;
  
  rectX = width / 4; 
  rectY = height / 4;

}


function draw() {
  background("white");

  if (state === "moving") {
    moveGrid();
  }
  else if (state === "not moving") {
    displayGrid();
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

}

function moveGrid() {
fill("black");
rect(rectX, rectY, cellWidth * 3, cellHeight * 3);

if (frameCount % 1 === 0) {
  rectX += 6;
}

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

      if (JSON.stringify(grid) === JSON.stringify(gridWinBlack)) {
        state = "moving";
      }
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


