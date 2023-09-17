function pantallas() {
  
  if (pantalla == 0) {
    
    reinicio()
    
    estilo()
    
    valoresiniciales()
    
    iniciojugador()
    
    
  } else if (pantalla == 1) {

    barreras()
    
    estilo()
    
    juego()
        
  } else if (pantalla == 2) {
    //pantalla PERDISTE
    
    estilo()
    
    valoresiniciales()
    
    iniciojugador()
      
  } else if (pantalla == 3) {
    //pantalla GANASTE
    
    estilo()
    
    valoresiniciales()
    
    iniciojugador()
    
  
  } else if (pantalla == 4) {
    //Creditos
    
    estilo()
    
    valoresiniciales()
    
    iniciojugador()
    
  } else if (pantalla == 5) {
    // instrucciones   
    
    estilo()
    
    valoresiniciales()
    
    iniciojugador()
    
  }
}

function estilo() {
  
  if (pantalla == 0) {
    background(0)

    push()
      fill(255)
      textSize(70)
      text("¡¡Guarda con\n la Pelota!!", textox, height/4.5)
      textSize(30)
      fill(250, 0, 30, textox/2)
      text("El Juego", width/2+20, height/2.2)
    pop()
    
    if (textox < width/2) {     
      textox += 10    
    }
    
    push()
      fill(255)
      rect(width/2.1, height/2, botonx2, botony2)
      fill(20)
      textSize(25)
      text("Iniciar", width/2.1, height/1.8, botonx2, botony2)
    pop()  
    //instrucciones boton
    push()
      rect(width/1.6+32, height-100, 155, 50)
      fill(20)
      textSize(25)
      text("Instrucciones", width/1.5, height-68, 100, 50)
    pop()
    //creditos boton
    push()
      rect(width/2.1, height-100, 100, 50)
      fill(20)
      textSize(25)
      text("Creditos", width/2.1, height-68, 100, 50)
    pop()  
    
  }
  
  if (pantalla == 1) {
    
  background(20);  
  // veredas  
  push()
    noStroke()
    fill(0, 150, 10)
    rect(0, 0, width, 35) 
    fill(196, 223, 223)
    rect(0, height/2.3, width, 35)
    rect(0, height-90, width, height)
  pop()
  // interfaz vidas 
  push()
    fill(0)
    textSize(20)  
    text("vidas: "+ vidas, 85, height-15)
  pop() 
  
  for (let i = 0; i < vidas; i++) {
    circle(60+50*i/2, height-50, 20, 20)  
  }      
  //zona meta y victorias
  for(let i = 0; i < 5; i++) { 
    push()
      noStroke()
      fill(20)
      rect(width/10+width/5*i, 10, 100, 25)
    pop()  
  }
 
  for(let i = 0; i < victorias; i++) { 
    push()
      circle(width/7.5+width/5*i, 25, 23, 23)
    pop()  
  }  
  //menu boton
    push()
      textSize(20)
      rect(width-100, height-50, 80, 40)
      text("Menú", width-60, height-25)
    pop()
    
  }
  
  if (pantalla == 2) {
    background(20)   

    push()
      fill(255, 150, 150) 
      textSize(50)
      text("Perdiste", width/2, height/3) 
    pop()
    
    push()
      textSize(25)
      rect(width/2.2+10, height/2, botonx2, botony2)
      text("Reiniciar", width/2, height/1.8) 
    pop() 
 
  }
  
  if (pantalla == 3) {
    background(20)   

    push()
      fill(150, 255, 150) 
      textSize(50)
      text("¡¡Ganaste!!", width/2, height/3)
    pop()
    
    push()
      textSize(25)
      rect(width/2.2+10, height/2, botonx2, botony2)
      text("Reiniciar", width/2, height/1.8) 
    pop() 
    
  }
  //creditos
  if (pantalla == 4) {
    background(0)

    push()
      fill(255)
      textSize(25)
      text("Inspirado en el videojuego: \n Frogger (1981)\n de Konami Group Corporation \n \n Imagenes hechas en Figma \n Programado por: \n Kimey Peñalba \n legajo : 94041/4 \n Trabajo practico numero 4 \n Comision 5 ", width/3, height/4)
    pop()
    
    push()
      textSize(25)
      rect(50, height-100, 100, 50)
      text("Atrás", 100, height-68)
    pop()
    
  }
  // instrucciones
  if (pantalla == 5) {
    background(0)

    push()
      fill(255)
      textSize(25)
      text("Para mover a la pelota,\nusa las teclas w, a, s, d", width/5, height/4)
    
      circle(width/5, height/2, 30, 30)

      fill(255)
      textSize(25)
      text("Tu objetivo: llegar \na la vereda\n de color verde", width/2, height/4)
    pop()
    
    push()
      fill(0, 200, 0)
      rect(width/2, height/2.5, 60, 20)
      fill(0)
      rect(width/2+15, height/2.4, 30, 15)
    pop()
    
    push()
      fill(255)
      textSize(25)
      text("¡Cuidado con los autos y \nlas corrientes de aire!\nesquivalos usando las teclas", width/2, height/1.8)
    pop()
    
    image(obstaculo1, width/2, height/1.4, 140, 30)
    
    push()
      push()
      fill(255)
      textSize(25)
      text("Si pierdes \nmas de 10 pelotas \n o el temporizador llega a 0 \npierdes el juego, \n si mas de 5 pelotas \nllegan a la meta\n ganaste.", width/1.2, height/4)
    pop()
    
    push()
      textSize(25)
      rect(50, height-100, 100, 50)
      text("Atrás", 100, height-68)
    pop()
    
  }
}

