const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,320,70,70);
    box2 = new Box(720,320,70,70);
    box3 = new Box(900,200,70,70);
    box4 = new Box(720,200,70,70);
    box5 = new Box(810,150,70,70);
    pig1 = new Pig(810,320,70,70);
    pig2 = new Pig(810,250,70,70);
    ground = new Ground(600,height,1200,20)
    bird = new Bird(100,100)
    log1 = new Log(810,250,260,PI/2)
    log2 = new Log(810,180,260,PI/2)
    log3 = new Log(850,100,130,-PI/7)
    log4 = new Log(770,100,130,PI/7)
}

function draw(){
    background(0);
    text(mouseX+ "," +mouseY,mouseX,mouseY)
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    ground.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
}