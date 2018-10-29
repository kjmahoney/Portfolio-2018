const canvas = document.getElementById('header-canvas');
console.log(canvas);
const ctx = canvas.getContext('2d');
console.log(ctx);
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
