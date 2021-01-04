var hr, mn, sc;
var hrAngle, mnAngle, scAngle;


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(0);  

  hr=hour();
  mn=minute();
  sc=second();

  angleMode(DEGREES);
  
  hrAngle=map(hr%12,0,12,0,360);//to get 12 hour format instead of 24 hr
  mnAngle=map(mn,0,60,0,360);
  scAngle=map(sc,0,60,0,360);

//shift origin to centre of canvas
  translate(400,200);
  rotate(-90);//when rotate is not given, the actual position of hour hand and the position in the output differs 
  //by 90 that is one quarter of a circle. Since it has to shift in the opposite direction, use minus    

  //to draw seconds hand
  push();//to confine scAngle rotation to seconds hand only so that hour and minute hands are not affected
  rotate(scAngle);
  stroke(255,0,0);//red
  strokeWeight(6);  
  line(0,0,100,0);//longest
  pop();

 //to draw minutes hand
 push();
 rotate(mnAngle);
 stroke(0,255,0);//green
 strokeWeight(7);  
 line(0,0,75,0);
 pop(); 

 //to draw hour hand
 push();
 rotate(hrAngle);//blue
 stroke(0,0,255);//shortest
 strokeWeight(8);  
 line(0,0,50,0);
 pop();

stroke(255,0,255);//r and b combo
point(0,0);//draws a point at translates 0,0

//drawing the arcs
strokeWeight(10);
noFill();
//Seconds
stroke(255,0,0);
arc(0, 0,300, 300,0, scAngle);
//Minutes
stroke(0,255,0);
arc(0, 0,280, 280,0, mnAngle);
//Hour  
stroke(0,0,255);
arc(0, 0,260, 260,0, hrAngle);


 


}