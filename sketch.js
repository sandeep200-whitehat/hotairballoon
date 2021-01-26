var bg,database;
var balloonPosition;
var balloon,height;
var balloonimg
function preload(){
bg=loadImage("Hot Air Ballon-01.png")
balloonimg=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}


function setup() {
  createCanvas(800,650);
  database=firebase.database();
  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readHeight,showError)
  balloon=createSprite(250, 600, 50, 50);
  balloon.addAnimation("balloon",balloonimg)
  balloon.scale=0.5;

}

function draw() {
  background(bg);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  }
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
balloon.scale=balloon.scale-0.01;

  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
    balloon.scale=balloon.scale+0.01;
  }
  
  drawSprites();
}
function updateHeight(x,y){
  database.ref('balloon/height').set({
'x':updateHeight.x+x,
'y':updateHeight.y+y
  })
}
function readHeight(data){
  height=data.val();
  balloon.x=haight.x;
  balloon.y=height.y;
}
function showError(){
  console.log("Error in writing to the database")
}