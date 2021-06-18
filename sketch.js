var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var Edges;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    edges =  createEdgeSprites();

    //create 4 different surfaces
    surface1 = createSprite(700,570,190,20);
    surface1.shapeColor = "red";    
    surface2 = createSprite(500,570,190,20);
    surface2.shapeColor = "yellow";
    surface3 = createSprite(300,570,190,20);
    surface3.shapeColor = "blue";
    surface4 = createSprite(100,570,190,20);
    surface4.shapeColor = "green";
    //create box sprite and give velocity
    box = createSprite(random(20,750),70,30,30);
    box.shapeColor = "white";
    box.velocityY = 3;
    box.velocityX = 3;
}

function draw() {
    background(rgb(169,169,169));

   
    box.bounceOff(edges);
   // box.bounceOff(rightEdge);
   // box.bounceOff(topEdge);
   // box.bounceOff(bottomEdge);

    //add condition to check if box touching surface and make it box

    if (surface1.isTouching(box) ){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.play();
    }
    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if (surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
         music.stop();
    }
    if (surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "green";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    drawSprites();
}
