/*
TP 2
COMISIÓN 5
Kimey Peñalba 94041/4

*/

PImage imagen;
color colorcuadrados1, colorcuadrados2;


void setup() {
  size (800, 400);
  imagen = loadImage("opart.jpg");
  colorcuadrados1 =250;
  colorcuadrados2 =0;
  imagen.resize (400, 400);
  noStroke();
  

}

void draw() {
   
    image(imagen, 0, 0);

  push();
  translate(400, 0);
  
 
    for ( int i = 0; i < 17; i++) {
     
     for (int j = 0; j < 20; j++) {
    
       if((i+j) % 2== 0) {
      
          fill(colorcuadrados1);
        } else {
       
          fill(colorcuadrados2);
        }
     
     //rects 1

      float distancia2= i;
  
      float x2= distancia2* i;
      
      rect (x2+290, j*33,33, 33);
      
      
      //rects 2

      
      float inegativo =-i;
  
      float x = inegativo *  i ;
      
      rect (x+256,j*33, 33, 33);  
      
     
      
     }
    }
    

  pop();

}
  
  







    
