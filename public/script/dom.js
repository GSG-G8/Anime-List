// Slider

let slideIndex = 1;

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


const showSlides = (n) => {
  let i;
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
};
showSlides(slideIndex);


const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));
