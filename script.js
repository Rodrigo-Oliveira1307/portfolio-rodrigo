
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('portfolio-theme');
if(saved){root.dataset.theme=saved;toggle.textContent=saved==='dark'?'☀':'☾';}
toggle.addEventListener('click',()=>{
  const next=root.dataset.theme==='dark'?'light':'dark';
  root.dataset.theme=next;
  localStorage.setItem('portfolio-theme',next);
  toggle.textContent=next==='dark'?'☀':'☾';
});
