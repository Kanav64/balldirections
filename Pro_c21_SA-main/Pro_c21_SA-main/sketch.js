const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var upbutton
var rightbutton
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var options={
    restitution:1.2

  }
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 ball=Bodies.circle(100,200,20, options)
 World.add(world, ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);

  upbutton=createImg("up.png")
  upbutton.position(30,30)
  upbutton.size(30,30)
  upbutton.mouseClicked(verticalForce)

  rightbutton=createImg("right.png")
  rightbutton.position(350,30)
  rightbutton.size(30,30)
  rightbutton.mouseClicked(horizontalForce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 20)
  Engine.update(engine);
}

function verticalForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.02})
}

function horizontalForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
}