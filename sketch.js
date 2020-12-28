
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(1000,300);
  monkey = createSprite(100,250,10,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
ground = createSprite(500,250,1000,20);
FoodGroup = createGroup();
obstacleGroup = createGroup();

  
}


function draw() {
  background("white");
  if(keyDown("space")&&monkey.y>=50){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);


  
 obstacle();
  banana();
  console.log(Math.round(frameCount))
  ground.velocityX = -5;
  
  if(ground.x < 500){
    ground.x = ground.width/2;
  
  }
  textSize(20);
  survivalTime = Math.round(frameCount/frameRate())
  text("survivalTime"+survivalTime,400,50)
  drawSprites();

  
}
function obstacle(){
  if(frameCount % 300=== 0){
    var obstacle = createSprite(1000,200,10,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
    
  }
}
function banana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(1000,20,10,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.y = Math.round(random(120,200));
    FoodGroup.add(banana)
  }
}





