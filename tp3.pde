/*
TP 1
COMISION 5
Kimey Peñalba 94041/4


Enlaces al video explicativo:

https://youtu.be/CQLXTJHVZwU

o

https://www.youtube.com/watch?v=CQLXTJHVZwU&ab_channel=lucerope%C3%B1alba

*/

PImage[] imagenes = new PImage[9];
int estado;

//botones
color colorboton = 230;

boolean creditos = false;

boolean iniciar = false;
int posXiniciar = 250;
int anchoiniciar = 100;
int posYiniciar = 250;
int largoiniciar = 50;

boolean atras = false;
int posXatras = 50;
int anchoatras = 100;
int posYatras = 530;
int largoatras = 50;

boolean siguiente = false;
int posXsig = 450;
int posYsig = 530;
int anchosig = 100;
int largosig = 50;

boolean bifurcacion;
int posXbif=450;
int posYbif=300;
int anchobif=100;
int largobif=50;

boolean bifurcacion2;
int posXbif2=450;
int posYbif2=100;
int anchobif2=100;
int largobif2=50;


void setup() {
  size(600, 600);

  for (int i = 0; i < 9; i++) {
    imagenes[i] = loadImage ( "img" + i + ".jpg") ;
  }

  estado = 0;
}

void draw() {

  estados();
}

void mousePressed() {

  botones();

  //botónes
  if (creditos == true) {
    estado = 13;
  }

  if (iniciar == true) {
    estado = 10;
  }
  if (bifurcacion == true) {
    switch(estado) {
    case 9:

      estado = 4;

      break;
    }
  } else if (bifurcacion2 == true) {
    switch(estado) {
    case 9:

      estado = 7;

      break;
    }
  }

  if (siguiente == true) {
    switch(estado) {

    case 1:

      estado = 9;

      break;

    case 2:

      estado= 11;

      break;

    case 4:

      estado = 5;

      break;

    case 5:

      estado = 6;

      break;

    case 7:

      estado = 12;

      break;
      
    case 10:
    
    estado = 1;
    
    break; 

      //
    case 9:

      estado = 2;

      break;
      
    case 11:
      estado = 3;
      break;
      
    case 12:
    
      estado = 8;
    
    break;
    }
  }

  if (atras == true) {
    switch(estado) {

    case 1:

      estado = 10;

      break;

    case 2:

      estado= 1;

      break;

    case 3:

      estado= 11;

      break;

    case 4:

      estado= 1;

      break;

    case 5:

      estado = 4;

      break;

    case 6:

      estado = 5;

      break;

      //

    case 7:

      estado = 1;

      break;

    case 8:

      estado = 12;

      break;

    case 9:

      estado = 1;

      break;
      
    case 10:
      
      estado = 0;
  
    break;
      
    case 11:
      estado = 2;
      break;
      
    case 12:
      estado = 7;
      break;

    case 13:

      estado = 0;

      break;
    }
  }
}

void keyPressed() {
 
  if (key == 'r') {
    switch(estado) {
    
      case 3:
      
      estado = 0;
      
      break;
      
      case 6:
      
      estado = 0;
      
      break;
      
      case 8:
      
      estado = 0;
      
      break;
    }  
    }
  }

