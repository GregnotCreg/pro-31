const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
var canvus = createCanvas(500,700);

engine = Engine.create();
world = engine.world;

for(var i = 0; i < maxDrops; i++){
    drops.push(new createDrops(random(0,500), random(0,500)));
}    
}

function draw(){
Engine.update(engine);    
background(night);


rand = Math.round(random(1,4));

for(var i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
}

drawSprites();
}   

