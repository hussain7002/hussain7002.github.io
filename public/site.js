document.documentElement.classList.add('js');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

/* reveal */
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.remove('pre'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.rv').forEach(el => { if (el.getBoundingClientRect().top > innerHeight) { el.classList.add('pre'); io.observe(el); } });
}

/* hero dot field in four colours */
const field = document.getElementById('field');
let sizeField = () => {}, drawField = () => {};
if (field) {
  const fx = field.getContext('2d');
  let dots = [];
  sizeField = () => {
    const r = field.getBoundingClientRect(), d = Math.min(devicePixelRatio||1, 2);
    field.width = r.width*d; field.height = r.height*d; fx.setTransform(d,0,0,d,0,0);
    dots = []; const s = r.width < 600 ? 24 : 28;
    const hot = [[.8,.22,'--yellow'],[.92,.68,'--red'],[.66,.88,'--green'],[.97,.3,'--blue']];
    for (let y=s/2; y<r.height; y+=s) for (let x=s/2 + ((Math.round(y/s))%2? s/2:0); x<r.width; x+=s) {
      const nx=x/r.width, ny=y/r.height; let h=0, c='--blue';
      hot.forEach(([a,b,col]) => { const v = 1 - Math.hypot(nx-a,(ny-b)*.6)/.15; if (v>h){h=v;c=col;} });
      const fade = r.width < 700 ? Math.min(.45, Math.max(0,(nx-.55)/.4)) : Math.min(1, Math.max(0,(nx-.4)/.35));
      if (fade>0) dots.push({x,y,h:Math.max(0,h),c,f:fade,p:Math.random()*6.28});
    }
  };
  drawField = now => {
    const r = field.getBoundingClientRect(); fx.clearRect(0,0,r.width,r.height);
    const cols = {'--blue':css('--blue'),'--red':css('--red'),'--yellow':css('--yellow'),'--green':css('--green')}, base = css('--rule'), t = now/1000;
    for (const d of dots){
      if (d.h>0){ const pulse = reduce?0:(Math.sin(t*1.4+d.p)*.5+.5); fx.globalAlpha = d.f*(.55+d.h*.45); fx.fillStyle = cols[d.c]; fx.beginPath(); fx.arc(d.x,d.y,2+d.h*4+pulse*d.h*1.5,0,7); fx.fill(); }
      else { fx.globalAlpha = d.f*.9; fx.fillStyle = base; fx.beginPath(); fx.arc(d.x,d.y,1.6,0,7); fx.fill(); }
    }
    fx.globalAlpha = 1;
  };
  let heroVisible = true;
  const loop = now => { if (!heroVisible || document.hidden) return; drawField(now); requestAnimationFrame(loop); };
  sizeField(); drawField(performance.now());
  if (!reduce){
    new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; if (heroVisible) requestAnimationFrame(loop); }).observe(field);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) requestAnimationFrame(loop); });
  }
}

