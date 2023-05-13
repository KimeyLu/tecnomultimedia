/*
TP 1
COMISION 5
Kimey Peñalba 94041/4
*/

String pantalla;
int contador;
PFont miFuente;
PImage imagenPrimera, imagenSegunda, imagenTercera;
//PANTALLA INICIO:
PImage martillo;
float MartilloPosx, MartilloPosy, MartilloTam1, MartilloTam2, MartilloVel;
//Boton 
float  PosXBoton, PosYBoton, RadioBoton;
float PosXTexto, PosYTexto; 
color ColorBoton, ColorTexto;
//PANTALLA PRIMERA
float TextoXPrimera, TextoYPrimera, TextoXPrimera2, TextoYPrimera2;
//PANTALLA SEGUNDA
float TextoXSegunda, TextoYSegunda, VelTextoSegunda;
//PANTALLA TERCERA
float TextoXTercera, TextoYTercera, VelTextoTercera, tamanio;
//Boton de reinicio
float PosXReiniciar, PosYReiniciar, AnchoReiniciar, LargoReiniciar;
color ColorReiniciar, ColorTextoR;

void setup() {
  background (0);
  size(640, 480);
  contador = 0;
  miFuente = loadFont("HPSimplified-BoldItalic-48.vlw");
  pantalla = "inicio";
 
//pantalla de inicio.
 //MARTILLO
  martillo = loadImage("martilloanimado.jpg");
  martillo.resize (100, 150);
  MartilloPosx = 255;
  MartilloPosy = 30;
  MartilloVel = 1;
 //BOTON
  PosXBoton = 320;
  PosYBoton = 400;
  RadioBoton = 120;
  PosXTexto = 275;
  PosYTexto = 400;
  ColorBoton = 255;
  ColorTexto = 0;
  
//pantalla Primera
  imagenPrimera = loadImage("martillopiedra.jpg");
  imagenPrimera.resize (640, 460);
  TextoXPrimera = 10;
  TextoYPrimera = 20;
  TextoXPrimera2 = 10;
  TextoYPrimera2 = 300;

//pantalla Segunda
  imagenSegunda = loadImage("martillobronce.jpg");
  imagenSegunda.resize (640, 480);
  TextoXSegunda = 10;
  TextoYSegunda = 10;
  VelTextoSegunda = 5;

//pantalla Tercera
  imagenTercera = loadImage("martillomoderno.jpg");
  imagenTercera.resize (640,480); 
  TextoXTercera = 10;
  TextoYTercera = 250;
  VelTextoTercera = 1;
  tamanio = 0;
  //REINICIAR
  //antes era
  PosXReiniciar = 505;
  PosYReiniciar = 425;
  AnchoReiniciar = 130;
  LargoReiniciar = 50;
  ColorReiniciar = 255;
  ColorTextoR = 0;


}

