// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // window.setInterval(spawnBubble, 77); //runs function every half second
}

function draw() {
  background("black");
  if (frameCount % 20 === 0) {
    spawnBubble();
  }
  for (let i = theBubbles.length -1; i >= 0; i--) {
    if (theBubbles[i].isPopped) {
      theBubbles.splice(i, 1);
    }
    else {
      theBubbles[i].display();
      theBubbles[i].move();
    }

  }
}

function spawnBubble() {
    let someBubble = new Bubble();
    theBubbles.push(someBubble);
}

class Bubble {
  constructor() {
    this.x = random(width);
    this.y = height + random(50, 100);
    this.dx = 0;
    this.dy = -2;
    this.radius = random(17, 37);
    this.theta = 0;
    this.isAlive = true;
    this.whenIDied = 0;
    this.countdown = 1000;
    this.isPopped = false;
  }

  display() {

      noStroke();
      fill("white");
      ellipse(this.x, this.y, this.radius*2, this.radius*2);

  }

  move() {
    if (this.y - this.radius > 0) {
      this.x += this.dx;
      this.y += this.dy;
  
      this.dx = map(noise(this.theta), 0, 1, -5, 5);
      this.theta += 0.02;
    }
    //when it hits the top
    else if (this.isAlive) {
      this.isAlive = false;
      this.whenIDied = millis();
    }
    //stuck on the top
    else {
      if (millis() > this. whenIDied + this.countdown) {
        this.isPopped = true;
      }
    }
  }
}