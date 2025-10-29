
// premium.js - small UI enhancements
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.fade-in').forEach((el, idx) => {
    setTimeout(()=> el.classList.add('show'), 80*idx);
  });
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
});
