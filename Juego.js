class Juego{
  constructor(cantidadDeEnemigos) {
    this.cantidadDeEnemigos= cantidadDeEnemigos
    this.img = []
      for(let i = 0; i < 8; i++){
    this.img[i] = loadImage('assets/assetsJuego/img'+i+'.png')
      } 
    this.cigimg = []
      for(let i = 0; i < 7; i++){
    this.cigimg[i] = loadImage('assets/assetsJuego/cigarra'+i+'.png')
      }
    this.estado = 1
    this.contador = 45
    this.crearEnemigos()
    this.crearComida()
    this.personaje= new Personaje()   
    this.reinicio()
    this.r = random(100)
   
  }
  
  dibujar(){
    background(90, 235, 160)
    
    if(this.estado == 1){
      
            //imagen hormiguero 
      image(this.img[7], 0, 0, width, height/5)
      
      this.personaje.dibujar()
    
      for( let i = 0; i < this.cantidadDeEnemigos; i++){
        this.enemigos[i].dibujar()
      }
    
      for( let i = 0; i < this.cantidadDeComida; i++){
        this.comida[i].dibujar()
      }
        
      this.contador -= 1/60;

      push()
      textAlign(CENTER)
      textSize(height/30)
      text(round(this.contador)+" Secs", width/15, height-30)
      pop()
      
      if (this.contador < 0 && app.estado == 9) {
        this.reinicio()
        app.estado = 15 
      } else if (this.contador > 35){
        text("Toma la comida y llevala \nal hormiguero", width-150, height/2)
      }
    }
  }
  
  crearEnemigos(){
    this.enemigos= []
    for( let i = 0; i < this.cantidadDeEnemigos; i++){                                                                                          
      this.enemigos[i]= new Enemigo(i*width/4, random(height/3, height/10), i*width/5, random(height/1.2, height/1.6), width/10, height/15)
    }
  }
  
  crearComida(){
    this.cantidadDeComida = 3
    this.comida= []
    for( let i = 0; i < this.cantidadDeComida; i++){
      this.comida[i]= new Comida(width/3+i*width/5, height-50, width/30, height/40)
    }
  }
  
  teclaPresionada(keyPressed){
    this.personaje.teclaPresionada(keyCode)
  }
  
  mouseClicked(){
  }
  
  reinicio(){
    this.personaje.posX= width/2
    this.personaje.posY= height/2
    this.contador = 45
    this.personaje.vida = 5
    this.cantidadDeComida = 3
    this.personaje.recolectadas = 0
    this.personaje.agarroComida = false 
  }
}
