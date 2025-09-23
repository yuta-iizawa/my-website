// ページロード時のフェード効果
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('fade'));
  });
  