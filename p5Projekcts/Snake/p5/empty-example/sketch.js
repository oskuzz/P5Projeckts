var s;
var scl = 20;
var food;
var lifeP;
var Dir = 0;

function setup() {
  createCanvas(600,600);
  s = new Snake();
  pickLocation();
  lifeP = createP();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

}

function draw() {
  background(51);
  frameRate(vel);
  s.death();
  s.update();
  s.show();

  if (s.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 0);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    if (Dir !== 1) {
      Dir = 2;
      s.dir(0, -1);
    }

  } else if (keyCode === DOWN_ARROW) {
    if (Dir !== 2) {
      Dir = 1;
      s.dir(0, 1);
    }

  } else if (keyCode === LEFT_ARROW) {
    if (Dir !== 3) {
      Dir = 4;
      s.dir(-1, 0);
    }

  } else if (keyCode === RIGHT_ARROW) {
    if (Dir !== 4) {
      Dir = 3;
      s.dir(1, 0);
    }
  }
}
