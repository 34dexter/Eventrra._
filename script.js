const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;
const slideWidth = images[0].clientWidth;

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function previousSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function updateSlider() {
  const translateX = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${translateX}px)`;
}
setInterval(nextSlide, 6000);
