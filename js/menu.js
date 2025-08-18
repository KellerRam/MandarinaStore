const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.items');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== menuBtn) {
    menu.classList.remove('active');
  }
});

