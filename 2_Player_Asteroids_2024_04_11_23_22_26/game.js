function game(){ 
  background(0);
  
  //timer
  if (timerValue >= -3) {
    timer()
  }
  

  //black asteroid spawn and hit
  for (var i = 0; i < asteroids.length; i++) {
    if (timerValue >= 0 && ship.hits(asteroids[i])) {
      console.log('ooops blue!');
      screen = 2;
    } else if (timerValue >= 0 && ship2.hits(asteroids[i])) {
      console.log('ooops red!');
      screen = 3;
    }
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
  
  //red asteroid spawn and hit
  for (var e = 0; e < asteroids2.length; e++) {
    if (timerValue >= 0 && ship.hits(asteroids2[e])) {
      console.log('ooops blue!');
      screen = 2;
    } 
    asteroids2[e].render();
    asteroids2[e].update();
    asteroids2[e].edges();
  }
  
  //blue asteroid spawn and hit
  for (var b = 0; b < asteroids3.length; b++) {
    if (timerValue >= 0 && ship2.hits(asteroids3[b])) {
      console.log('ooops blue!');
      screen = 3;
    } 
    asteroids3[b].render();
    asteroids3[b].update();
    asteroids3[b].edges();
  }
  
  //blue laser
  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    if (lasers[i].offscreen()) {
      lasers.splice(i, 1);
    } else {
    for (var b = asteroids3.length - 1; b >= 0; b--) {
        if (lasers[i].hits(asteroids3[b])) {
          if (asteroids3[b].r > 10) {
            var newAsteroids3 = asteroids3[b].breakup();
            asteroids3 = asteroids3.concat(newAsteroids3);
          }
          asteroids3.splice(b, 1);
          lasers.splice(i, 1);
          sound3.play();
          break;
        }
      }
  }
}
  //red laser 
  for (var i = lasers2.length - 1; i >= 0; i--) {
    lasers2[i].render();
    lasers2[i].update();
    if (lasers2[i].offscreen()) {
      lasers2.splice(i, 1);
    } else {
       for (var e = asteroids2.length - 1; e >= 0; e--) {
        if (lasers2[i].hits(asteroids2[e])) {
          if (asteroids2[e].r > 10) {
            var newAsteroids2 = asteroids2[e].breakup();
            asteroids2 = asteroids2.concat(newAsteroids2);
          }
          asteroids2.splice(e, 1);
          lasers2.splice(i, 1);
          sound3.play();
          break;
        }
      }
    }
  }

  //console.log(lasers.length);

  ship.render();
  ship.turn();
  ship.update();
  ship.edges();

  ship2.render();
  ship2.turn();
  ship2.update();
  ship2.edges();

}
