const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimage;
var snake,snakeimage;
var playerCount=0;
var gameState=0;
var snake1,snake2,snakes;
var form,player,game;
var allPlayers
var apple,appleimage,appleGroup;
var Score=0;
var appleeaten=true
var bodyimage,body;
var  snakebody1;
var x,y;
var snakebodies=[]
var snakebodyimage;

function preload(){
  bgimage=loadImage("images/bg.png")
  snakeimage=loadImage("images/sahaj 1.png")
  appleimage=loadImage("images/mainapple.png")
  bodyimage=loadImage("images/sahaj 1.png","body.png");
  snakebodyimage=loadImage("images/snakebody.png")
}

function setup(){
   createCanvas(1000,1000)
   edges=createEdgeSprites();
   database = firebase.database();
   engine = Engine.create();
   world = engine.world;
   game = new Game();
   game.getState();
   game.start();
   appleGroup=new Group()
}

function draw(){
     background(255);
     Engine.update(engine);
     if(playerCount === 2){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    
     
    // if(snake.isTouching(edges)){
     //  text("Game Over",500,500)
   //  }
   
}

function spwanApple(){
   if(frameCount%50=== 0 && appleeaten===true){
     appleeaten=false
     apple=createSprite(random(10,950),random(10,950),10,10)
     apple.addImage(appleimage)
     apple.scale=0.1
     appleGroup.add(apple)
   }
}

function keyPressed(){
  
}