
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground1,ground2,ground3,ground4;
var dust1,dust2,dust3;
var time,a,b;

function setup() {
	createCanvas(1370,625);

    
	engine = Engine.create();
	world = engine.world;

  paper = new Paper(200,520,20);
  ground1 = new Ground(685,615,1370,20);
  ground2 = new Ground(10,313,20,625);
  ground3 = new Ground(685,10,1370,20);
  ground4 = new Ground(1360,313,20,625);
	
	dust1 = new Dustbin(1170,600,250,15);
	dust2 = new Dustbin(1052,543,15,100);
  dust3 = new Dustbin(1288,543,15,100);
  
  time = 15;

	Engine.run(engine);

}


function draw() 
{
  rectMode(CENTER);
  background(0);
  keyPressed();
  
  drawSprites();
  
  paper.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  dust1.display();
  dust2.display();
  dust3.display();

  if(keyCode === UP_ARROW||keyCode === DOWN_ARROW||keyCode === RIGHT_ARROW||keyCode === LEFT_ARROW || keyCode === 89 || keyCode === 78)
  {

  }
  else 
  {
    textSize(30);
    text("Click on up arrow once to go upwards",100,150)
    text("Click on down arrow once to go downwards",100,250);
    text("Click on right arrow once to go rightwards",700,150);
    text("Click on left arrow once to go to leftwards",700,250);
	  text("Your work is to clean the city",100,350);
    text("Put the paper ball into the dustbin",700,350);
    text("Out of 15 sec, 5 sec to read",100,450);
    text("10 sec to put the ball in basket",700,450);
  }
  fill("red");
  textSize(50);
  if(time >= 1)
  {
  text(" Time : " + time,585,80);
  }

  if(frameCount % 30 == 0)
  {
    time = time - 1;
  }
  if(time <= 0)
  {
    time = 0;
    if(keyCode === 89 && time == 0 || keyCode === 78)
    {  
    }
    else
    {
      text("I am giving you a chance, Answer honestly",170,200);
      text("Have you put the paper in the dustbin?",200,300);
      text("YES(Press Y to continue)",100,450);
      text("NO(Press N to continue)",750,450);
    }
    if(keyCode === 78 && time == 0 || keyCode === 89)
    {
    }
    else
    {
      text("I am giving you a chance, Answer honestly",170,200);
      text("Have you put the paper in the dustbin?",200,300);
      text("YES(Press Y to continue)",100,450);
      text("NO(Press N to continue)",750,450);
    }
    if(keyCode === 89 && time == 0)
    {
      text("YOU HAVE WON AND CLEANED THE CITY!",200,200);
      text("THANK YOU VERY MUCH",350,300);
    }
    if(keyCode === 78 && time == 0 )
    {
      text("YOU HAVE LOST AND THE CITY REMAINS UNCLEANED",20,200);
    }
  }
  
  if(time <= 10 && time >0)
  {
    text("Ball",150,400);
    text("⬇",165,445);
    text("DUSTBIN",1060,400);
    text("⬇",1150,445);
  }
 
}
function keyPressed()
{
if(keyCode === UP_ARROW && time <= 10  && time > 0)
{

	Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:-20});
}
if(keyCode === DOWN_ARROW && time <= 10  && time > 0)
{

	Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:20});
}
if(keyCode === RIGHT_ARROW && time <= 10  && time > 0) 
{

	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:0});
}
if(keyCode === LEFT_ARROW && time <= 10  && time > 0)
{

	Matter.Body.applyForce(paper.body,paper.body.position,{x:-20,y:0});
}
}
