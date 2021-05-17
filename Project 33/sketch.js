const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg1;
var snow = [];

function preload() {
bg1 = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1400,800);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg1);  
  Engine.update(engine);
  if(frameCount%20 === 0){
    snow.push(new Snow(random(200, 400), random(50, 100), 10, 10))
  }
  for (var j = 0; j < snow.length; j++) { 
    console.log("snow display") 
    snow[j].display(); 
  }

}