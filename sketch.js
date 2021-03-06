
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200, 140,30);
	mango3=new mango(950,120,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1000,150,30);
	mango6=new mango(1050,90,30);
	mango7=new mango(950,200,30);
	mango8=new mango(1200,200,30);

a = new stone(220, 320, 25);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	chaine = new chain(a.body, {x:240, y: 420})
	

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  a.display();
chaine.display();
  groundObject.display();
}
function mouseDragged (){
	Matter.Body.setPosition(a.body, {x: mouseX , y: mouseY}	)
}
function mouseReleased(){
	chaine.fly();
}
function keyPressed(){
	if(keyCode ===32){
		
		chaine.attach(a.body);
	}
}
