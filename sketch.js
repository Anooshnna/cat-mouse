var cat,catA1,catA2,catA3;
var mouse,mouseA1,mouseA2,mouseA3;
var garden,gardenimg
var gameState
PLAY = 1
var PLAY
function preload() {
   catA1 = loadAnimation("images/cat1.png");
   mouseA1 = loadAnimation("images/mouse1.png");
   gardenimg = loadImage("images/garden.png");
   catA2 = loadAnimation("images/cat2.png","images/cat3.png");
   mouseA2 = loadAnimation("images/mouse2.png","images/mouse3.png")
   catA3 = loadAnimation("images/cat4.png");
   mouseA3 = loadAnimation("images/mouse4.png")
   
}


function setup(){
    createCanvas(1000,800);
    garden = createSprite(100,200);
    garden.addImage(gardenimg);
    garden.scale = 0.5
   
    mouse = createSprite(30,300,10,10)
    mouse.addAnimation("tease",mouseA1)
    mouse.addAnimation("teasing",mouseA2)
    mouse.addAnimation("tease2",mouseA3)
    mouse.scale = 0.08
    
    cat = createSprite(280,300,10,10)
    cat.addAnimation("run",catA1)
    cat.addAnimation("running",catA2)
    cat.addAnimation("run2",catA3)
    cat.scale = 0.09
}

function draw() {

    background(255);

  
      keyPressed();
      cat.setCollider("circle",0,0,40)
      cat.debug = true
      
      if(mouse.isTouching(cat)){
        mouse.changeAnimation("tease2",mouseA3)
        cat.addAnimation("run2",catA3)
        cat.changeAnimation("run2")
        cat.velocityX = 0
      }
      
    
   
    drawSprites();
}


function keyPressed(){

  if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("tease",mouseA2);
    mouse.scale = 0.08
    cat.changeAnimation("running",catA2)
    cat.scale = 0.09
    cat.velocityX = -2
   
  }


}































