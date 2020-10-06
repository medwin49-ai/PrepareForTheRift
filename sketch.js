var circleRandom = {
    xLocation: 0,
    yLocation: 0
}

function colorRandomValues(){
  return Math.floor(Math.random() * 255 ) - 255;
}

var maxCanvas = {
    width: 1800,
    height: 600,
}

function setup(){
    frameRate(10);
    createCanvas(maxCanvas.width, maxCanvas.height);
    background(0);
}

function draw(){

   
     circleRandom.xlocation = random(0,maxCanvas.width);
     circleRandom.yLocation = random(0, maxCanvas.height);
     fill(colorRandomValues,colorRandomValues,colorRandomValues);
    noStroke();
     circle(circleRandom.xlocation,circleRandom.yLocation ,50);
     
}