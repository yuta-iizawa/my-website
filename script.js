function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(sec => sec.classList.remove('active'));
  const active = document.getElementById(id);
  active.classList.add('active');
}

// 初回表示でAboutを表示
document.addEventListener('DOMContentLoaded', () => {
  showSection('about');
});
