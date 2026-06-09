const portrait=document.querySelector('#portrait');
const bg=document.querySelector('.bg');
const fg=document.querySelector('.fg');
function move(x,y){bg.style.transform=`translate(${x*-18}px,${y*-18}px) scale(1.05)`;fg.style.transform=`translate(${x*14}px,${y*14}px) scale(1.03)`;}
portrait.addEventListener('mousemove',e=>{const r=portrait.getBoundingClientRect();move((e.clientX-r.left)/r.width-.5,(e.clientY-r.top)/r.height-.5)});
window.addEventListener('deviceorientation',e=>{move((e.gamma||0)/45,(e.beta||0)/70)});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelector('#confetti').onclick=()=>{for(let i=0;i<44;i++){const s=document.createElement('span');s.className='heart';s.textContent=['🌈','💖','✨','🫶'][i%4];s.style.left=Math.random()*100+'vw';s.style.bottom='20px';s.style.animationDelay=Math.random()*.45+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),2200)}};
