var spacebgImg;
var issImg,iss;
var spacecraftImg,spacecraft2Img,spacecraft3Img,spacecraft;
var hasDocked = false;

function preload(){
spacebgImg = loadImage("./assets/spacebg.jpg");
issImg = loadImage("./assets/iss.png");
spacecraftImg = loadImage("./assets/spacecraft1.png")
spacecraft1Img = loadImage("./assets/spacecraft2.png");
spacecraft2Img = loadImage("./assets/spacecraft3.png");
spacecraft3Img = loadImage("./assets/spacecraft4.png");
}

function setup() {
  createCanvas(1360,630);
  spacecraft = createSprite(640,440);
  spacecraft.addImage("spacecraft",spacecraftImg);
  spacecraft.scale = 0.27; 

  iss = createSprite(700,350,100,100);
  iss.addImage(issImg);

}

function draw() {
  background(189); 
  image(spacebgImg,0,0,width,height);
  
  if(!hasDocked){
     spacecraft = Math.round(random(width,height));

       if(keyIsDown(LEFT_ARROW)){
        spacecraft.changeAnimation(spacecraft2Img);
        spacecraft.velocityX -= 5;
       }
       if(keyIsDown(RIGHT_ARROW)){
        spacecraft.changeAnimation(spacecraft3Img);
        spacecraft.velocityX += 5;
       }
       if(keyIsDown(DOWN_ARROW)){
        spacecraft.changeAnimation(spacecraft1Img);
       }
       if(keyIsDown(UP_ARROW)){
        spacecraft.velocityY -= 5;
       }
     }

     if(hasDocked === true){
       if(spacecraft.isTouching(iss)){
         textSize(20);
         stroke (5);
         text("Docking Successfull!",1200,560);
       }
     }
  
  drawSprites();
}