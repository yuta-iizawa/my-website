// HTMLが全て読み込まれてから実行
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn');

  button.addEventListener('click', () => {
    // メッセージ変更
    document.getElementById('message').textContent = 'ボタンがクリックされました！';

    // 見出しの文字と色を変更
    const title = document.getElementById('title');
    title.textContent = 'クリックありがとう！🎉';
    title.style.color = 'red';
  });
});
