var background,backgroundImg;
var iss,issImg;
var spaceCraft,spaceCraftImg1,spaceCraftImg2,spaceCraftImg3,spaceCraftImg4;
var hasDocked=false;














function preload(){

  backgroundImg=loadImage("spacebg.jpg");
 spaceCraftImg1=loadImage("spaceCraft1.png");
 spaceCraftImg2=loadImage("spaceCraft2.png");
 spaceCraftImg3=loadImage("spaceCraft3.png");
 spaceCraftImg4=loadImage("spaceCraft4.png");
 issImg=loadImage("iss.png");
}


function setup() {
  createCanvas(1200,600);
  
  spaceCraft=createSprite(600,500,30,30);
  spaceCraft.addImage(spaceCraftImg1);
  spaceCraft.scale=0.23;
  
  iss=createSprite(600,200,30,30);
  iss.addImage(issImg);
  iss.scale=1;

  hasDocked=createSprite(600,300,10,10);
  hasDocked.visible=false;
}

function draw() {
  background( backgroundImg);

  if(!hasDocked){
    spaceCraft.x=Math.round(random( spaceCraft.x-1));
    
  
 
  if(keyIsDown(UP_ARROW)){
     spaceCraft.y=spaceCraft.y-1;
     
  } 
  if(keyIsDown(DOWN_ARROW)){
    spaceCraft.y=spaceCraft.y+1;
     
 } 
 if(keyIsDown(RIGHT_ARROW)){
  spaceCraft.x=spaceCraft.x+1;
  spaceCraft.addImage(spaceCraftImg4);
} 
if(keyIsDown(LEFT_ARROW)){
  
  spaceCraft.x=spaceCraft.x-1;
  spaceCraft.addImage(spaceCraftImg3);
} 

}
  
  if(spaceCraft.x === 300 && spaceCraft.y === 280){
    hasDocked = true;
    spaceCraft.addImage(spaceCraft2Img);
    fill("red");
    textSize(40)
    text("docking is successfull",600,400);
  }
  drawSprites();
}