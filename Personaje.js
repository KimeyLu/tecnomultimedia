class Personaje{
  constructor() {
    this.posX= width/2
    this.posY= height/2
    this.ancho= width/28
    this.alto= height/12
    this.vida= 5
    this.vel= 30    
    this.agarroComida = false 
    this.recolectadas = 0
    
  }
  
  dibujar() {
    //limites
    if(this.posX >= width) {
      this.posX = this.posX - width/40
    } else if(this.posX <= 0) {
      this.posX = this.posX + width/40
    } else if(this.posY <= 0) {
      this.posY = this.posY + height/40
    } else if(this.posY >= height) {
      this.posY = this.posY - height/40
    }
    
    //agarrar comida 
    if(this.posY >= height-50 && this.agarroComida == false) {
      this.agarroComida = true
      juego.cantidadDeComida --
      this.posY = height-100    
    } 
    
    
    //dibujar personaje
      image(juego.img[4],this.posX,this.posY, this.ancho, this.alto)         

    
    // Dibujar VIDAS 
    push()
    fill(250,0,0)
    textSize(30)
    text("Vidas: "+this.vida, width/1.2, height/12)
    pop()

    //recolecto comidas en la meta
    if( this.posY < 50 && this.agarroComida == true){
        this.recolectadas ++
        this.agarroComida = false
      }
      
    for(let i = 0; i < this.recolectadas; i++) {                                                   
      image(juego.img[6], i*100+width/2, height/11, width/70, height/40)

    } 
    
    //llevar la comida
    if(this.agarroComida == true) {
      image(juego.img[6], this.posX+10, this.posY+25, 20, 15)
    }
    
    //ganar
    if(this.recolectadas == 3){
      juego.estado = 2  
    }
    //perder
    if(this.vida == 0){
      juego.estado = 3
    }
  }
  
  teclaPresionada(keyCode){
    if(keyCode == UP_ARROW) {
    this.posY -= this.vel
    juego.img[4] = juego.img[0]
    } else if(keyCode == LEFT_ARROW) {
    this.posX -= this.vel
    juego.img[4] = juego.img[2]
    } else if(keyCode == RIGHT_ARROW) {
    this.posX += this.vel
    juego.img[4] = juego.img[1]
    } else if(keyCode == DOWN_ARROW) {
    this.posY += this.vel
    juego.img[4] = juego.img[3]
    }
  }
}
