var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var red, blue, green
var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  red = createSprite(100, 50)
  red.scale = 0.1
   red.velocityX = 3

       green = createSprite(100, 130)
     green.scale = 0.1
     green.velocityX = 3

     blue = createSprite(100, 200)
     blue.addImage(blue_balloonImage);
     blue.scale = 0.1
     blue.velocityX = 3

     pink = createSprite(100,290)
     pink.addImage(pink_balloonImage);
     pink.scale = 1.3
     pink.velocityX = 3
     
       
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  var num = Math.round(random(1,4));
  switch(num){
    case 1: //chamar o balão vermelho
    //green.addImage(red_balloonImage)
    break;
    case 2: // chamar o balão azul
   // red.addImage(blue_balloonImage)
    break;
    case 3: // chamar o balão verde
   // red.addImage(green_balloonImage)
    break;
    case 4: // chamar o balão rosa
    //red.addImage(pink_balloonImage)
    break;
    default:break;
  }
    
  drawSprites();
  redBalloon()
  blueBalloon()
  greenBalloon()
 // pinkBalloon()
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function redBalloon() {
  if(frameCount % 100 === 40 ){
 var y = Math.round(random(20,400)) ;
 red = createSprite(100, y)
 red.velocityX = 3
  red.addImage(red_balloonImage);
   red.lifetime = 150;
  red.scale = 0.1;
  }
}

function blueBalloon() {
  if(frameCount % 100 === 30 ){
    var y = Math.round(random(20,400)) ;
    blue = createSprite(100, y)
     blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  }
}

function greenBalloon() {
  if(frameCount % 100 === 0 ){
    var y = Math.round(random(20,400)) ;
    green = createSprite(100, y)
   green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  }
}

function pinkBalloon() {
  if(frameCount % 100 === 20 ){
    var y = Math.round(random(20,400)) ;
    pink = createSprite(100, y)
  pink.addImage(pink_balloonImage);
  pinke.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
  }
}
