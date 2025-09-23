// HOMEテキストのフェードイン
window.addEventListener('load', () => {
    const homeText = document.querySelector('.home-text');
    if(homeText) {
      homeText.style.opacity = 0;
      homeText.style.transition = 'opacity 2s';
      setTimeout(() => {
        homeText.style.opacity = 1;
      }, 200);
    }
  });
  