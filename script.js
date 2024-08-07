let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const slider = document.querySelector(".slides");
  const offset = slideIndex * -100;
  slider.style.transform = `translateX(${offset}%)`;
}

setInterval(showSlides, 5000); // Mengubah interval menjadi 7000 milidetik (7 detik)
