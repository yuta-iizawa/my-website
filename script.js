const menuButtons = document.querySelectorAll('.menu-btn');
const sections = document.querySelectorAll('.content-section');

menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    
    sections.forEach(sec => {
      sec.classList.toggle('active', sec.id === targetId);
    });

    // smooth scroll to content
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