/* thumbnails: generated illustrations (no screenshots of government systems) */
function rnd(seed){ return () => (seed = (seed*16807) % 2147483647) / 2147483647; }
function rr(g,x,y,w,h,r){ g.beginPath(); g.roundRect ? g.roundRect(x,y,w,h,r) : g.rect(x,y,w,h); }
function drawThumb(c){
  const r=c.getBoundingClientRect(); if (!r.width) return;
  const d=Math.min(devicePixelRatio||1,2); c.width=r.width*d; c.height=r.height*d;
  const g=c.getContext('2d'); g.setTransform(d,0,0,d,0,0); const W=r.width,H=r.height;
  const ink=css('--ink'), Y=css('--yellow'), Rd=css('--red'), B=css('--blue'), G=css('--green'), P=css('--paper'), M=css('--muted');
  const art=c.dataset.art, R=rnd(art.length*997+7); g.lineWidth=1.5;
  if (art==='grid'){
    const cols=4, rows=3, p=14, w=(W-p*(cols+1))/cols, h=(H-p*(rows+1)-30)/rows, pal=[B,Rd,Y,G];
    for(let i=0;i<cols;i++)for(let j=0;j<rows;j++){const x=p+i*(w+p),y=34+p+j*(h+p); g.fillStyle=P; rr(g,x,y,w,h,8); g.fill();
      g.fillStyle=pal[(i+j)%4]; const bh=(h-14)*(.3+R()*.6); [0,.28,.56].forEach((o,k)=>g.fillRect(x+8+w*o,y+h-7-bh*(1-k*.2),w*.18,bh*(1-k*.2)));}
  } else if (art==='wards'){
    const pal=[G,G,G,B,Y,Rd];
    for(let i=0;i<46;i++){const cx=R()*W, cy=R()*H, s=18+R()*40; g.beginPath(); for(let k=0;k<6;k++){const a=k/6*6.28+R()*.4, q=s*(.6+R()*.5); const x=cx+Math.cos(a)*q, y=cy+Math.sin(a)*q; k?g.lineTo(x,y):g.moveTo(x,y);} g.closePath();
      g.fillStyle=pal[Math.floor(R()*pal.length)]; g.globalAlpha=.25+R()*.6; g.fill(); g.globalAlpha=1; g.strokeStyle=P; g.stroke();}
  } else if (art==='rise'){ // the real figures only: 2% before, 15% after
    const base=H*.84, top=H*.16, bw=Math.min(W*.18,140), xs=[W*.34,W*.62], vals=[2,15];
    g.strokeStyle=ink; g.globalAlpha=.25; g.beginPath(); g.moveTo(W*.12,base); g.lineTo(W*.88,base); g.stroke(); g.globalAlpha=1;
    vals.forEach((v,i)=>{ const h=(base-top)*v/15; g.fillStyle=i? Rd : M; g.globalAlpha=i?.9:.45; rr(g,xs[i]-bw/2,base-h,bw,h,6); g.fill(); g.globalAlpha=1;
      g.fillStyle=ink; g.font='800 '+Math.round(Math.min(28,W*.05))+'px ui-sans-serif,system-ui'; g.textAlign='center'; g.fillText(v+'%',xs[i],base-h-10);
      g.font='600 12px ui-monospace,monospace'; g.fillText(i?'AFTER':'BEFORE',xs[i],base+20); g.textAlign='start'; });
  } else if (art==='links'){
    const labels=(c.dataset.labels||'ID,Bank,Benefits,Registration,ANC').split(',');
    const pos=[[.2,.35],[.46,.2],[.74,.34],[.58,.74],[.26,.74]], pal=[B,G,Rd,B,Rd];
    const n=labels.slice(0,5).map((l,i)=>[l,pos[i][0],pos[i][1],pal[i]]);
    g.strokeStyle=ink; g.globalAlpha=.3; n.forEach((a,i)=>n.forEach((b,j)=>{ if(j>i){g.beginPath(); g.moveTo(a[1]*W,a[2]*H); g.lineTo(b[1]*W,b[2]*H); g.stroke();}})); g.globalAlpha=1;
    n.forEach(([l,x,y,col])=>{ g.fillStyle=col; g.beginPath(); g.arc(x*W,y*H,10,0,7); g.fill(); g.fillStyle=ink; g.font='600 12px ui-monospace,monospace'; g.fillText(l,x*W+15,y*H+4); });
  } else if (art==='chat'){
    const msgs=[[0,.34,Rd],[1,.5,P],[0,.42,Rd],[1,.28,P],[0,.38,Rd]], pad=W*.08; let y=H*.12; const bh=Math.min(34,H*.12);
    msgs.forEach(([side,w,col])=>{ const bw=W*w, x=side? W-pad-bw : pad; g.fillStyle=col; rr(g,x,y,bw,bh,bh/2); g.fill();
      g.fillStyle=side? M : P; g.globalAlpha=.55; for(let k=0;k<3;k++){ g.fillRect(x+14+k*(bw-28)/3, y+bh/2-2, (bw-28)/3-8, 4); } g.globalAlpha=1; y+=bh+H*.05; });
  } else if (art==='cyl'){
    const n=7, gap=W/(n+1);
    for(let i=0;i<n;i++){ const x=gap*(i+1), h=H*(.35+R()*.35), w=Math.min(34,gap*.55), top=H*.86-h;
      g.fillStyle=[B,G,B,Y,B,G,Rd][i]; rr(g,x-w/2,top,w,h,w/2); g.fill();
      g.fillStyle=ink; rr(g,x-w*.18,top-10,w*.36,12,3); g.fill(); }
    g.strokeStyle=ink; g.globalAlpha=.35; g.beginPath(); g.moveTo(W*.05,H*.86); g.lineTo(W*.95,H*.86); g.stroke(); g.globalAlpha=1;
  } else { // essay: rails
    g.fillStyle=Rd; g.fillRect(0,0,W,H);
    for(let i=0;i<5;i++){ const y=H*(.18+i*.16); g.strokeStyle=P; g.globalAlpha=.5; g.lineWidth=2; g.beginPath(); g.moveTo(0,y); g.lineTo(W,y); g.stroke(); g.globalAlpha=1;
      for(let k=0;k<4;k++){ const x=W*(.1+R()*.8); g.fillStyle=[Y,B,P,G][(i+k)%4]; g.beginPath(); g.arc(x,y,6+R()*8,0,7); g.fill(); } }
    g.fillStyle=Y; g.beginPath(); g.arc(W*.82,H*.2,H*.22,0,7); g.fill();
  }
}
const thumbs=[...document.querySelectorAll('canvas[data-art]')];
const drawAll = () => thumbs.forEach(drawThumb);
drawAll(); document.fonts?.ready?.then(drawAll);
let rz; addEventListener('resize', () => { clearTimeout(rz); rz=setTimeout(()=>{ sizeField(); drawField(performance.now()); drawAll(); },200); });
matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => { drawAll(); drawField(performance.now()); });

/* mobile menu */
const mb=document.getElementById('menu-btn'), mm=document.getElementById('mobile-menu');
if (mb && mm) {
  mb.addEventListener('click',()=>{ const open=mm.hidden; mm.hidden=!open; mb.setAttribute('aria-expanded',open); mb.textContent=open?'Close':'Menu'; });
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ mm.hidden=true; mb.setAttribute('aria-expanded','false'); mb.textContent='Menu'; }));
}

/* copy email */
document.getElementById('copy')?.addEventListener('click', e => {
  const b=e.currentTarget, el=document.getElementById('email');
  const done=m=>{b.textContent=m; setTimeout(()=>b.textContent='Copy email',1800);};
  const sel=()=>{const s=getSelection(), r=document.createRange(); r.selectNodeContents(el); s.removeAllRanges(); s.addRange(r);};
  try { navigator.clipboard.writeText(el.textContent).then(()=>done('Copied'), ()=>{sel(); done('Selected');}); } catch(_) { sel(); done('Selected'); }
});
