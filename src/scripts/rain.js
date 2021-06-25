const LARGERAIN = new Image();
LARGERAIN.src = "./dist/images/rain_large.png";

class Rain {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = -110;
    this.counted = false;
    this.dropSize = LARGERAIN
  }
  updateHeight() {
    const dy = this.canvas.height + 50;
    if (dy != this.y) this.y += 5;
  }
  draw() {
    this.ctx.drawImage(this.dropSize, 0, 0, 1000, 1000, this.x, this.y, 240, 240);
  }
}

export default Rain;
