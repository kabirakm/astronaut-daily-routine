var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bath;
function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png"); 
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  move = loadAnimation("images/move.png","move2,png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
}

function setup() {
  createCanvas(400, 400);
  iss = createSprite(400,400);
  iss.addImage("background",bg);


  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("M_KEY")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 5;
    astronaut.velocityY = 3;
  }

  createEdgeSprites();
}

function draw() {
  background(220);
  
  text("INSTRUCTIONS: ", 0,400);
  text("UP arrow = Brushing ",0,380);
  text("Down arrow = Gymming ",0,360);
  text("Left arrow = Eating ",0,340);
  text("Right arrow = Bathing ",0,320);
  text("m key = Moving ",0,300);
  
  drawSprites();
}
