
var wall;
//var redCar;
//var greenCar;
//var yellowCar;
var road1;
var speed;
var weight;
function preload(){
  wall1=loadImage("wall.png");
  redCar=loadImage("red car.png");
  greenCar=loadImage("green car.png");
  yellowCar=loadImage("yellow car.png");
 road1=loadImage("road.jpg");
}

function setup() {
  createCanvas(800,400);

  road=createSprite(400,200,800,400);
  road.addImage(road1);
  wall=createSprite(750, 300, 30, height/2);
  wall.addImage(wall1);
  wall.scale=0.9;

 // wall.shapeColor=color(80,80,80);
  //redCar=createSprite(150,130,10,10);
  //redCar.shapeColor="red";
  //greenCar=createSprite(150,190,10,10);
  //greenCar.shapeColor="green";
  //yellowCar=createSprite(150,250,10,10);
  //yellowCar.shapeColor="yellow";
  car=createSprite(50,270,50,50);
 
 speed=random(55,90);
 weight=random(400,1500);

}

function draw() {
 // background(0,0,0); 
  
  car.velocityX=speed;
  if (wall.x-car.x<(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if (deformation>180){
  //car.shapeColor=color(225,0,0);
  car.addIage(redCar);
}
if (deformation<180 && deformation>100){
 // car.shapeColor=color(230,230,0);
  car.addImage(yellowCar);
}
if (deformation<100){
//car.shapeColor=color(0,255,0);
car.addImage(greenCar);
}
}
  
  drawSprites();
}