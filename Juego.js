class Juego{
  constructor(cantidadDeEnemigos) {
    this.cantidadDeEnemigos= cantidadDeEnemigos
    this.img = []
      for(let i = 0; i < 7; i++){
    this.img[i] = loadImage('assets/img'+i+'.png')
      }   
    this.estado = 0
    this.contador = 45
    this.crearEnemigos()
    this.crearComida()
    this.personaje= new Personaje()   
    this.reinicio()
    this.r = random(100)

  }
  
  dibujar(){
    background(90, 235, 160)
    if(this.estado == 0) {
      push()
      rect(width/7, height/4, width/1.4, height/1.5)
      textSize(height/25)
      text("Presionar ENTER para iniciar", width/6, height/1.3)  
      text("Instrucciones", width/35, height/18)
      pop()
      
      push()     
      textSize(height/30)
      text(" 1) Toma la comida (atención, no podras recolectar comida mientras todavia tengas una) \n \n 2) Esquiva a los enemigos con las flechas del teclado \n \n 3) Lleva la comida a la meta \n \n 4) Recolecta las tres comidas antes de que se te acabe el tiempo", width/6, height/3)
      pop()
    }
    
    if(this.estado == 1){
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
      textSize(height/20)
      text(round(this.contador)+" Secs", width/15, height/12)
      pop()
  
      if (this.contador < 0) {
        this.estado = 3
      }
    }
    
    if(this.estado == 2) {
      push()
      textAlign(CENTER)
      textSize(height/25)
      text("Ganaste!!", width/2, height/2)
      text("presionar ENTER para reiniciar", width/2, height/1.5)
      pop()      
    }
    
    if(this.estado == 3) {
      push()
      textAlign(CENTER)
      textSize(height/25)
      text("Perdiste", width/2, height/2)           
      text("presionar ENTER para reiniciar", width/2, height/1.5)
      pop()
    }
  }
  
  crearEnemigos(){
    this.enemigos= []
    for( let i = 0; i < this.cantidadDeEnemigos; i++){                                                                                          
      this.enemigos[i]= new Enemigo(i*width/9, random(height/3, height/10), i*width/9, random(height/1.2, height/1.6), width/20, height/15)
    }
  }
  
  crearComida(){
    this.cantidadDeComida = 3
    this.comida= []
    for( let i = 0; i < this.cantidadDeComida; i++){
      this.comida[i]= new Comida(width/3+i*width/5, height-50, width/70, height/40)
    }
  }
  
  teclaPresionada(keyPressed){
    this.personaje.teclaPresionada(keyCode)
    if (this.estado == 0){
      if(keyCode == ENTER ){
        this.estado = 1
      }
    }  
    if (this.estado == 2 || this.estado == 3){
      if(keyCode == ENTER ){
        this.estado = 0
        this.reinicio()
      }
    }
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
