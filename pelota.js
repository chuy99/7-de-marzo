class Ball {
  constructor() {
    this.x = random(25, 375);
    this.y = random(25, 375);
    this.tam = 50;
    this.velx = 3;
    this.vely = 5
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  mostrar() {
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, this.tam, this.tam);
  }
  moverx() {
    this.x = this.x + this.velx;
  }
  salirx() {
    var res;
    if (this.x < 25 || this.x > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
  botarx() {
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
    this.velx = this.velx * -1
  }

  movery() {
    this.y = this.y + this.vely;
  }
  saliry() {
    var res;
    if (this.y < 25 || this.y > 375) {
      res = true;
    } else {
      res = false;
    }
    return res;
  }
  botary() {
      this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255);
    this.vely = this.vely * -1
  }
}
