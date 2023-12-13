class Botones{
  constructor(posX, posY, ancho, alto, direccion, texto, textoTam){
    this.posX = posX
    this.posY = posY
    this.ancho = ancho
    this.alto =  alto
    this.direccion = direccion
    this.tono = 50
    this.texto = texto
    this.textoTam = textoTam
  }
  
  dibujar(){
    push()
   // fill(0, 0, 0)
    fill(255, 255, 255, this.tono)
    rect(this.posX, this.posY, this.ancho, this.alto)
    fill(0)
    textSize(this.textoTam)
    text(this.texto, this.posX+13, this.posY+25)
    pop()
    
    if (mouseX > this.posX && mouseX < this.posX + this.ancho && mouseY > this.posY && mouseY < this.posY + this.alto){
      this.tono = 255
    } else {
      this.tono = 50
    }
  }
  
  mouseClicked(){
    if(mouseX > this.posX && mouseX < this.posX + this.ancho && mouseY > this.posY && mouseY < this.posY + this.alto) {
      
      app.cambiarEstado(this.direccion)
    }
  }
}
