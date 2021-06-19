var mole,moleImg;
var bug,bugImg,bugGroup;
var bug1,bug2,bug3,bug4,bug5,bug6,bug7;
var score = 0
var limit = 0

function preload(){
  moleImg = loadImage("mole2.png");
  bugImg = loadImage("bug.png");

}

function setup(){
  createCanvas(400,400);
  mole = createSprite(200,190,400,400);
  mole.addImage("mole1",moleImg);
  mole.scale = 1;
  bugGroup = new Group()
}

function draw(){
  background("pink");
  
  if(mouseIsPressed && limit===0){
  bug = createSprite(210,200,400,400);
  bug.addImage("bug1",bugImg);
  bug.scale = 0.1;
  limit = 1;
  bugGroup.add(bug);
  
  }
  
  if(mousePressedOver(bug) && limit===1){
  bugGroup.destroyEach();
  bug1 = createSprite(190,118,400,400);
  bug1.addImage("bug1",bugImg);
  bug1.scale = 0.1;
  score = score+1;
  limit = 2;
  bugGroup.add(bug1);
  
  }
  
  if(mousePressedOver(bug1) && limit===2){
    bugGroup.destroyEach();
  bug2 = createSprite(68,76,400,400);
  bug2.addImage("bug1",bugImg);
  bug2.scale = 0.1;
  score = score+1;
  limit = 3;
  bugGroup.add(bug2);
  
  }
  
  if(mousePressedOver(bug2) && limit===3){
  bugGroup.destroyEach();
  bug3 = createSprite(345,250,400,400);
  bug3.addImage("bug1",bugImg);
  bug3.scale = 0.1;
  score = score+1;
  limit = 4;
  bugGroup.add(bug3);
  
  }
  
  if(mousePressedOver(bug3) && limit===4){
  bugGroup.destroyEach();
  bug4 = createSprite(60,176,400,400);
  bug4.addImage("bug1",bugImg);
  bug4.scale = 0.1;
  score = score+1;
  limit = 5;
  bugGroup.add(bug4);
  
  }
  
  if(mousePressedOver(bug4) && limit===5){
  bugGroup.destroyEach();
  bug5 = createSprite(325,100,400,400);
  bug5.addImage("bug1",bugImg);
  bug5.scale = 0.1;
  score = score+1;
  limit = 6;
  bugGroup.add(bug5);
  
  }
  
  if(mousePressedOver(bug5) && limit===6){
    bugGroup.destroyEach();
  bug6 = createSprite(127,279,400,400);
  bug6.addImage("bug1",bugImg);
  bug6.scale = 0.1;
  score = score+1;
  limit = 7;
  bugGroup.add(bug6);
  
  }
  
  if(mousePressedOver(bug6) && limit===7){
    bugGroup.destroyEach();
  bug7 = createSprite(210,200,400,400);
  bug7.addImage("bug1",bugImg);
  bug7.scale = 0.1;
  score = score+1;
  limit = 8;
  bugGroup.add(bug7);
  
  }
  
  if(mousePressedOver(bug7) && limit===8){
    bugGroup.destroyEach();
    bug8 = createSprite(360,160,400,400);
    bug8.addImage("bug1",bugImg);
    bug8.scale = 0.1;
    score = score+1;
    limit = 9;
    bugGroup.add(bug8);
  
  }
  drawSprites();
  textSize(20);
  fill("red");
  text(mouseX+","+mouseY,mouseX,mouseY)
  text("score: " +score,50,20)
}