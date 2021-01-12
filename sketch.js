
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 100, 600, 40);
	bobObject1 = new Bob(200, 600, 50)
	//rope1 = new Rope(bobObject1, roofObject.body, -bobDiameter*2, 0)
	bobObject2 = new Bob(300, 600, 50)
	//rope2 = new Rope(bobObject2, roofObject.body, -bobDiameter*2, 0)
	bobObject3 = new Bob(400, 600, 50)
	//rope3 = new Rope(bobObject3, roofObject.body, -bobDiameter*2, 0)
	bobObject4 = new Bob(500, 600, 50)
	//rope4 = new Rope(bobObject4, roofObject.body, -bobDiameter*2, 0)
	bobObject5 = new Bob(600, 600, 50)
	//rope5 = new Rope(bobObject5, roofObject.body, -bobDiameter*2, 0)

	

	Engine.run(engine);
  
}


function draw() {
  background(0);  

Engine.update(engine);

roof.display(0);
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
//rope1.display();


}
