let app
let juego

function setup() {
  createCanvas(windowWidth, windowHeight)
  app = new App()
  juego = new Juego()
}
function draw() {
  app.dibujar()
}
function mouseClicked(){
  app.mouseClicked()
}

function keyPressed() {
  juego.teclaPresionada(keyCode)
}

class App{
  constructor() {
   this.img = []
    for(let i = 0; i < 12; i++){
      this.img[i] = loadImage('assets/img'+i+'.jpg')}  
    this.cantidadDeEstados = 6
    this.estado = 0 
    
    this.botones = new Botones(200, 200, 200, 200, "siguiente")
    this.botones2 = new Botones(300, height-100, 100, 100, "volver")
    

  }
  
  dibujar(){   
    if(this.estado == 0){
      image(this.img[0], 0, 0)
      this.botones.dibujar()
    }
    if(this.estado == 1){
      image(this.img[1], 0, 0)
            this.botones.dibujar()
    }
    if(this.estado == 2){
      image(this.img[2], 0, 0)
            this.botones.dibujar()
    }
    if(this.estado == 3){
      image(this.img[3], 0, 0)
            this.botones.dibujar()
    }
    if(this.estado == 4){
      image(this.img[4], 0, 0)
                  this.botones2.dibujar()
                  this.botones.dibujar()

    }
        if(this.estado == 5){
      image(this.img[5], 0, 0)
            this.botones2.dibujar()
          juego.dibujar()
    }
        if(this.estado == 6){
              image(this.img[6], 0, 0)  
            this.botones2.dibujar()
    }
  } 
  
  mouseClicked(){
    if(this.estado >= 4){
      this.botones2.mouseClicked()
    }
    if(this.estado < 5){
      //(se puede limitar)
      this.botones.mouseClicked()
    }
      //this.botones2.mouseClicked()
  
  }
  
    cambiarEstado(param) {
    console.log(this.estado)
      console.log(param)

      if (param == "siguiente" && this.estado < this.cantidadDeEstados){
      this.estado++
    } 
      if (param == "volver" && this.estado > 0) {
      this.estado --
    } /*else if (param != "volver" && param != "siguiente") {
      this.estado=param
    }*/
  }
}

class Botones{
  constructor(posX, posY, ancho, alto, direccion){
    this.posX = posX
    this.posY = posY
    this.ancho = ancho
    this.alto =  alto
    this.direccion = direccion
  }
  
  dibujar(){
    rect(this.posX, this.posY, this.ancho, this.alto)
  }
  
  mouseClicked(){
    if(mouseX > this.posX && mouseX < this.posX + this.ancho && mouseY > this.posY && mouseY < this.posY + this.alto) {
      
      app.cambiarEstado(this.direccion)
    }
  }
}
