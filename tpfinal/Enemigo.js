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
      image(app.juego.img[5],this.posX, this.posY, this.ancho, this.alto)
      
      //enemigos abajo
      image(app.juego.img[5],this.posX2, this.posY2, this.ancho, this.alto)
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
    if(app.juego.personaje.posX + app.juego.personaje.ancho/2 > this.posX && app.juego.personaje.posX < this.posX + this.ancho && app.juego.personaje.posY + app.juego.personaje.alto/2 > this.posY && app.juego.personaje.posY < this.posY + this.alto) {
      push()
      fill(255, 0, 0)
      textSize(width/30)
      text("ay!", width/2,height/2)
      pop()
      
      app.juego.personaje.vida --
      app.juego.personaje.posY = height/2
    } 
    
    //colision 2
  if(app.juego.personaje.posX + app.juego.personaje.ancho/2 > this.posX2 && app.juego.personaje.posX < this.posX2 + this.ancho && app.juego.personaje.posY + app.juego.personaje.alto/2 > this.posY2 && app.juego.personaje.posY < this.posY2 + this.alto) {
      push()
      fill(255, 0, 0)
      textSize(width/30)
      text("ay!", width/2,height/2)
      pop()
      
      app.juego.personaje.vida --
      app.juego.personaje.posY = height/2
    }
  } 
}
