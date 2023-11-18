/*
TP 5
COMISION 5
Kimey Peñalba 94041/4

video:

https://youtu.be/Dxrgx5h3jZ8?si=Jp_nDzAGtSngf5ML

*/

let juego

function setup() {
  createCanvas(windowWidth, windowHeight)
  juego =  new Juego(10)
}


function draw() {  
  juego.dibujar()
  
}

function keyPressed() {
  juego.teclaPresionada(keyCode)
}
