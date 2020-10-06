//Location of the Circle with Random values
var circleRandom = {
    xLocation: 0,
    yLocation: 0
}

//Random Colors within the bounds
function colorRandomValues(){
  return Math.floor(Math.random() * 255 ) - 255;
}

//Max canvas bounds
var maxCanvas = {
    width: 1800,
    height: 600,
}

// Used only once
function setup(){
    frameRate(10);
    createCanvas(maxCanvas.width, maxCanvas.height);
    background(0);
}

// constantly gets update depending on the frame rate. 
function draw(){

   // random loaction with in the bounds of the canvas for
   // x and y axis
     circleRandom.xlocation = random(0,maxCanvas.width);
     circleRandom.yLocation = random(0, maxCanvas.height);
   
     //Random Color of the circles (in progerss)  
     fill(colorRandomValues,colorRandomValues,colorRandomValues);
    
     // noStoke means no outline on the circle
    noStroke();

    //The acutally circle being made ( in process)
    //I want to create a class of circle and put it in a array
     circle(circleRandom.xlocation,circleRandom.yLocation ,50);
     
}