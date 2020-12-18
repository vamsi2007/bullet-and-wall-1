var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(233,321);
  weight = random(30,50);
  thickness = random(20,80);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = ("white");
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;
  bullet.debug = true;
wall.debug = true;
  

if(hasCollided(bullet,wall)){
  
     bullet.velocityX = 0;


var  deformation = 0.5 * speed *speed * weight/(thickness*thickness*thickness);  
  
   if  (deformation < 10){
    wall.shapeColor = ("red");
   }
   
   if (deformation > 10){
    wall.shapeColor = ("green");
  }
   

}
      
    drawSprites();

   
}

function hasCollided(bullet,wall){
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x

   if (bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false;
}