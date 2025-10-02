const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i=0; i<150; i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius: Math.random()*2+1,
    dx: Math.random()*1-0.5,
    dy: Math.random()*1-0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctx.fillStyle = 'rgba(0,255,255,0.8)';
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0 || p.x>canvas.width) p.dx=-p.dx;
    if(p.y<0 || p.y>canvas.height) p.dy=-p.dy;
  });
  requestAnimationFrame(animate);
}

animate();
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
