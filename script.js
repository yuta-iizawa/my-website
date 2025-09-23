// 今回はシンプルにフェードインアニメーションだけ
document.addEventListener("DOMContentLoaded", () => {
    const contents = document.querySelectorAll(".content, .hero-text");
    contents.forEach(el => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.transition = "opacity 1.5s";
        el.style.opacity = 1;
      }, 100);
    });
  });
  