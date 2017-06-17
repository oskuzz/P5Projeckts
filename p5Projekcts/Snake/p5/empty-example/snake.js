var vel = 10;

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];



  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(pos) {
    lifeP.html(this.total + 1);
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      vel += 0.2;
      if (vel == 30.2) {
        vel = 30;
      }
      return true;
    } else {
      return false;
    }
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log("Game over");
        this.total = 0;
        vel = 10;
        this.tail = [];
      }
    }
  }


  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;

    if (this.x >= width ) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }

    if (this.y >= height ) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = height;
    }

  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    fill(0, 255, 0);
    rect(this.x, this.y, scl, scl);
  }
}
