var fixedRect,fR1,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fR1 = createSprite(100, 200, 50, 30);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(isTouching(movingRect,fixedRect))
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else if (isTouching(movingRect,fR1))
{movingRect.shapeColor = "black";
fR1.shapeColor = "black";
}

else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";
fR1.shapeColor = "green";
}
  drawSprites();
}
