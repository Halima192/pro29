const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world; 

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;
var block2;

function preload() {

}

function setup(){
   
    engine = Engine.create();
    world = engine.world;
 createCanvas(1200,400);
    ground=new Ground();
stand1=new Ground(380,300,270,10)
stand2=new Ground(700,200,200,10)
block1=new Block (280,275,30,40)
block2=new Block(280,275,30,40);


}

function draw(){
    
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
    block2.display();
    block1.display();
}