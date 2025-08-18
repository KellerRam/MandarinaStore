const slider = document.querySelector('.slider'); // Your slider container
const buttons = document.querySelectorAll('.slider-nav button');
let index = 0;

function scrollToSlide(idx) {
  const targetId = buttons[idx].getAttribute('data-target');
  const targetSlide = document.getElementById(targetId);
  if (targetSlide && slider) {
    slider.scrollTo({
      left: targetSlide.offsetLeft,
      behavior: 'smooth'
    });
  }
}

buttons.forEach((button, idx) => {
  button.addEventListener('click', () => {
    scrollToSlide(idx);
  });
});

function autoSlide() {
  index = (index + 1) % buttons.length;
  scrollToSlide(index);
}

setInterval(autoSlide, 3000);