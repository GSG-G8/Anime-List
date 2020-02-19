const animeToSearch = document.getElementById('search');
const animesWrapper = document.getElementById('animes');
const addImg = (src, parent, size) => {
  const img = document.createElement('img');
  img.src = src;
  img.style.width = size;
  img.style.height = size;
  parent.appendChild(img);
};
const deleteNodeChilds = (node) => {
  while (node.firstChild) node.removeChild(node.firstChild);
};

fetchAnimeGiphy().then((response) => response.json())
  .then((animesGiphy) => {
    if (animesGiphy.data.length === 0) {
      throw new TypeError('no anime giphy available, come again later');
    }
    animesGiphy.data.forEach((element) => {
      addImg(element.images.original.url, animesWrapper, '200px');
    });
  })
  .catch((error) => {
    const errorContainer = document.createElement('div');
    errorContainer.textContent = error.message;
    animesWrapper.appendChild(errorContainer);
  });

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
