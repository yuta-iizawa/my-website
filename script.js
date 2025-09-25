// Drawer menu toggle
const menuBtn = document.getElementById('menu-btn');
const drawer = document.getElementById('drawer');

menuBtn.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

// Close drawer when clicking outside
document.addEventListener('click', (e) => {
  if(!drawer.contains(e.target) && !menuBtn.contains(e.target)) {
    drawer.classList.remove('open');
  }
});

// Contact form mock submission
const form = document.getElementById('contact-form');
const confirmMsg = document.getElementById('contact-confirm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  confirmMsg.style.display = 'block';
  form.reset();
});
