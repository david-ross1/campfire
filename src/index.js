import Fire from './scripts/fire'
import Rain from './scripts/rain'
import { keys } from './scripts/util'

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

