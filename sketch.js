var mouse;
var cat;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    mouse1=loadAnimation("images/mouse1.png")
    mouse2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouse3=loadAnimation("images/mouse4.png")
    cat1=loadAnimation("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadAnimation("images/cat4.png")
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(100,600)
    mouse.addAnimation("mousesitting",mouse1)
    mouse.scale=0.2
    cat=createSprite(870,600)
    cat.addAnimation("catsitting",cat1)
    cat.scale=0.2

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catLastImage",cat3)        
    cat.changeAnimation("catLastImage")
    cat.x=300
    cat.scale=0.2
}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouse2);
      mouse.changeAnimation("mouseTeasing")
      mouse.frameDelay = 25;

      cat.velocityX = -5
      cat.addAnimation("catTeasing",cat2)
      cat.changeAnimation("catTeasing")
      cat.frameDelay = 25;
  
  }


}
