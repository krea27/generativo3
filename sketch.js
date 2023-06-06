function setup() {
    createCanvas(512,512);
  
  
    background(0);}
  /*function draw() {
    frameRate(5);
    noFill();
    if (mouseIsPressed)
      if (mouseButton == LEFT)
        stroke(255);
      else if (mouseButton == RIGHT) stroke(70);
      else stroke( 40);
    strokeWeight(1);
    rect(mouseX, mouseY, pmouseX, pmouseY);
     ellipse(mouseX, mouseY, pmouseX, pmouseY);
    
  }*/
  
  function draw() {
    frameRate(10);
    noFill();
    
    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
        stroke(255);
      } else if (mouseButton == RIGHT) {
        stroke(70);
      } else {
        stroke(random(255), random(255), random(255));
      }
    }
    
    strokeWeight(1);
    rect(mouseX, mouseY, pmouseX - mouseX, pmouseY - mouseY);
  }
  