var cat,catImage,catImage1,catImage2;
var rat,ratImage,ratImage1,ratImage2;
var bg;

function preload() {
    //load the images here
    catImage=loadAnimation("images/tomOne.png");
    ratImage=loadAnimation("images/jerryOne.png");
    catImage1=loadAnimation("images/tomTwo.png","images/tomThree.png");
    ratImage1=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    catImage2=loadAnimation("images/tomFour.png");
    ratImage2=loadAnimation("images/jerryFour.png");
    bg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,700);
cat.addAnimation("catSleeping",catImage);
cat.scale=0.1
rat=createSprite(200,700);
rat.addAnimation("ratStanding",ratImage);
rat.scale=0.1;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x-rat.x<(cat.width-rat.width)/2) {
       cat.velocityX=0;
       cat.scale=0.4;
       cat.addAnimation("catLast",catImage2);
       cat.changeAnimation("catLast",catImage2);
       rat.addAnimation("ratLast",ratImage2);
       rat.changeAnimation("ratLast",ratImage2);
    }
    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW) {
    cat.velocityX=-3;
    cat.addAnimation("catRunning",catImage1);
    cat.changeAnimation("catRunning",catImage1);
    rat.addAnimation("ratTeasing",ratImage1);
    rat.changeAnimation("ratTeasing",ratImage1);
}
  //For moving and changing animation write code here


}
