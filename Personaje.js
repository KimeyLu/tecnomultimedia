class Personaje{
  constructor() {
    this.posX= width/2
    this.posY= height/2
    this.ancho= width/15
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
      app.juego.cantidadDeComida --
      this.posY = height-100    
    } 
      
    //dibujar personaje
    //cigarra/hormiga (cuando juega en equipo)
    if(app.estado == 12 && this.vida < 3){
      app.juego.cigimg[4] = app.juego.img[4] 
      image(app.juego.cigimg[5], 100, height-60, this.ancho, this.alto)

    } 
    //cigarra (cuando juega en solitario)
    image(app.juego.cigimg[4],this.posX,this.posY, this.ancho, this.alto) 
    
    // Dibujar VIDAS 
    push()
    fill(250,0,0)
    textSize(height/30)
    text("Vidas: "+this.vida, width/1.2, height-30)
    pop()

    //recolecto comidas en la meta
    if( this.posY < 50 && this.agarroComida == true){
        this.recolectadas ++
        this.agarroComida = false
      }
      
    for(let i = 0; i < this.recolectadas; i++) {                                                   
      image(app.juego.img[6], i*100+width/2, height/11, width/30, height/40)

    } 
    
    //llevar la comida
    if(this.agarroComida == true) {
      image(app.juego.img[6], this.posX+10, this.posY+25, 20, 15)
    }
    
    //ganar
    //app.juego.estado = 2 
    if(this.recolectadas == 3){
      app.estado ++  
      app.juego.reinicio()
         
    }

    //perder
    if(this.vida == 0){      
      app.estado = 15
      app.juego.reinicio()
    }
  }
  
  teclaPresionada(keyCode){  
      if(keyCode == UP_ARROW) {
        this.posY -= this.vel
        app.juego.cigimg[4] = app.juego.cigimg[0]
      } else if(keyCode == LEFT_ARROW) {
        this.posX -= this.vel
        app.juego.cigimg[4] = app.juego.cigimg[2]
      } else if(keyCode == RIGHT_ARROW) {
        this.posX += this.vel
        app.juego.cigimg[4] = app.juego.cigimg[1]
      } else if(keyCode == DOWN_ARROW) {
        this.posY += this.vel
        app.juego.cigimg[4] = app.juego.cigimg[3]
    }
    
    if(app.estado == 12 && this.vida < 3 ){
      if(keyCode == UP_ARROW) {
        app.juego.img[4] = app.juego.img[0]
      } else if(keyCode == LEFT_ARROW) {
        app.juego.img[4] = app.juego.img[2]
      } else if(keyCode == RIGHT_ARROW) {
        app.juego.img[4] = app.juego.img[1]
      } else if(keyCode == DOWN_ARROW) {
        app.juego.img[4] = app.juego.img[3]
        }
    }
  }
}