void estados() {
  switch (estado) {
  case 0:

    image(imagenes[0], 0, 0);
    
    titulo();

    botones ();
    
    push();

    fill(colorboton, 120);
    rect(posXiniciar, posYiniciar, anchoiniciar, largoiniciar);
    textSize(20);
    fill(0);
    text("Iniciar", posXiniciar+25, posYiniciar+32);

    pop();

    push();

    fill(colorboton, 120);
    rect(posXiniciar, posYiniciar*2, anchoiniciar, largoiniciar);
    textSize(20);
    fill(0);
    text("Creditos", posXiniciar+15, posYiniciar*2+30);

    pop();

    break;

  case 1:

    image(imagenes[1], 0, 0);

    //sig (hacer que solo lleve a la pantalla 9
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();

    //texto
    push();
    
    textSize(20);
    fill(230);    
    text(" La cigarra, no contenta con cantar y jugar, \n decidió burlarse de la hormiga, \n diciendo que esta debía dejar de ser tan aburrida \n trabajando en verano. \n La hormiga le contesto que trabajaba \n porque debía guardar provisiones para el invierno, \n y le recomendó a la cigarra hacer lo mismo."
      , 10, 20);

    pop();


    break;

  case 2:

    image(imagenes[2], 0, 0);

    //sig
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    

    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    push();
    textSize(20);
    fill(230);
    
    text("El invierno no tardó en llegar y la cigarra \n no encontraba comida por ningún lado. Desesperada, \n fue a tocar la puerta de la hormiga \n y le pidió algo de comer",10,20);
    
    pop();

    break;

  case 3:

    image(imagenes[3], 0, 0);

    //reiniciar
    push();
    textSize(25);  
    text ("presione R para \n reiniciar", 430, 550);
    pop();

    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    //texto
    push();
    
    textSize(20);
    fill(230);
    text("—Pues si cantabas y jugabas en verano —repuso la hormiga—, \n sigue cantando y jugando en el invierno. \n Dicho esto, la hormiga cerró la puerta. \n Y la cigarra no tuvo más \n que tragarse su orgullo" ,10 , 20);
    
    pop();
    

    break;

  case 4:

    image(imagenes[4], 0, 0);

    //sig
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    //texto
    push();
    textSize(20);
    fill(230);
    
    text("la cigarra entonces decidió hacer caso a la hormiga \n y empezó a trabajar tal cual como ella lo hacía ", 10, 20);
    
    pop();

    break;

  case 5:

    image(imagenes[5], 0, 0);

    //sig
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    push();
    textSize(20);
    fill(230);
    
    text("conseguir alimento le tomaba demasiado tiempo, \n con el paso de los días, a la par que sus provisiones aumentaban \n cada vez se olvidaba más como cantar y divertirse", 10, 20);
    
    pop();
    break;

  case 6:

    image(imagenes[6], 0, 0);

    //REINICIAR
    push();
    textSize(25);  
    text ("presione R para \n reiniciar", 430, 550);
    pop();
    
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    push();
    textSize(20);
    fill(230);
    
    text("después de una larga espera el invierno llegó,\n y la cigarra agotada por tantos días sin descanso,\n solo pudo pasar el invierno comiendo, durmiendo \n y recordando las épocas en las que disfrutaba el verano \n cantando y divirtiéndose", 10, 20);
    
    pop();


    break;

  case 7:

    image(imagenes[7], 0, 0);

    //sig
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    push();
    textSize(20);
    fill(230);
    
    text("La cigarra entonces decide ayudar a la hormiga \n a recolectar la comida, \n esta al ver que la ayuda de la cigarra no molestaba \n decidió aceptar tal contribución. ", 10, 20);
    
    pop();

    break;

  case 8:

    image(imagenes[8], 0, 0);

    //REINICIAR
    push();
    textSize(25);  
    text ("presione R para \n reiniciar", 430, 550);
    pop();


    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
        push();
    textSize(20);
    
    fill(230);    
    text(" Así que una vez se refugiaron \n pudieron pasar todo el invierno \n cantando y divirtiéndose \n sin preocupaciones.", 10, 20);
    
    pop();

    break;

  case 9:

    image(imagenes[1], 0, 0);
    

//atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    push();
    
    fill(230);
    textSize(30);
    text("¿qué decisión tomará \n la cigarra?", 300, 25);
    
    pop();
   
    //este sig lleva a la pantalla 2
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig+20, largosig+10);
    fill(0);
    textSize(15);
    text("Seguir cantando \n y divirtiendose", posXsig+10, posYsig+20);
    
    pop();
    
    push();
    
    fill(colorboton, 120);
    rect(posXbif, posYbif, anchobif, largobif);
    fill(0);
    textSize(15);
    text("Copiar \n a la hormiga", posXbif+10, posYbif+20);

    
    pop();
    
    push();
    
    fill(colorboton, 120);
    rect(posXbif2, posYbif2, anchobif2, largobif2);
    fill(0);
    textSize(15);
    text("Ayudar \n a la hormiga", posXbif2+10, posYbif2+20);
    
    pop();


    break;

  case 10:
  
  //1
      image(imagenes[1], 0, 0);

    //siguiente
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();


    //texto
    push();
    
    textSize(20);
    fill(230);    
    text("Durante todo un verano, una cigarra se dedicó \n a cantar y a jugar sin preocuparse por nada. \n Un día, vio pasar a una hormiga que llevaba enorme grano de trigo \n para almacenarlo en su hormiguero.", 10, 20);

    pop();

    break;

  case 11:
  
  //3
  
    image(imagenes[3], 0, 0);
 
    //siguiente
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    push();
    
    textSize(20);
    fill(230);
    text("—¿Qué hiciste tú en el verano mientras yo trabajaba? \n —preguntó la hormiga. \n —Andaba cantando y jugando —contestó la cigarra.", 10, 20);
   
    pop();
 
    break;

  case 12:

  //8
    image(imagenes[8], 0, 0);
    
    //siguiente
    push();
    
    fill(colorboton, 120);
    rect(posXsig, posYsig, anchosig, largosig);
    fill(0);
    textSize(20);
    text("Siguiente", posXsig+10, posYsig+25);
   
    pop();
    //atras
    push();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();
    
    push();
   
    textSize(20);
    fill(230);
    text("Cuando llegó el invierno, \n las provisiones ya alcanzaban para las dos, \n y en los últimos días del verano se habían \n esforzar mucho menos de lo que lo hubieran hecho si hubieran \n trabajado a solas.", 10, 20);
    
    pop();

    break;

  case 13:
  
      image(imagenes[0], 0, 0);

//atras
    push();
    
    //creditos
    push();
    fill(230);
    textSize(25);
    text("Ilustraciones y codigo: \n Kimey Peñalba", 20, 30);
    text("Inspirado en la fabula \n La hormiga y la Cigarra, de Esopo", 20, 130);
    pop();
    
    fill(colorboton, 120);
    rect(posXatras, posYatras, anchoatras, largoatras);
    fill(0);
    textSize(20);
    text("Atras", posXatras+10, posYsig+25);
    
    pop();

    break;
  }
}


