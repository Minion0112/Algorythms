var obj1,obj2;
var ob3,ob4;

function setup() {
  createCanvas(800,400);
 obj1 = createSprite(400, 200, 50, 50);
 obj2= createSprite(400,100,50,50);
ob3 = createSprite(400,300,20,20);
ob4 = createSprite(400,20,20,20);


obj1.shapeColor="green";
obj2.shapeColor="green";
ob3.shapeColor="blue";
ob4.shapeColor="blue";
ob3.velocityX=-3;
ob4.velocityX=3;
ob3.velocityY=-3;
ob4.velocityY=3;
}

function draw() {
  background(255,255,255);  
  
  
  obj2.x=mouseX;
  obj2.y=mouseY;
  console.log(obj1.x-obj2.x);
if(ob4.x-ob3.x<ob3.width/2+ob4.width/2 && ob3.x-ob4.x<ob3.width/2+ob4.width/2 ){
ob3.velocityX=ob3.velocityX*(-1);
ob4.velocityX=ob4.velocityX*(-1);
}
if(ob4.y-ob3.y<ob3.height/2+ob4.height/2 && ob3.y-ob4.y<ob3.height/2+ob4.height/2){
  ob3.velocityY=ob3.velocityY*(-1)
  ob4.velocityY=ob4.velocityY*(-1)
}


  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 && obj2.x-obj1.x<obj1.width/2+obj2.width/2 && obj1.y-obj2.y<obj1.height/2+obj2.height/2 &&obj2.y-obj1.y<obj1.height/2+obj2.height/2        ){
    obj1.shapeColor="red";
   
obj2.shapeColor="red";
  }else{
    obj1.shapeColor="green";
obj2.shapeColor="green";
  }  drawSprites();
}