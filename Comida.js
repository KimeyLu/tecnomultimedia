class Comida{
  constructor(posX, posY, ancho, alto) {
    this.posX= posX
    this.posY=  posY
    this.ancho= ancho
    this.alto= alto
  }
  
  dibujar(){  
    image(app.juego.img[6], this.posX, this.posY, this.ancho, this.alto)
   }  
}