void titulo() {

    float r = 0;
    float g = 255;
    float b = 250;
    
    push();
    
    r = map(mouseX, 0, 600, 0, 100);
    g = map(mouseX, 0, 600, 0, 230);
    b = map (mouseX, 0, 600, 250, 0); 
    
    textSize(50);
    fill(r, g, b);
    text("La Hormiga y la Cigarra", width/9, 200);
    
    pop();

}


void botones() {
  iniciar = ((mouseX > posXiniciar) && (mouseX < posXiniciar+anchoiniciar) &&
    (mouseY > posYiniciar) && (mouseY < posYiniciar+ largoiniciar));

  creditos = ((mouseX > posXiniciar) && (mouseX < posXiniciar+anchoiniciar) &&
    (mouseY > posYiniciar*2) && (mouseY < posYiniciar*2+ largoiniciar));

  atras = ((mouseX > posXatras) && (mouseX < posXatras + anchoatras) &&
    (mouseY > posYatras) && (mouseY < posYatras + largoatras));

  siguiente= ((mouseX > posXsig) && (mouseX < posXsig+anchosig) &&
    (mouseY > posYsig) && (mouseY < posYsig+ largosig));

  bifurcacion = ((mouseX > posXbif) && (mouseX < posXbif + anchobif) &&
    (mouseY > posYbif) && (mouseY < posYbif + largobif));

  bifurcacion2 = ((mouseX > posXbif2) && (mouseX < posXbif2 + anchobif2) &&
    (mouseY > posYbif2) && (mouseY < posYbif2 + largobif2));

}
