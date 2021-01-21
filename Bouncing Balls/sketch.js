// Bouncing Balls
// Samein Dorazahi
// 21-01-19
//
// Array Demo


let BouncingBalls = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  moveBall();

  displayBall();
}

function mousePressed() {

  let ball = {

    x: mouseX,
    y: mouseY,
    diameter: random([7], [77]),
    dx: random([-5], [5]),
    dy: random([-5], [5]),
    theColor: color(random(255), random(255), random(255), random(255))
  
  };

  BouncingBalls.push(ball);

}

function moveBall() {

  for (let ball of BouncingBalls) {
    
    ball.x += ball.dx;
  
    ball.y += ball.dy;
  
    // check for bounce
    if (ball.x + ball.diameter/2 >= width
      || ball.x - ball.diameter/2 <= 0) {
  
      ball.dx *= -1;
  
    }
    if (ball.y + ball.diameter/2 >= height
       || ball.y - ball.diameter/2 <= 0) {
  
      ball.dy *= -1;
  
    }

  }


}

function displayBall() {

  for (let i=0; i < BouncingBalls.length; i++) {
    noStroke();
    fill(BouncingBalls[i].theColor);
    ellipse(BouncingBalls[i].x, BouncingBalls[i].y, BouncingBalls[i].diameter, BouncingBalls[i].diameter);
  
  }

}
