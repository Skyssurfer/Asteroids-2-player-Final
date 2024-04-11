var screen = 0
var ship;
var ship2;
var asteroids = [];
var asteroids2 = [];
var asteroids3 = [];
var lasers = [];
var lasers2 = [];
var timerValue = -3;

let x = 0;
let sound1, sound2, sound3, sound4, sound5;

function preload(){
  
  sound1 = loadSound("Crash.mp3");
  sound2 = loadSound("Laser.mp3");
  sound3 = loadSound("Rock Break.mp3");
  sound4 = loadSound("Thruster.mp3");
  sound5 = loadSound("Retro Music.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //blue ship
  ship = new Ship();
  //red ship
  ship2 = new Ship2();
  //black asteroids
  for (var i = 0; i < 10; i++) {
    asteroids.push(new Asteroid());
  };
  //red asteroids
  for (var e = 0; e < 6; e++) {
   asteroids2.push(new Asteroid2());
  }
  //blue asteroids
  for (var b = 0; b < 6; b++) {
   asteroids3.push(new Asteroid3());
  }
  setInterval(timeIt, 1000);
  
}

function draw() {
  background (0)
  if(screen == 0){
    start();
  }else if(screen == 1){
    game();
  }else if(screen==2){
    end();
  }	else if(screen==3){
    end2();
  }
}

function mousePressed(){
	if(screen==0){
  	screen=1
  } 
}

function keyReleased() {
  ship.setRotation(0);
  ship.boosting(false);
  ship2.setRotation(0);
  ship2.boosting(false);
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    lasers.push(new Laser(ship.pos, ship.heading));
    sound2.play();
////replace text with laser 1 SFX
text("laser1", width/2, height/2);
  } else if (keyCode == RIGHT_ARROW) {
    ship.setRotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
     sound4.play();
  }
  if (keyCode == 83) {
    lasers2.push(new Laser2(ship2.pos, ship2.heading));
    sound2.play();
////replace text with laser 1 SFX
text("laser2", width/2, height/2);
  } else if (keyCode == 68) {
    ship2.setRotation(0.1);
  } else if (keyCode == 65) {
    ship2.setRotation(-0.1);
  } else if (keyCode == 87) {
    ship2.boosting(true);
     sound4.play();
  }
}




// The Coding Train Asteroid video was the foundation of my project
// Part 1: https://www.youtube.com/watch?v=hacZU523FyM
// Part 2: https://www.youtube.com/watch?v=xTTuih7P0c0
// Timer : https://editor.p5js.org/denaplesk2/sketches/ryIBFP_lG
