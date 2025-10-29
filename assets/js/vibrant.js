
// vibrant.js - subtle entrance animations and interactions
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.card, .fade-in').forEach((el, idx) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(12px)';
    setTimeout(()=> {
      el.style.transition = 'all 600ms cubic-bezier(.2,.9,.3,1)';
      el.style.opacity = 1;
      el.style.transform = 'none';
    }, 120*idx);
  });
  // toggle mobile nav if present
  const btn = document.querySelector('.nav-toggle');
  if(btn){
    btn.addEventListener('click', ()=> {
      const nav = document.querySelector('.nav');
      if(nav) nav.classList.toggle('open');
    });
  }
});
