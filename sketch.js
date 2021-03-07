const Engine = Matter.Engine 
const Bodies = Matter.Bodies
const World = Matter.World

var engine, world, ground;

function setup() {
  createCanvas(400 ,800);
engine = Engine.create()
world = engine.world

var ball_options = {
restitution:100
}
var ground_options = {
  isStatic:true
}
 ball = Bodies.circle(200, 100, 20, ball_options)
World.add(world,ball)
ground = Bodies.rectangle(200, 780, 380, 20, ground_options)
World.add(world,ground)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x, ground.position.y, 380, 20)
 ellipseMode(RADIUS) 
 ellipse(ball.position.x, ball.position.y, 20, 20)
}