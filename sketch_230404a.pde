/*
TP 0
COMISION 5
Kimey Peñalba 94041/4
*/
 
 PImage martillo;

void setup() {
  size (800, 400);
  martillo = loadImage("martillo.jpg");
  martillo.resize (400, 400); 

}

void draw() {
  
  background(15, 185, 206);
  
  image(martillo, 0, 0);
  
  
  strokeWeight (2);
  stroke(56, 128, 147);
  
  line(488, 0, 488, 400);
  line(588, 0, 588, 400);
  line(695, 0, 695, 400);

  
//Mango del martillo
  
  strokeWeight (1);
  
  stroke(0, 0, 0);
  
  fill(203, 164, 62);
  
  beginShape();
 
    vertex(517, 162);
    vertex(530, 120);
    vertex(539, 126);
    vertex(544, 133);
    vertex(657, 232);
    vertex(765, 329);
    vertex(757, 361);
    vertex(746, 382);
    vertex(704, 337);
    vertex(650, 293);
    vertex(517, 163);
 
  endShape();
  
//Cabeza del martillo
  
  fill (85, 85, 85);
  
  beginShape();
    
    vertex(451, 190);
    vertex(455, 196);
    vertex(476, 215);
    vertex(483, 216);
    vertex(486, 195);
    vertex(496, 160);
    vertex(500, 158);
    vertex(518, 167);
    vertex(533, 119);
    vertex(534, 113);
    vertex(513, 88);
    vertex(514, 82);
    vertex(519, 76);
    vertex(529, 68);
    vertex(562, 54);
    vertex(565, 47);
    vertex(565, 41);
    vertex(545, 44);
    vertex(531, 48);
    vertex(500, 64);
    vertex(494, 68);
    vertex(477, 106);
    vertex(469, 127);
    vertex(472, 134);
    vertex(472, 140);
    vertex(455, 183);
    vertex(450, 188); 
    vertex(451, 190);

  endShape();
  
//Sombra 1
  
  fill(0, 0, 0, 100);
 
  noStroke();
  
  beginShape();
   
    vertex(764, 343);
    vertex(766, 353);
    vertex(766, 353);
    vertex(757, 397);
    vertex(727, 399);
    vertex(524, 208);
    vertex(524, 208);
    vertex(503, 212);
    vertex(480, 246);
    vertex(446, 214);
    vertex(456, 199);
    vertex(453, 195);
    vertex(449, 189);
    vertex(457, 191);
    vertex(475, 202);
    vertex(492, 147);
    vertex(521, 159);
    vertex(543, 167);
    vertex(543, 167);
    vertex(549, 164);
    vertex(695, 310);
    vertex(727, 331);
    vertex(727, 331);
    vertex(751, 355);
    vertex(764, 343);
  
  endShape();
  
//Sombra 2
 
  beginShape();
    
    vertex(522, 99);
    vertex(509, 84);
    vertex(520, 64);
    vertex(561, 49);
    vertex(560, 72);
    vertex(522, 99);

  endShape();

//Sombra 3

  triangle (489, 147, 472, 141, 472, 133);

//Luz 1
  
  fill (255, 255, 255, 60);
  
  quad (555, 150, 553, 157, 761, 344, 763, 335);
  
//Luz 2

  quad (458, 189, 472, 198, 484, 147, 478, 145);

//Luz 3

  quad (474, 135, 498, 75, 507, 82, 483, 142);
  
//Luz 4

  quad (545, 45, 543, 52, 558, 48, 564, 42);

}

void mousePressed() {
  
/*
    println("vertex(" + (mouseX+400) + ", " + mouseY + ");");  
  
    println("vertex(" + mouseX + ", " + mouseY + ");");   
    
    print( mouseX + ", " + mouseY + ", ");        
 
*/ 

}
