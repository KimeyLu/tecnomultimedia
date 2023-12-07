class Enemigo{
  constructor(posX, posY, posX2, posY2,ancho,alto) {
    this.posX= posX
    this.posY= posY   
    this.posX2= posX2
    this.posY2= posY2
    this.ancho= ancho 
    this.alto= alto  
  }
  
  dibujar() {
    push()
      fill(150, 150, 0)
      //enemigos arriba
      image(juego.img[5],this.posX, this.posY, this.ancho, this.alto)
      
      //enemigos abajo
      image(juego.img[5],this.posX2, this.posY2, this.ancho, this.alto)
    pop()
    
    this.calcular()   
  }
  
  calcular(){
    //velocidad
    this.posX += 4
    this.posX2 += 2
    
    //regresar
    if (this.posX > width ) {
      this.posX = 0
    } else if ( this.posX2 > width) {
      this.posX2 = 0
    }
    
    //colision
    if(juego.personaje.posX + juego.personaje.ancho/2 > this.posX && juego.personaje.posX < this.posX + this.ancho && juego.personaje.posY + juego.personaje.alto/2 > this.posY && juego.personaje.posY < this.posY + this.alto) {
      push()
      fill(255, 0, 0)
      textSize(width/30)
      text("ay!", width/2,height/2)
      pop()
      
      juego.personaje.vida --
      juego.personaje.posY = height/2
    } 
    
    //colision 2
  if(juego.personaje.posX + juego.personaje.ancho/2 > this.posX2 && juego.personaje.posX < this.posX2 + this.ancho && juego.personaje.posY + juego.personaje.alto/2 > this.posY2 && juego.personaje.posY < this.posY2 + this.alto) {
      push()
      fill(255, 0, 0)
      textSize(width/30)
      text("ay!", width/2,height/2)
      pop()
      
      juego.personaje.vida --
      juego.personaje.posY = height/2
    }
  } 
}
