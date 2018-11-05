var canvas = document.getElementById('header-canvas');
var ctx = canvas.getContext('2d');

class Ball {
  constructor() {
    this.x = 100,
    this.y = 100,
    this.vx = 0.5,
    this.vy = 0.2,
    this.radius = 5,
    this.color = 'green';
    this.draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
}

// var ball = {
//   x: 100,
//   y: 100,
//   vx: .5,
//   vy: .2,
//   radius: 5,
//   color: 'blue',
//   draw: function() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
//     ctx.closePath();
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// };

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  let ball = new Ball();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
