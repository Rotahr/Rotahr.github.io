// OOP Ball Bounce Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  for (let i=0; i < ballArray.length; i++) {
    //collision check
    for (let j = 0; j < ballArray.length; j++) {
      // stop hitting yourself
      if (i !== j) {
        ballArray[i].checkIfCollidingWith(ballArray[j]);
      }
    }
    ballArray[i].display();
    ballArray[i].move();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY, random(17, 37));
  ballArray.push(theBall);
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.someColor = color(random(255), random(255), random(255), random(255));
  }

  display() {
    noStroke();
    fill(this.someColor);
    ellipse(this.x, this.y, this.radius * 2, this.radius *2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    // bounce on walls
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.dx *= -1;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.dy *= -1;
    }
  }

  checkIfCollidingWith(otherBall) {
    let sumOfRadii = this.radius + otherBall.radius;
    let distanceBetweenCenters = dist(this.x, this.y, otherBall.x, otherBall.y);
    let storeX = this.dx;
    let storeY = this.dy;
    if (sumOfRadii > distanceBetweenCenters) {
      // this.someColor = "red";
      // otherBall.someColor = "red";

      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = storeX;
      otherBall.dy = storeY;

    }
  }
}