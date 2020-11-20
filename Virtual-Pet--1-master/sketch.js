//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  dogIMG=loadImage("Dog.png")
  dogIMG=loadImage("dogImg.png")
  dogIMG=loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dogIMG=addImage(Dog.png);
  var firebase = datbase.ref('firebase');
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
  writeStock(foodStock);
}
if(keyWentDow(UP_ARROW)){
  writeStock(FoodS);
  dog.addImage(dogHappy);
}
  drawSprites();
 function readStock(data){
   foodS=data.val();
 }
 function writeStock(x){
   database.ref('/').update({
   Food:x
   } )
 }
 

}