function barreras() {

  if(x < 0 ) {   
    x = x + 10;  
  }
  
  if(x > width ) {  
    x = x - 10;  
  }

  if(y < 0 ) {
    y = y + 15;  
  }
  
  if(y > height -55 ) {
    y = y - 30;
  }
}

function juego() {
   
  //vidas y victorias
  if (vidas < 0) {
    pantalla = 2
  }
  
  if (victorias > 4) {
    pantalla = 3
  }
  
  contador -= 1/60;
  
  push()
  textSize(30)
  text(round(contador)+"secs", width/1.9, height-23)
  pop()
  
  if (contador < 0) {
    pantalla = 2
  }

//viento 
  if (x > 0 && x < 0+ width && y > 35 && y < 35*3) {
    x++
  } else if (x > 0 && x < 0+ width && y > 32 && y < height/2.3) {
    x--
  } 
    //llegar a la meta
  if (y > 30 && y < 30 + 32 ) {  
    
    iniciojugador()
    valoresiniciales()
    victorias++
  }  
  
  jugador();
  
  obstaculos(); 

}
  
function obstaculos() {  
  // AUTOS 1
  for (let i = 0; i < 3 ; i++) {
    //(height/2.8) = posicion, (85*(i+1)) = distancia entre auto y auto,  
    let obstaculosY = (height/2.8)+(85 * (i + 1))
    let obstaculosx2= 80
    let obstaculosy2= 40
    
    push()
      noStroke()
      fill(200, 100, 20)
  rect(obstaculosX[i], obstaculosY, obstaculosx2, obstaculosy2)
      fill(0)
      rect(obstaculosX[i]+45, obstaculosY+5, 15, 30)
      rect(obstaculosX[i]+15, obstaculosY+5, 5, 30)
      fill(180, 180, 255)
      rect(obstaculosX[i]+45, obstaculosY+5, 13, 10)
      fill(255, r*2, 0)
      rect(obstaculosX[i]+72, obstaculosY, 5, 10)
      rect(obstaculosX[i]+72, obstaculosY+30, 5, 10)
    pop()
    
    obstaculosX[i] += 4
  
  //regresa a la posicion random
  if (obstaculosX[i] > width) {
    obstaculosX[i] = random(-100, 0)   
    r = random(210)
  } 
   
  //delimitacion de obstaculos
  if (x > obstaculosX[i] && x < obstaculosX[i] + obstaculosx2 && y > obstaculosY && y < obstaculosY + obstaculosy2) {
    
    vidas --
    r = random(210)
    sas= 200
    valoresiniciales()
    iniciojugador()
    
  }
}  
 //autos 2 
  for (let i = 0; i < 2 ; i++) {
    let obstaculosatrasY = (height/2.3)+(83 * (i + 1));
    let obstaculosatrasx2 = 80
    let obstaculosatrasy2 = 40
  
    push() 
      noStroke()
      fill(0, 0, 200) 
      rect(obstaculosatrasX[i], obstaculosatrasY, obstaculosatrasx2, obstaculosatrasy2)
      fill(0)
      rect(obstaculosatrasX[i]+20, obstaculosatrasY+5, 15, 30)
      rect(obstaculosatrasX[i]+59, obstaculosatrasY+5, 5, 30)
      fill(180, 180, 255)
      rect(obstaculosatrasX[i]+20, obstaculosatrasY+5, 13, 10)
      fill(255, r*2, 0)
      rect(obstaculosatrasX[i]+5, obstaculosatrasY, 5, 10)
      rect(obstaculosatrasX[i]+5, obstaculosatrasY+30, 5, 10)
    pop()   
   
    obstaculosatrasX[i] -= 3
    
    if (obstaculosatrasX[i] < 0) {
      obstaculosatrasX[i] = random(width, width+150) 
    }
  
    if (x > obstaculosatrasX[i] && x < obstaculosatrasX[i] + obstaculosatrasx2 && y > obstaculosatrasY && y < obstaculosatrasY + obstaculosatrasy2) {  
    
      vidas --
      valoresiniciales()
      iniciojugador()

    }
  }
  //viento
  for (let i = 0; i < 2 ; i++) {
    let obstaculosY = (40 * (i + 1));
    let obstaculosx2= 200
    let obstaculosy2= 30

    push()
      image(obstaculo2, obstaculosX[i]-100, obstaculosY, obstaculosx2, obstaculosy2)
    pop()
  
    obstaculosX[i] ++
    
    if (obstaculosX[i] > width) {
    obstaculosX[i] = random(-100, 0)   
    } 

    if (x > obstaculosX[i]-100 && x < obstaculosX[i]-100 + obstaculosx2 && y > obstaculosY && y < obstaculosY + obstaculosy2) {
    
    vidas --
    valoresiniciales()
    iniciojugador()

    }
  }
  
    // viento 2  
  for (let i = 0; i < 3 ; i++) {
    let obstaculosatrasY = 60+(55 * (i + 1));
    let obstaculosatrasx2 = 200
    let obstaculosatrasy2 = 30
  
    push() 
    image(obstaculo1, obstaculosatrasX[i], obstaculosatrasY, obstaculosatrasx2, obstaculosatrasy2)
    pop()  
   
    obstaculosatrasX[i] --
    
    if (obstaculosatrasX[i] < -200 ) {
      obstaculosatrasX[i] = random(width, width+150) 
    }
  
    if(x > obstaculosatrasX[i] && x < obstaculosatrasX[i] + obstaculosatrasx2 && y > obstaculosatrasY && y < obstaculosatrasY + obstaculosatrasy2) {
      
      vidas --
      valoresiniciales()
      iniciojugador()
      
    }  
  }
 
}

function jugador() {
  
  push()
  strokeWeight(5)
  circle(x, y, tam)
  pop()
  
  if ((keyIsPressed == true) && (key == 'd') ) { 
    x+= 3;                      
  } else if ((keyIsPressed == true) && (key == 'a')) { 
    x-= 3;                      
  } else if ((keyIsPressed == true) && (key == 'w')) { 
    y-= 2;                      
  } else if ((keyIsPressed == true) && (key == 's')) { 
    y+= 2;                      
  } 
}

function iniciojugador() {
  
  x = width/2
  y = height-70
  tam = height/20 
  
}

function valoresiniciales() {
  
  for (let i = 0; i < 3; i++){
    obstaculosX[i] = random(width) 
  }
  
    for (let i = 0; i < 3; i++){
    obstaculosatrasX[i] = random(width) 
  }
  
}

function reinicio() {

  contador = 45
  vidas = 10
  victorias = 0
  
}
