/*
TP 4
COMISION 5
Kimey Peñalba 94041/4

video:

https://youtu.be/YVYIhm1jph0?si=k3-xYJI26sw2LHVr

*/

var r
let contador = 45
let textox = 0
let botonx2 = 100
let botony2 = 50
let pantalla = 0
let vidas = 9
let victorias = 0
let x, y, tam
let obstaculosX = []
let obstaculosatrasX = []
let fuente
//imagenes
let obstaculo1, obstaculo2

function preload() {
  
  fuente = loadFont("assets/Rajdhani-Medium.ttf")
  obstaculo1 = loadImage('assets/Frame1.png')
  obstaculo2 = loadImage('assets/Frame2.png')
}

function setup() {

  createCanvas(1365, 600)
  
  textFont(fuente)

  textAlign(CENTER)
  
  r = random(210)
  
}

function draw() {
  
  pantallas()
  
}

function mousePressed() {
    
  if (pantalla == 0) {      
  if (mouseX > width/2.1 && mouseX < width/2.1 + botonx2 && mouseY > height/2 && mouseY < height/2 + botony2) {      
    pantalla = 1      
    }  
  //instrucciones  
  if (mouseX > width/1.5 && mouseX < width/1.5 + 100 && mouseY > height-100 && mouseY < height-100 + 50) {    
    pantalla = 5    
    }    
  if (mouseX > width/2.1 && mouseX < width/2.1 + 100 && mouseY > height-100 && mouseY < height-100 + 50) {      
    pantalla = 4
    }
  }  
  
  if (pantalla == 1) {    
    if ( mouseX > width-100 && mouseX < width-100+80 && mouseY > height-50 && mouseY < height-50 + 40) {      
      pantalla = 0
    } 
  }
  
  // pantalla perdiste mouse
  if (pantalla == 2) {    
    if (mouseX > width/2.1 && mouseX < width/2.1 + 100 && mouseY > height/2 && mouseY < height/2 + 50) {      
      pantalla = 0
    }
  }
  
 // pantalla ganaste mouse
  if (pantalla == 3) {    
    if (mouseX > width/2.1 && mouseX < width/2.1 + 100 && mouseY > height/2 && mouseY < height/2 + 50) {      
      pantalla = 0    
    }
  }
  
  //creditos
  if (pantalla == 4) {  
    if (mouseX > 50 && mouseX < 50 + 100 && mouseY > height-100 && mouseY < height-100 + 50) {  
      pantalla = 0
    }
  }
  
  
  if (pantalla == 5) {
    if (mouseX > 50 && mouseX< 50 + 100 && mouseY > height-100 && mouseY < height-100 + 50) {
      pantalla = 0
    }
  }
}
