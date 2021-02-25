function setup() {
  createCanvas(650,650);
  angleMode(DEGREES);
}

function draw() {

  background(0);

 

translate(200,200)
rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  noFill();
  
  // Arc for Second 
  stroke("red");
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  // Second Hand
  push();
  rotate(end);
  stroke("red");
  line(0,0,100,0);
  pop();

  // Arc for Minute
  stroke("blue");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  // Minute Hand
  push();
  rotate(end2);
  stroke("blue");
  line(0,0,75,0);
  pop();

  // Arc for Hour
  stroke("yellow");
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  // Hour Hand
  push();
  rotate(end3);
  stroke("yellow");
  line(0,0,50,0);
  pop();
  
  // Center Pin
  stroke("Black");
  point (0,0);

  }