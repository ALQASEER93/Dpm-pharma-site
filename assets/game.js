
const canvas = document.getElementById('game'); const ctx = canvas.getContext('2d');
let W = canvas.width = 800, H = canvas.height = 480;
let basket = { x: W/2-40, y:H-50, w:80, h:18, vx:0 };
let capsules = []; let score=0, missed=0, running=true; let lastSpawn=0;
function spawn(){ capsules.push({x:Math.random()*(W-16)+8, y:-20, r:10, vy:2+Math.random()*2}); }
function loop(ts){ if(!running) return; if(ts-lastSpawn>700){ spawn(); lastSpawn=ts; } update(); draw(); requestAnimationFrame(loop); }
function update(){
  basket.x += basket.vx; basket.x = Math.max(0, Math.min(W-basket.w, basket.x));
  capsules.forEach(c=> c.y += c.vy);
  capsules = capsules.filter(c=>{
    if(c.y>H){ missed++; if(missed>=10){ running=false; } return false; }
    if(c.y+c.r >= basket.y && c.x>=basket.x && c.x<=basket.x+basket.w){ score++; return false; } return true;
  });
}
function draw(){
  ctx.fillStyle = '#0b0c10'; ctx.fillRect(0,0,W,H);
  ctx.fillStyle = '#d4af37'; ctx.fillRect(basket.x, basket.y, basket.w, basket.h);
  capsules.forEach(c=>{ ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI*2); ctx.fillStyle='#cbd3df'; ctx.fill(); });
  ctx.fillStyle='#e9ecf1'; ctx.font='16px Arial'; ctx.fillText('Score: '+score, 12, 22); ctx.fillText('Missed: '+missed+'/10', 110, 22);
  if(!running){ ctx.fillStyle='#fff'; ctx.font='28px Arial'; ctx.fillText('Game Over — Score: '+score, W/2-160, H/2); }
}
window.addEventListener('keydown', e=>{ if(e.key==='ArrowLeft') basket.vx=-6; if(e.key==='ArrowRight') basket.vx=6; });
window.addEventListener('keyup', e=>{ if(e.key==='ArrowLeft' || e.key==='ArrowRight') basket.vx=0; });
requestAnimationFrame(loop);
