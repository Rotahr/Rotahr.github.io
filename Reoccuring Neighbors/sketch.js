// 2D Array Demo
// Basic Grid


let grid = [[true, true, true],
            [true, false, true],
            [true, true, true],
            [true, false, true]];

let rows;
let cols;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmptyGrid(10, 10);

  //replace Hardcorded grid with empty grid

  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width / cols;
  cellHeight = height / rows;

}

function draw() {
  background("white");

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === true) {
        fill("white");
      }
      else {
        fill("black");
      }

      rect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
    }
  }
  // grid[grid.length - 1] = true;
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

    grid[y][x] = !grid[y][x];
    // grid[y+1][x] = !grid[y+1][x];
    // grid[y][x+1] = !grid[y][x+1];
    // grid[y][x-1] = !grid[y][x-1];
    // grid[y-1][x] = !grid[y-1][x];
    

}

function createEmptyGrid(cols, rows) {
  let emptyGrid = [];
  for (let y = 0; y<rows; y++) {
    emptyGrid.push([]);
    for (let x=0; x<cols; x++) {
      emptyGrid[y].push(true);
    }
  }
  return emptyGrid;
}