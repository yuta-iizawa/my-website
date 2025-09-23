// ページのフェードイン
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  requestAnimationFrame(() => {
    document.body.style.opacity = 1;
  });
});

// 「もっと見る」ボタンで商品追加
document.addEventListener("DOMContentLoaded", () => {
  const moreButton = document.getElementById("load-more");
  const productList = document.getElementById("product-list");

  if (moreButton && productList) {
    moreButton.addEventListener("click", () => {
      const newItem = document.createElement("div");
      newItem.className = "product-card";
      newItem.innerHTML = `
        <img src="https://via.placeholder.com/200" alt="新しい古着アイテム">
        <h3>新アイテム</h3>
        <p>おしゃれな一点ものです！</p>
      `;
      productList.appendChild(newItem);
    });
  }
});
