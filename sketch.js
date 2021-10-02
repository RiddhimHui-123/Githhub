
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,box1,box2,box3;
function setup(){
 
  engine = Engine.create();
  world = engine.world;
  box1=Bodies.circle(800,50,60);
 
box2=Bodies.rectangle(700,200,100,50)
World.add(world,[box1,box2])


}
function draw()
{
  
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  fill ("skyBlue")
    rect(200,200,50,50);
  fill ("cyan")
  circle(box1.position.x,box1.position.y,60)
  fill ("purple")
  rect(box2.position.x,box2.position.y,100,50)




}
