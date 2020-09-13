var num;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,paper,ground;
var slow;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

bin1 = new Bin(650,700,100,20);
bin2 = new Bin(700,700,20,100);
bin3 = new Bin(600,700,20,100);
paper = new Paper(150,100,30);
ground = new Bin(400,725	,850,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

press()

bin1.display()
bin2.display()
bin3.display()
paper.display()	

drawSprites();
 
}


function press(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:25,y:-15})
	}
}