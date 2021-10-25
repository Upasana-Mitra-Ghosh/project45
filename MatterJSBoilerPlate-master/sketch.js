
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tramp ,girl,chocklet, invis,uinvis
var girlimg,trampimg,chockletimg;
var score=0;
var chokoGroup
function preload()
{
	girlimg =  loadImage("girl.png.png");
	chockletimg=loadImage("candy.png.jpg");
	trampimg=loadImage("trampolin.png.jpg")

}

function setup() {
	createCanvas(800, 700);
	tramp = createSprite(150,650,30,40)
	tramp.addImage(trampimg)
	tramp.scale=.6
invis = createSprite(150,670,30,40);
invis.visible=false

uinvis = createSprite(400,10,800,10)
uinvis.visible=false
girl=createSprite(150,600,30,40);
girl.addImage(girlimg)
girl.scale=.24
chokoGroup=new Group()


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	girl.velocityY=2;
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  girl.bounceOff(invis);
  girl.bounceOff(uinvis);
  
  ch();

  if(chokoGroup.isTouching(girl))
  {

	score=score+1;

  }
  text("Score"+score,720,20)

  
  drawSprites();
 
}
function ch()
{
    if(frameCount%60===0)
	{
       var cha =  createSprite(750,30,20,20);
       cha.addImage(chockletimg)
	   cha.scale=.025

	   cha.velocityX=-2;
	   cha.lifrtime=400;
	   chokoGroup.add(cha)


	}

}



