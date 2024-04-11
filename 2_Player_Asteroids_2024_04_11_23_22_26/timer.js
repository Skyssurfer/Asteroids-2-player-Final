function timeIt() {  if (timerValue >= -3 && screen == 1){    
  timerValue++;  
  } 
}
function timer(){
noStroke();
      fill(255);
      textAlign(CENTER);
      textSize(50);
  if (timerValue >= 0){
    text( timerValue, width / 2, 50);
  } else {text( timerValue, width / 2, height/2)}
  
  if (timerValue == 15) {
          for (var j = asteroids.length - 1; j >= 0; j--) {
          if (asteroids[j]) {
            if (asteroids[j].r > 10) {
            var newAsteroids = asteroids[j].breakup();
            asteroids = asteroids.concat(newAsteroids);
              console.log('splode');
          }
          break;
        }
       } 
  }
  if (timerValue == 2){
    if(!sound5.isPlaying()){
    sound5.play();
      
      sound5.setVolume(0.4)
  }
  }
  }