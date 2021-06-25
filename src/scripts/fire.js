import { FIRE, keys } from './util'

class Fire {
  constructor(canvas, ctx, x) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.y = canvas.height - 100;
    this.x = x || canvas.width / 2;
    this.gameOver = false;
  }

  update() {
    if (keys.rightPressed && (this.x !== this.canvas.width - 50)) this.x += 5;
    if (keys.leftPressed && (this.x !== 0)) this.x -= 5;
  }

  draw(dropped) {
    let cx = this.x + 17;
    let cy = this.canvas.height - 55;
    this.ctx.drawImage(FIRE, 0, 0, 1000, 1000, this.x, this.canvas.height - 127, 370, 360);
    if (dropped.length) {
      for (let i = 0; i < dropped.length; i++) {
        let rain = dropped[i];
        this.ctx.drawImage(rain.dropSize, 0, 0, 1000, 1000, cx, cy, 370, 100);
        cy = cy - 18;
      }
    }
  }
 }

export default Fire;