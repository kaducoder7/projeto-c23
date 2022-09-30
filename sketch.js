



const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;


var engine, world, ball, ground, ground2, ground3, ground4;

var  Btn1;

var angle = 60;

var box1,box2;


function setup() {
  createCanvas(600,600);
//crie o mecanismo
    engine = Engine.create();
  //Adicione mundo ao mecanismo
  world = engine.world;
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01,
  }
   
   var ground_options ={
     isStatic: true
   };

   var ground2_options ={
    isStatic: true
   }

   var ground3_options ={
    isStatic: true
   }

   var ground4_options ={
    isStatic: true
   }
  
  
//crie o solo
  ground = Bodies.rectangle(200,550, 50,10, ground_options);
  ground2 = Bodies.rectangle(300,350,200,20, ground2_options);
  ground3 = Bodies.rectangle(100,350,200,20, ground3_options);
  ground4 = Bodies.rectangle(200,350,200,20, ground4_options);


//adicione ao mundo
World.add(world,ground);
World.add(world,ground2);
World.add(world,ground3);
World.add(world,ground4);



  ball = Bodies.circle(300,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200, 550, 350, 2000);
  ground2 = Bodies.rectangle(300,200,50,10);
  ground3 = Bodies.rectangle(100,350,100,20);
  ground4 = Bodies.rectangle(500,350,100,20);

  
  
  
  box1 = new Ground(300,200,100,25,"brown")
  box2 = new Ground(300, 200,20,100,"brown")
 
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("lightgreen");
  Engine.update(engine);

  Body.rotate(ground2,angle);

  push();

  translate(ground2.position.x,ground2.position.y);

  rotate(angle);

  rect(0,0,100,20);

  pop();

  angle +=0.1;

  
  
  

  ellipse(ball.position.x,ball.position.y,25);
  //escreva uma função de retângulo para exibir o solo.
 
  rect(ground.position.x,ground.position.y,35000,20);
  rect(ground3.position.x,ground3.position.y,150,20);
  rect(ground4.position.x,ground4.position.y,150,20);
 
  

 

  box1.show();
  box2.show();
  
  
  
}

