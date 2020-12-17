const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine;

function setup(){
createCanvas(1200,500)

engine=Engine.create();
world = engine.world;



ball1= new Ball(100,200,50,50)
wall1=new Rope (ball1.body,{x:250,y:50})

ball2= new Ball(100,200,50,50)
wall2=new Rope (ball2.body,{x:320,y:50})

ball3= new Ball(100,200,50,50)
wall3=new Rope (ball3.body,{x:400,y:50})

ball4= new Ball(100,200,50,50)
wall4=new Rope (ball4.body,{x:480,y:50})

ball5= new Ball(100,200,50,50)
wall5=new Rope (ball5.body,{x:550,y:50})

log1=new line1 (400,50,450,20)

}

function draw(){

background(0)
Engine.update(engine);


wall1.display();
ball1.display();

wall2.display();
ball2.display();

wall3.display();
ball3.display();

wall4.display();
ball4.display();

wall5.display();
ball5.display();

log1.display();

}