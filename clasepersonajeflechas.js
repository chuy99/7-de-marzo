class Pacman{
constructor(){
  this.x=width/2;
  this.y=height/2;
}
  
  mostrar(){
      imageMode(CENTER);
image(img,this.x,this.y,100,100);
  }
  
  derecha(){
  this.x++;
  }
  
  izquierda(){
  this.x--;
  }
  
  arriba(){
  this.y--;
  }
  
  abajo(){
  this.y++;
  }
}
