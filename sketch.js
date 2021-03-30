var ball,rope,ground,b1,b2,b3,b4,b5
var bg


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
  bg = loadImage("bg.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
ground = new Ground(100,600,2000,20)
ball = new Ball(200,200,80,80)
//rope = new Rope(ball.body,{x:500,y:50})
b1 = new Building(900,100,500,200)
b2 = new Building(900,100,500,200)
b3 = new Building(900,100,500,200)
b4 = new Building(900,100,500,200)
b5 = new Building(900,100,500,200)
  

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  ball.display();
 // rope.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  
  


}


function mouseDragged() {
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


