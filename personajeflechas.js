var img;
var p;
function preload(){
img=loadImage('pacman.png');
}
function setup() {
  p=new Pacman();
  createCanvas(400, 400);
}

function draw() {
  background(220);
p.mostrar();
  if(keyIsPressed && keyCode == RIGHT_ARROW){
     p.derecha();
  }
    if(keyIsPressed && keyCode == LEFT_ARROW){
     p.izquierda();
    }
      if(keyIsPressed && keyCode == UP_ARROW){
     p.arriba();
      }
        if(keyIsPressed && keyCode == DOWN_ARROW){
     p.abajo();
     }
}
