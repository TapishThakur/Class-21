var fixedRect,movingRect
var bounceRect1,bounceRect2

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 100, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  bounceRect1 = createSprite(50, 400, 50, 100);
  bounceRect1.shapeColor = "blue";
  bounceRect1.velocityX = 4; 
  bounceRect1.debug = true;

  bounceRect2 = createSprite(750, 400, 50, 100);
  bounceRect2.shapeColor = "blue";
  bounceRect2.velocityX = -4;
  bounceRect2.debug = true;
}

function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)) 
     {
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
     }
  else
  {
   movingRect.shapeColor = "green";
   fixedRect.shapeColor = "green"; 
  }

  if(isTouching(bounceRect1,bounceRect2)) 
     {
      bounceRect1.shapeColor = "red";
      bounceRect2.shapeColor = "red";
     }
     
  bounceOff(bounceRect1,bounceRect2)
  
  drawSprites();
}

function isTouching(object1,object2)
{
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2)
    {
     return true; 
    } 
  else
  {
   return  false;
  }
}

function bounceOff(object1,object2)
{
  if(object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
  {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  
  if(object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
} 