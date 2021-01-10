
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope1,bobDiameter,rope2,rope3,rope4,rope5;

bobDiameter=40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,500,90,90);
	bob2 = new Bob(290,500,90,90);
	bob3 = new Bob(380,500,90,90);
	bob4 = new Bob(470,500,90,90);
	bob5 = new Bob(560,500,90,90); 
	roof = new Roof(385,100,500,50);
	rope1= new Rope(bob1.body,roof.body,-bobDiameter*4.6,0);
	rope2= new Rope(bob2.body,roof.body,-bobDiameter*2.4,0);
	rope3= new Rope(bob3.body,roof.body,-bobDiameter*0.1,0);
	rope4= new Rope(bob4.body,roof.body,bobDiameter*2.3,0);
	rope5= new Rope(bob5.body,roof.body,bobDiameter*4.5,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("red");

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}