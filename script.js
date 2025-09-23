// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul.menu li a');
  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // 外部リンクでなければスクロール
        if (this.hash !== "") {
          e.preventDefault();
          const target = document.querySelector(this.hash) || document.querySelector(this.getAttribute('href'));
          if (target) {
            window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  });
  
  // 将来的にメニュー開閉アニメーションやフェードインも追加可能
  