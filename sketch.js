
//Max canvas bounds
var maxCanvas = {
    width: 1900,
    height: 750,
}



// Used only once
function setup(){
    frameRate(10);
    createCanvas(windowWidth, windowHeight);
   
    myCircle= new circleObj();
    myGameboi= new gameRect();
  




}

// constantly gets update depending on the frame rate. 
function draw(){

   myGameboi.show();
   myCircle.show();


    //The acutally circle being made ( in process)
    //I want to create a class of circle and put it in a array
    // circle(circleRandom.xlocation,circleRandom.yLocation ,50);
     
}