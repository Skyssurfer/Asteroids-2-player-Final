function start() {
   
  if (x <= 255){
    x = x+2
}  else if (x >= 255) {
    x = 00
};
  fill(255)
  textAlign(CENTER);
  textSize(60);
  text('ASTEROIDS 2:', width / 2, height / 2 - 50)
  text('OUTRUNNERS', width / 2, height /2)
  
  textSize(30);
  fill(x)
  text('click to start', width / 2, height / 2 + 35);
  
  for (var i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
 
  for (var e = 0; e < asteroids2.length; e++) {
    asteroids2[e].render();
    asteroids2[e].update();
    asteroids2[e].edges();
  }
  
  for (var b = 0; b < asteroids3.length; b++) {
    asteroids3[b].render();
    asteroids3[b].update();
    asteroids3[b].edges();
  }
}