void draw() {  
  //Pantallas
  textFont(miFuente);


  switch (pantalla) {
    case("inicio"):
      
        contador++;
      println("Estado ", contador);   
      if (contador >= 500) {
        fill(255, 0, 0);
        textSize(20); 
        text(" Preparando \n inicio automatico...", 390, 400);
      } 
      if (contador >= 800) {
        contador = 0;
        pantalla = "primera";
      }
      
      
      if (pantalla == "inicio") {
        image(martillo, MartilloPosx, MartilloPosy);
  
  //BOTON
        if (dist(PosXBoton, PosYBoton, mouseX, mouseY) < RadioBoton /2 ) {
    
        ColorBoton = color(255, 0, 0);
        ColorTexto = 255;
  
      } else {
        ColorBoton = 255;
        ColorTexto = 0;  
      }
  
        fill (ColorBoton);
        circle (PosXBoton, PosYBoton, RadioBoton);
        fill(0);
        textSize(25);
        fill (ColorTexto);
        text("Empezar", PosXTexto, PosYTexto);
    
  //TITULO
        fill(255);
        textSize (50);
        text ("Breve Historia del Martillo", 40, 300);
  
      if (MartilloPosy <= 200 ) {
    
        MartilloPosy = MartilloPosy + MartilloVel;
       
      } 
      if (MartilloPosy >= 200 /2 ) {
    
        MartilloVel = -1;
   
      } else if (MartilloPosy <= 30) {
    
        MartilloVel = 1;
      }
   
      }
    break;
    
    case("primera"):
      
            contador++;
      println("Estado ", contador);
 
      if (contador >= 800) {
   
        contador = 0;
        pantalla = "segunda";
      }
    
      background(255);
      image(imagenPrimera, 1, 1);
      textSize(20);
      fill(0, 0, 0, contador);
      text("los primeros martillos\n consistían de piedras usadas para golpear,\n aunque a partir del 30.000 aC\n empiezan a usarse como mangos palos de madera, o huesos,\n atados con tiras de cuero.", TextoXPrimera, TextoYPrimera); 
      text("El martillo\n se convirtió en la principal herramienta \n utilizada para la construcción,\n la alimentación \n y la protección.", TextoXPrimera2, TextoYPrimera2);
    
      textSize(15);
      fill(0);
      text("Presione R si desea Retroceder", 10, 470);
    
      textSize(15);
      fill(0);
      text("Presione S si desea Seguir", 455, 470);
    break;
    
    case("segunda"):
          
            contador++;
      println("Estado ", contador);
 
      if (contador >= 800) {
   
        contador = 0;
        pantalla = "tercera";
      }
             
      background(0, 255, 0);
      image(imagenSegunda, 0, 0);
      textSize(20);
      fill(0);
      text("La seguridad y facilidad \n que ofrecía el martillo con mango lo convirtió \n tanto en una herramienta como en un arma primordial, \n que se mantuvo a lo largo de los siglos. \nEligiendo materiales más compactos, pesados y resistentes \n(como el bronce) para hacer la cabeza y el mango más cómodos.", TextoXSegunda, TextoYSegunda);
    
      if (TextoYSegunda <= 300) {
        TextoYSegunda = TextoYSegunda + VelTextoSegunda; 
      }
      textSize(15);
      fill(0);
      text("Presione R si desea Retroceder", 10, 470);
      
      textSize(15);
      fill(0);
      text("Presione S si desea Seguir", 455, 470);
    break;
    
    case("tercera"):
    
                contador++;
      println("Estado ", contador);
    
      background(240, 255, 0);
      image(imagenTercera, 0, 0);
      textSize(tamanio);
      fill(0);
      text("En la actualidad, \n el martillo que conocemos \n esta compuesto de una cabeza de acero,\n y un mango de madera \n (tambien se encuentran de plastico o metal).", TextoXTercera, TextoYTercera);
    
      if (tamanio <= 30) {
      
        tamanio = tamanio + VelTextoTercera;
    
      }
      
      textSize(15);
      fill(0);
      text("Presione R si desea Retroceder", 10, 470);

    //boton   
      if((mouseX > PosXReiniciar) && (mouseX < PosXReiniciar+AnchoReiniciar) && (mouseY > PosYReiniciar) && (mouseY < PosYReiniciar+ LargoReiniciar)) {
       ColorReiniciar = 0;
       ColorTextoR = (255);
      } else {
       ColorReiniciar = 255;
       ColorTextoR = (0);
      }
      
      fill(ColorReiniciar);
      rect(PosXReiniciar, PosYReiniciar, AnchoReiniciar, LargoReiniciar); 
      
      fill(ColorTextoR);
      textSize(30);
      text("Reiniciar", 510, 460);
   
    break;
    
  }

}
 
void mousePressed() {
  switch(pantalla) {
    case("inicio"):
      if (dist(PosXBoton, PosYBoton, mouseX, mouseY) < RadioBoton /2 ) {
    
        contador = 0;
        pantalla = "primera";
      } 
    break;
    
    case("tercera"):
      if((mouseX > PosXReiniciar) && (mouseX < PosXReiniciar+AnchoReiniciar) && (mouseY > PosYReiniciar) && (mouseY < PosYReiniciar+ LargoReiniciar)) {
      
        pantalla = "inicio";
        background (0);
        contador = 0;
        TextoXPrimera = 10;
        TextoYPrimera = 20;
        TextoXPrimera2 = 10;
        TextoYPrimera2 = 300;
        TextoXSegunda = 10;
        TextoYSegunda = 10;
        VelTextoSegunda = 5;
        TextoXTercera = 10;
        TextoYTercera = 250;
        VelTextoTercera = 1;
        tamanio = 0;
       }
    
    break;
  
}
}

void keyPressed() {
/*switch (pantalla) {
    i
    case("primera"):
        pantalla = "segunda";
    break;
    case("segunda"):
        pantalla = "tercera";
    break; */
    
    if (key ==  's') {
      switch (pantalla) {
        case("primera"):
          pantalla = "segunda";
          contador = 0;
          TextoXSegunda = 10;
          TextoYSegunda = 10;
          VelTextoSegunda = 5;

        break;
        case("segunda"):
          pantalla = "tercera";
          contador = 0;
          TextoXTercera = 10;
          TextoYTercera = 250;
          VelTextoTercera = 1;
          tamanio = 0;
        break; 
      }
    }
      
    if (key == 'r') {
      switch (pantalla) {
        case("segunda"):
          pantalla = "primera";
          contador = 0;
          TextoXPrimera = 10;
          TextoYPrimera = 20;
          TextoXPrimera2 = 10;
          TextoYPrimera2 = 300;
        break;
        case("tercera"):
          pantalla = "segunda";
          contador = 0;
          TextoXSegunda = 10;
          TextoYSegunda = 10;
          VelTextoSegunda = 5;
        break; 
      }
    }
}
