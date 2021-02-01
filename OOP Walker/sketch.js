// OOP Walker

let amy;
let noah;


function setup() {
  createCanvas(windowWidth, windowHeight);
  amy = new Walker(width/2 - 10, height/2 - 10, "red");
  noah = new Walker(width/2 + 10, height/2 + 10, "white");
  background("black");
}

function draw() {
  amy.display();
  noah.display();

  amy.move();
  noah.move();
}

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 3, 3);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      this.x += this.speed;
    }
    else if (choice < 50) {
      this.y += this.speed;
    }
    else if (choice < 75) {
      this.x -= this.speed;
    }
    else{
      this.y -= this.speed;
    }
  }
}