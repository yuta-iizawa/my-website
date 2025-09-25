const menuBtn = document.getElementById('menu-btn');
const drawerMenu = document.getElementById('drawer-menu');

menuBtn.addEventListener('click', () => {
  drawerMenu.classList.toggle('open');
});

// Click outside to close menu
document.addEventListener('click', (e) => {
  if (!drawerMenu.contains(e.target) && e.target !== menuBtn) {
    drawerMenu.classList.remove('open');
  }
});

// Contact form dummy submit
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = "Message sent! (Backend not implemented yet)";
  contactForm.reset();
});
