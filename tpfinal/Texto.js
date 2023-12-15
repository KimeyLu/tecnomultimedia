class Texto{
  constructor(){
    this.r = 
    this.g = 255
    this.b = 250
  }

  dibujar(){
    push()
      if(app.estado == 0){
        push()
          this.r = map(mouseX, 0, 600, 0, 100)
          this.g = map(mouseX, 0, 600, 0, 230)
          this.b = map (mouseX, 0, 600, 250, 0)
          textAlign(CENTER)
          textSize(45)                  
          fill(this.r, this.g, this.b)
          text("La Hormiga y la Cigarra", width/2, height/3)
        pop()
      }
      if(app.estado == 1){
        textSize(20)
        text("Ilustraciones y codigo:\nKimey Peñalba \nLegajo: 94041/4 \nTrabajo practico numero 6. \n\nAventura inspirada en la fabula \nLa hormiga y la Cigarra \nde Esopo \n\nVideojuego inspirado en Frogger(1981)\nde Konami Group Corporation", 50, 50)
      }
      if(app.estado == 2){
        fill(255)
        textSize(20)
        text("Durante todo un verano, una cigarra se dedicó \n a cantar y a jugar sin preocuparse por nada. \n Un día, vio pasar a una hormiga que llevaba \nenorme grano de trigo \n para almacenarlo en su hormiguero.", 50, 50)
      }
      if(app.estado == 3){
        fill(255)
        textSize(20)
        text("La cigarra, no contenta con cantar y jugar, \n decidió burlarse de la hormiga, \n diciendo que esta debía dejar de ser tan aburrida \n trabajando en verano. \n La hormiga le contesto que trabajaba \n porque debía guardar provisiones para el invierno, \n y le recomendó a la cigarra hacer lo mismo", 50, 50)
      }
      if(app.estado == 4){
        fill(255)
        textSize(20)
        text("¿Que debe hacer la cigarra?", 50, 50)
      }
      if(app.estado == 5){
        fill(255)
        textSize(20)
        text("El invierno no tardó en llegar y la cigarra \n no encontraba comida por ningún lado. Desesperada, \n fue a tocar la puerta de la hormiga \n y le pidió algo de comer", 50, 50)
      }
      if(app.estado == 6){
        fill(255)
        textSize(20)
        text("—¿Qué hiciste tú en el verano mientras yo trabajaba? \n —preguntó la hormiga. \n —Andaba cantando y jugando —contestó la cigarra.", 50, 50)
      }
      if(app.estado == 7){
        fill(255)
        textSize(20)
        text("—Pues si cantabas y jugabas en verano —repuso la hormiga—, \n sigue cantando y jugando en el invierno. \n Dicho esto, la hormiga cerró la puerta. \n Y la cigarra no tuvo más \n que tragarse su orgullo", 50, 50)
      }
      if(app.estado == 8){
        fill(255)
        textSize(20)
        text("la cigarra entonces \ndecidió hacer caso a la hormiga \ny empezó a trabajar tal cual como ella lo hacía ", 50, 50)
      }
      if(app.estado == 10){
        fill(255)
        textSize(20)
        text("el invierno llegó,\n y la cigarra logró recolectar suficiente comida \npero agotada por tantos días sin descanso,\n solo pudo pasar el invierno comiendo, durmiendo \n y recordando las épocas en las que disfrutaba el verano \n cantando y divirtiéndose", 50, 50)
      }
      if(app.estado == 11){
        fill(255)
        textSize(20)
        text("La cigarra entonces decide ayudar a la hormiga \n a recolectar la comida, \n esta al ver que la ayuda de la cigarra no molestaba \n decidió aceptar tal contribución.", 50, 50)
      }
      if(app.estado == 13){
        fill(255)
        textSize(20)
        text("Cuando llegó el invierno, \n las provisiones ya alcanzaban para las dos, \n y en los últimos días del verano se esforzaron \nmucho menos de lo que hubieran \nsi habrian trabajado a solas.", 50, 50)
      }
      if(app.estado == 14){
        fill(255)
        textSize(20)
        text("Así que una vez se refugiaron \n pudieron pasar todo el invierno \n cantando y divirtiéndose \n sin preocupaciones.", 50, 50)
      }
      if(app.estado == 15){
        fill(255)
        textSize(20)
        text("Perdiste. \n\nEl invierno no tardó en llegar \ny no se encontraba comida por ningún lado.", 50, 50)
      }
    pop()
  }
  
}
