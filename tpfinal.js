let app

function setup() {
  createCanvas(600, 600)
  app = new App()
}
function draw() {
  app.dibujar()
}
function mouseClicked(){
  app.mouseClicked()
}

function keyPressed() {
  app.keyPressed()
}

class App{
  constructor() {
   this.juego = new Juego(5)
   this.img = []
    for(let i = 0; i < 12; i++){
      this.img[i] = loadImage('assets/img'+i+'.jpg')}  
    this.cantidadDeEstados = 15
    this.estado = 0 
    this.textoAventura = new Texto()
    
    this.botonInicio = new Botones(width/2.5, height/2.5, width/6, height/12, 2, "Iniciar", 20)
    this.botonCreditos = new Botones(width/2.5, height/1.2, width/6, height/12, 1, "Creditos", 20)
     
    this.botonSiguiente = new Botones(width/1.3, height/1.1, width/6, height/12, "siguiente", "siguiente", 20)

    this.botonVolver = new Botones(width/10, height/1.1, width/6, height/12, "volver", "volver", 20) 

   this.botonBifurcacion0 = new Botones(width/1.3, height/1.2, width/6, height/12, 5, "Seguir \ncantando", 15)
    this.botonBifurcacion = new Botones(width/1.3, height/2, width/6, height/12, 8, "Copiar a la \nhormiga", 15)
    this.botonBifurcacion2 = new Botones(width/1.3, height/5.5, width/6, height/12, 11,  "Ayudar a la \nhormiga", 15)
    
    
    this.botonAlMenu = new Botones(width/2.5, height/1.1, width/6, height/12, 0, "Volver \nal menú", 15)
    
    this.botonBifur = new Botones(width/2.5, height/1.1, width/6, height/12, 4, "Volver \na elegir", 15)

  }

  dibujar(){     
    if(this.estado == 0){
      image(this.img[0], 0, 0)
      this.botonInicio.dibujar()
      this.botonCreditos.dibujar()

    }
    if(this.estado == 1){
      image(this.img[0], 0, 0)
      this.botonAlMenu.dibujar()
      
    }
    if(this.estado == 2){
      image(this.img[1], 0, 0)
      this.botonAlMenu.dibujar()
      this.botonSiguiente.dibujar()
      
    }
    if(this.estado == 3){
      image(this.img[1], 0, 0)
      this.botonVolver.dibujar()
      this.botonSiguiente.dibujar()
    }
    if(this.estado == 4){
      image(this.img[1], 0, 0)
      this.botonVolver.dibujar()
      this.botonBifurcacion0.dibujar()
      this.botonBifurcacion.dibujar()
      this.botonBifurcacion2.dibujar()
    }
//final original    
    if(this.estado == 5){
      image(this.img[2], 0, 0)
      this.botonVolver.dibujar()
      this.botonSiguiente.dibujar()
    }

     if(this.estado == 6){
       image(this.img[3], 0, 0)  
       this.botonVolver.dibujar()
       this.botonSiguiente.dibujar()
    }
     if(this.estado == 7){
       image(this.img[3], 0, 0)  
       this.botonVolver.dibujar()
       this.botonAlMenu.dibujar()
     }
//final solitario
     if(this.estado == 8){
       image(this.img[4], 0, 0)  
       this.botonSiguiente.dibujar()
    }
    if(this.estado == 9){
      this.botonVolver.dibujar()
      this.juego.dibujar()

    }    
     if(this.estado == 10){
       image(this.img[6], 0, 0)  
       this.botonVolver.dibujar()
       this.botonAlMenu.dibujar()
    }
//final feliz 1
     if(this.estado == 11){
       image(this.img[7], 0, 0)  
       this.botonSiguiente.dibujar()
    }
     if(this.estado == 12){
       this.juego.dibujar()
    }
     if(this.estado == 13){
       image(this.img[8], 0, 0)  
       this.botonVolver.dibujar()
       this.botonSiguiente.dibujar()
    }
     if(this.estado == 14){
       image(this.img[8], 0, 0)  
       this.botonVolver.dibujar()
      this.botonAlMenu.dibujar()
    }
    //pantalla PERDISTE
     if(this.estado == 15){       
       image(this.img[2], 0, 0)
       this.botonBifur.dibujar()
     }

     this.textoAventura.dibujar()
  } 
  
  
  
  mouseClicked(){
    if(this.estado == 0){
    this.botonInicio.mouseClicked()
    this.botonCreditos.mouseClicked()
    }
    
      this.botonVolver.mouseClicked()    

      this.botonSiguiente.mouseClicked()
    
    if(this.estado == 4){
      this.botonBifurcacion0.mouseClicked()
      this.botonBifurcacion.mouseClicked()
      this.botonBifurcacion2.mouseClicked()
    }
    
    if(this.estado == 1 || this.estado == 2 || this.estado == 7 || this.estado == 10 || this.estado == 14){
      this.botonAlMenu.mouseClicked()
    }
    
    if(this.estado == 15){
      this.botonBifur.mouseClicked()
    }
  }
  
    cambiarEstado(param) {
    console.log(this.estado)
    console.log(param)
      
      if (param == "siguiente" && this.estado < this.cantidadDeEstados && this.estado != 1 && this.estado != 4 && this.estado != 7 && this.estado != 9 && this.estado != 10 && this.estado != 12 && this.estado != 14){
      this.estado++
    } 
      if (param == "volver" && this.estado > 0 && this.estado != 1 && this.estado != 2 && this.estado != 8 && this.estado != 9 && this.estado != 11 && this.estado != 12 && this.estado != 15) {
      this.estado --
    } else if (param != "volver" && param != "siguiente") {
      this.estado=param
    }
  }
  
  keyPressed(){
    this.juego.teclaPresionada(keyCode)
  }
}
