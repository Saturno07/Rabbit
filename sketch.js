var rabbit;
var apple;
var leaf;
var leaf1;
var pared1;
var pared2;

function preload(){
  
  rabbit_cute = loadImage  ("rabbit.png");
  apple_moving = loadImage ("apple.png");
  leaf_green = loadImage ("leaf.png");
  leaf1_green = loadImage ("leaf.png");
  forest_forest = loadImage ("forest.jpg");
}

function setup(){
  createCanvas(400,400);
  
  createEdgeSprites();
  
  rabbit = createSprite(200,350,20,50);
  rabbit.addImage("cute", rabbit_cute);
  rabbit.scale = 0.05;

  apple = createSprite(40,200,400,10);
  apple.addImage("moving", apple_moving);
  apple.y = apple.width/8;
  apple.scale=0.1;
  
  apple1 = createSprite(380,200,400,10);
  apple1.addImage("moving", apple_moving);
  apple1.y = apple.width/8;
  apple1.scale=0.1;
  
  leaf = createSprite(280,260,400,10);
  leaf.addImage("green",leaf_green);
  leaf.y = leaf.width/8;
  leaf.scale=0.1;
  
  leaf1 = createSprite(180,300,400,10);
  leaf1.addImage("green",leaf1_green);
  leaf1.y = leaf1.width/8;
  leaf1.scale=0.14;
  
  pared1= createSprite(400,190,10,400);
  pared1.visible=false;
  
  pared2= createSprite(0,190,10,400);
  pared2.visible=false;
  
  forest = createSprite(200,200,400,400);
  forest.addImage("forest",forest_forest);
  
}

function draw() {
  background("withe");
  drawSprites();

  rabbit.y= 330;
  rabbit.x= mouseX;
  
  if(apple.y>400 ){
  apple.y = apple.width/8;
  }
  
  if(apple1.y>400 ){
  apple1.y = apple1.width/8;
  }
  
  if(leaf.y>400 ){
  leaf.y = leaf.width/8;
  }
  
  if(leaf1.y>400 ){
  leaf1.y = leaf1.width/8;
  }
  
  apple.velocityY = 3;
  apple1.velocityY = 2;
  leaf.velocityY = 3;
  leaf1.velocityY = 2;
  leaf1.depth = rabbit.depth;
  leaf.depth = rabbit.depth;
  apple1.depth = rabbit.depth;
  apple.depth = rabbit.depth;
  rabbit.depth = rabbit.depth+1;
  
  rabbit.bounceOff(pared1);
  rabbit.bounceOff(pared2);

}
