import Fire from './scripts/fire'
import Rain from './scripts/rain'
import { keys } from './scripts/util'


// let isRunning = true
let paused = true; 

document.addEventListener('keydown', function (event) {
  var key = event.which || event.keyCode;
  if (key === 13) {
    event.preventDefault();
    // audio.paused ? audio.play() : audio.pause();
    // isRunning === undefined ? isRunning = false : isRunning = true 
    paused === false ? paused = true  : paused = false; 
  }
});


var audio = document.querySelector('audio');

if (audio) {
  window.addEventListener('keydown', function (event) {
    var key = event.which || event.keyCode;
    if (key === 9) {
      event.preventDefault();
      audio.paused ? audio.play() : audio.pause();
    }
  });
}


// var splash = document.querySelector('splash');


// if (this.gameOver) {
//   // window.addEventListener('keydown', function (event) {
//   //   var key = event.which || event.keyCode;
//   //   if (key === 9) {
//   //     event.preventDefault();
//   //     audio.paused ? audio.play() : audio.pause();
//   //   }
//   // });
//   splash.play()
// }


const slogan = "Staying dry is easy as putting socks on a rooster! Press SPACEBAR to restart."

let drops = [];
let raindrops = [];
let hits = 0;
let gameFrame = 0;

document.addEventListener('keydown', function (e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 39:
      keys.rightPressed = true;
      break;
    case 37:
      keys.leftPressed = true;
      break;
  }
});

document.addEventListener('keyup', function (e) {
  e.preventDefault();

  switch (e.keyCode) {
    case 39:
      keys.rightPressed = false;
      break;
    case 37:
      keys.leftPressed = false;
      break;
    case 32:
      restart();
      break;
  }
});


function rainCount(drops) {
  let count = 0;
  for (let i = 0; i < drops.length; i++) {
    let drop = drops[i];
    if (drop.dropSize?.currentSrc.includes('rain')) {
      count++;
    }
  }

  hits = count;
}

function makeItRain(canvas) {
  if (!paused) {
  if (gameFrame % 7 == 0) {
    let newRain = new Rain(canvas, ctx);
    raindrops.push(newRain);
  }
}


  for (let i = 0; i < raindrops.length; i++) {
    if ((raindrops[i].y === thisfire.y) && (raindrops[i].x > thisfire.x - 40 && raindrops[i].x < thisfire.x + 90)) {

      if (drops.indexOf(raindrops[i]) === -1) {
        {
          raindrops[i].counted = true;
          drops.push(raindrops[i]);
        }
        thisfire.y -= 20;
      }
      break;
    }
  
 


    raindrops[i].updateHeight();


    if (drops.indexOf(raindrops[i]) === -1 && raindrops[i].y < canvas.height) raindrops[i].draw();
    if (raindrops[i].y > canvas.height) raindrops.shift(raindrops[i])
  }

}


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
// canvas.width =   950;
// canvas.height =   540;
canvas.width =   1000;
canvas.height =   650;
let thisfire = new Fire(canvas, ctx);
const canvasdiv = document.getElementById("canvasdiv");

function animate() {

  let removeButton = document.getElementById("button");
  if (removeButton) removeButton.remove();


  if (paused) {
    let button = document.createElement('button'); 
    button.setAttribute('id', 'button'); 
    button.textContent = 'Press ENTER to BEGIN press tab for music'
    canvasdiv.appendChild(button); 
  }


  if (hits >= 3) {
    let button = document.createElement("button");
    button.setAttribute("id", "button");
    button.textContent = slogan
    canvasdiv.appendChild(button);
    thisfire.gameOver = true;
    // audio.pause();
    requestAnimationFrame(animate);
  }

  if (!thisfire.gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    thisfire.draw(drops);
    thisfire.update();
    rainCount(drops);
    makeItRain(canvas);
    gameFrame++;
    requestAnimationFrame(animate);
  }
}

animate();

function restart() {
  hits = 0;
  drops = [];
  raindrops = [];
  thisfire = new Fire(canvas, ctx);
  time = 0; 
}

