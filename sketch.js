var car,wall;
var speed,weight;



function setup() {
  createCanvas(800,400);
 
  speed=random(40,60)
  weight=random(1000,3500)

  car=createSprite(0,200,50,50);
 
  car.setCollider("rectangle",20,0,60,50)
  wall=createSprite(700,200,60,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
       car.shapeColor="red"
       text("Rate : D-",400,200)
    }
    if(deformation<180 && deformation>100){
       car.shapeColor="yellow"
       text("Rate : A-",400,200)
    }
    if(deformation<100) {
      car.shapeColor="green"
      text("Rate : B+",400,200)
    }
  }

  drawSprites();
}