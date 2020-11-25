var backgroundImage,backdrop,girl, girl1,boy,boy1,family,family1,coronagroup,Coronavirus,reset1,reset,covidGroup;


var PLAY = 1;
var END = 0;

var gameState = PLAY;

var gameOver,restart;

function preload(){
  backgroundImage = loadImage("Sprites/Background.jpg");
 girl = loadImage("Sprites/Girl.png");
 family1 = loadImage("Sprites/family2.png");
 coronagroup = loadImage("Sprites/Coronavirus2.png");
 //reset1 = loadImage("Sprites/Reset2.png");
 
 
}

function setup() {
  createCanvas(1200,800);
  backdrop = createSprite(600,400,1200,800);
  backdrop.addImage(backgroundImage);
  backdrop.scale = 3;

  family = createSprite(1100,600,20,20);
  family.addImage(family1);
  family.scale = 0.4;

  girl1 = createSprite(40,700,20,20);
  girl1.addImage(girl);
  girl1.scale = 0.5;

  //reset = createSprite(600,400,40,40);
  //reset.addImage(reset1);
  //reset.visibility = false;
  //reset.scale = 0.3;

 

   CovidGroup = new Group();
  //coronavirus = createGroup(45,600,20,20);
 // coronavirus.addImage(coronagroup);
  
  

 

}

function draw() {
 // background("pink");  
 
if(gameState = (PLAY)){
  if(keyDown("RIGHT_ARROW")){
    girl1.x = girl1.x+10;
  }
 
  if(keyDown("LEFT_ARROW")){
    girl1.x = girl1.x-10;
  }


}

if(CovidGroup.isTouching(girl1)){

  girl1.x = 0;
  //reset.visibility = true;
  
}



  CoronavirusCells();
  drawSprites();
}

function CoronavirusCells() {

 

    if (World.frameCount % 15 === 0) { 
      var Coronavirus = createSprite(200,0,20,20);  
       var rand = Math.round(random(1,4));
      Coronavirus.scale = 0.20;
      Coronavirus.x = Math.round(random(10,1200));
      Coronavirus.velocityY = 5;
      Coronavirus.lifetime = 145;
      Coronavirus.addImage(coronagroup);
      CovidGroup.add(Coronavirus);
    }
  
  
  
}
