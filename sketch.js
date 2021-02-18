var back,bImage;
var monkey , monkey_running,monkey_stop;
var banana,bananaImage,stone,stoneImage;;
var FoodGroup, stoneGroup;
var Score=0;
var gr;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){ 
bImage=loadImage("jungle.jpg");
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
monkey_stop=loadAnimation("sprite_0.png");  
  
bananaImage = loadImage("banana.png");
stoneImage = loadImage("obstacle.png");
    
FoodGroup=new Group();  
stoneGroup=new Group();
 
  
  
}



function setup() {
   createCanvas(400,400);
  back=createSprite(200,200);
  back.addImage("b",bImage);
  back.velocityX=-2;
  back.scale=0.80;

  monkey=createSprite(50,350,10,50);
  monkey.addAnimation("move",monkey_running);
  monkey.addAnimation("stop",monkey_stop);
  monkey.scale=0.10;
  
  gr=createSprite(50,370,700,10);
  gr.visible=false;
  
}


function draw() {
   background("white");
  if(gameState === PLAY){
  
   if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-15; 
   }
  
  monkey.velocityY=monkey.velocityY+0.5;
  
  if(gr.x<0){
  gr.x=gr.width/2;
  }
  if(FoodGroup.isTouching(monkey)){
     FoodGroup.destroyEach();
     Score=Score+2;  
  }
    if(back.x<0){
     back.x=200;
  }
  if(monkey.isTouching(stoneGroup)){
      gr.velocityX=0;
      monkey.scale=0.10;
      Score=0;
     
  }
    
  switch (Score){
    case 10:monkey.scale=0.12;
           break;
    case 20:monkey.scale=0.14;
           break;
    case 30:monkey.scale=0.16;
           break;       
    case 40:monkey.scale=0.18;
           break; 
           default:break;       
  }
  monkey.collide(gr);
  drawSprites();
  spawnBanana();
  spawnStone();
  fill("lightBlue");
  stroke("white");
  textSize(25);
  text("Score :" +Score,160,20);
  }
}

function spawnBanana(){
  if(frameCount%80==0){
  banana=createSprite(500,10,10,10);
  banana.addImage("ba",bananaImage)
  banana.scale=0.1;
  banana.velocityX=-4 
  banana.y=Math.round(random(120,200))
  banana.lifetime=150;
  FoodGroup.add(banana);
} 
}

function spawnStone(){
  if(frameCount%300==0){
  Stone=createSprite(500,350,10,10);
  Stone.addImage("st",stoneImage)
  Stone.scale=0.15;
  Stone.velocityX=-4 
  Stone.lifetime=150;
  stoneGroup.add(Stone);
} 
}
