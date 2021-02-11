// Grid-Based Game Assignment
// Samein Dorazahi
// 09/02/21
//
// Extra for Experts:
// Infinitely generated grids giving you a challenge the more you go along. It was difficult to show the moving grids as well as doing the same
// for when they expanded to new sizes. I also included a hardcoded grid which is easily played by uncommenting code for if you want to give the user
// larger, more difficult puzzles. You can click on the grid (which required a bit of math) and the outside surrounding it to sovle the puzzles.
// clicking on the outside made bug testing a lot easier, as well as making the puzzles generally easier. I technically used a 3d grid so above and beyond
// y'know. This was late because I wasn't personally satified with what I had made, although it was done. So I decided to improve on it as much as possible
// before fully handing it in, so I could be proud of what I'm giving in (and this fits that bill).

let state = "not moving";
// used for both hardcoded and generated grids to count which grid you are currently on
let gridNumber = 0;
// hardcoded grids, must uncomment specific code for it to work
let holdingGrid = [[[0,1,0],[0,0,0],[0,1,0]], [[0,0,1],[1,0,0],[0,0,1]], [[0,1,1],[1,0,0],[0,1,1]]]; 
let grid = [];
let gridToWin = [];
let rows, cols, cellWidth, cellHeight, rectX, rectY, rectXC, rectYC;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = floor(gridNumber/3) + 3;
  cols = floor(gridNumber/3) + 3;
  grid = createRandomGrid(rows, cols);
  // uncomment and comment the ones below and above respectively to experience hard coded grid, only generates up to how many you put in though
  // grid = holdingGrid[gridNumber];
  gridToWin = createWinningGrid(rows, cols);
  cellWidth = width / 2 / cols;
  cellHeight = height / 2 / rows;
  rectX = width / 4; 
  rectY = height / 4;
}

function draw() {
  background("white");
  // score and level text
  fill("black");
  textSize(37);
  text("Score: " + gridNumber, windowWidth / (windowWidth/30), windowHeight / (windowHeight/50));
  text("Level: " + (rows - 2), windowWidth / (windowWidth/30), windowHeight / (windowHeight/100));
  // reads state of grid
  if (state === "moving") {
    moveGrid();
  }
  else if (state === "not moving") {
    displayGrid();
  }
}

function mousePressed() {
  // determine if the mouse is in the middle 
  let mouseXx = mouseX - width / 4;
  let mouseYy = mouseY - height / 4;
  let x = Math.floor(mouseXx / cellWidth);
  let y = Math.floor(mouseYy / cellHeight);
  toggleCell(x, y);   //self
  toggleCell(x, y + 1);
  toggleCell(x + 1, y);
  toggleCell(x, y - 1);
  toggleCell(x - 1, y);
  // variables that must be activated only once
  if (state === "not moving") {
    rectXC = rectX;
    rectYC = rectY;
    gridToWin = createWinningGrid(rows, cols);
  }
}

function moveGrid() {
  // creation and movement of grid looking rectangles
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
        rect(rectX + x * cellWidth + width, rectY + y * cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        fill("black");
        rect(rectX + x * cellWidth + width, rectY + y * cellHeight, cellWidth, cellHeight);
      }
      fill("black");
      rect(rectX + x * cellWidth, rectY + y * cellHeight, cellWidth, cellHeight);
    }
  }
  // moves grid
  if (frameCount % 1 === 0) {
    rectX -= 6;
  }
  //checks if grid is now in position
  if (rectX < rectXC - width) {
    rectX = rectXC;
    rectY = rectYC;
    state = "not moving";
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
      // checks to grid is all black (if you won) & sets variables to match potential new size of grid
      if (JSON.stringify(grid) === JSON.stringify(gridToWin)) {
        state = "moving";
        gridNumber += 1;
        rows = floor(gridNumber/3) + 3;
        cols = floor(gridNumber/3) + 3;
        cellWidth = width / 2 / cols;
        cellHeight = height / 2 / rows;
        gridToWin = createWinningGrid(rows, cols);
        grid = createRandomGrid(rows, cols);
        // uncomment and comment the ones below and above respectively to experience hard coded grid, only generates up to how many you put in though
        // grid = holdingGrid[gridNumber];
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

// generates new grids upon winning
function createRandomGrid(cols, rows) {
  let emptyGrid = [];
  for (let y = 0; y<rows; y++) {
    emptyGrid.push([]);
    for (let x=0; x<cols; x++) {
      emptyGrid[y].push(round(random(0, 1)));
    }
  }
  return emptyGrid;
}

// generates the grid you must make
function createWinningGrid(cols, rows) {
  let emptyGrid = [];
  for (let y = 0; y<rows; y++) {
    emptyGrid.push([]);
    for (let x=0; x<cols; x++) {
      emptyGrid[y].push(1);
    }
  }
  return emptyGrid;
}