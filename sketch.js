var x=200;
var os=0
var loops=5;
var snakelinenumber=0;
var score=1;
var play=false;
function setup(){
snakeline=createGroup();
snakehead=createSprite(200,200,10,10)
screen=createSprite(200,200,400,400)
screen.visible=false;
apple=createSprite(random(25,375),random(25,375),20,20)
apple.shapeColor="red"
snakehead.shapeColor="yellow"
}
function draw(){
background("blue");
if (play==false){
fill("black")
textAlign(CENTER)
textSize(30)
text("Snake",200,100)
textSize(20)
text("Press p to play",200,200)
if (keyDown("p")){snakehead.velocityX=1;play=true;}
}else{
fill("black")
textAlign(CENTER)
textSize(30)
if (score>1){
text("Score:"+(score-1)/2,65,30)}else{text("Score:"+0,65,30)}
drawSprites();
snakelinecrt();
controls();
if(snakehead.isTouching(snakeline)){window.alert("Your final score is:"+(score-1)/2);if(eee==eee){}}
if(snakehead.y>400){snakehead.y=0}
if(snakehead.y<0){snakehead.y=400}
if(snakehead.x>400){snakehead.x=0}
if(snakehead.x<0){snakehead.x=400}
if (snakehead.isTouching(apple)){
apple.destroy();
apple=createSprite(random(25,375),random(25,375),20,20)
apple.shapeColor="red"
score+=2;
}
if (snakeline.isTouching(apple)){
apple.destroy();
apple=createSprite(random(25,375),random(25,375),20,20)
apple.shapeColor="red"
}
}
}
function screentest(screen,snakeline){
if (Math.abs(past.x-snakeline.x)<15){
if (Math.abs(past.y-snakeline.y)<15){
stroke(68,255,0)
strokeWeight(3)
line(snakeline.x,snakeline.y,past.x,past.y)
past.destroy();}}
past=createSprite(snakeline.x,snakeline.y,10,10);
past.visible=false;
}
function snakelinecrt(){
swap=createSprite(snakehead.x,snakehead.y,10,10);
if (os%2==0){swap.shapeColor="green"}else{swap.shapeColor="purple"}
if (snakehead.velocityX==1){swap.x=swap.x-10}
if (snakehead.velocityX==-1){swap.x=swap.x+10}
if (snakehead.velocityY==1){swap.y=swap.y-10}
if (snakehead.velocityY==-1){swap.y=swap.y+10}
if (snakehead.isTouching(swap)){
if(snakehead.x>swap.x){snakehead.x=snakehead.x+8}
if(snakehead.x<swap.x){snakehead.x=snakehead.x-8}
if(snakehead.y>swap.y){snakehead.y=snakehead.y+8}
if(snakehead.y<swap.y){snakehead.y=snakehead.y-8}
}
swap.life=score-snakelinenumber
snakeline.add(swap)
if(snakelinenumber=>score){snakelinenumber=0;}
if(os>score){os=0;}
os++;
snakelinenumber++;}
function controls(){
if (snakehead.velocityX==1){}else{
if(keyDown("LEFT_ARROW")){snakehead.velocityX=-1;snakehead.velocityY=0}}
if (snakehead.velocityX==-1){}else{
if(keyDown("RIGHT_ARROW")){snakehead.velocityX=1;snakehead.velocityY=0}}
if (snakehead.velocityY==1){}else{
if(keyDown("UP_ARROW")){snakehead.velocityY=-1;snakehead.velocityX=0}}
if (snakehead.velocityY==-1){}else{
if(keyDown("DOWN_ARROW")){snakehead.velocityY=1;snakehead.velocityX=0}}}
