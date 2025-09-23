// DOM読み込み後にアニメーション設定
document.addEventListener('DOMContentLoaded', () => {
    const fadeElems = document.querySelectorAll('.home-text, .content section');
  
    const fadeIn = (entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(fadeIn, { threshold: 0.1 });
    fadeElems.forEach(elem => observer.observe(elem));
  });
  