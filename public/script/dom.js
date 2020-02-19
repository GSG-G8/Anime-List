const animeToSearch = document.getElementById('search');
const animesWrapper = document.getElementById('animes');
const searchButton = document.querySelector('#btn');
const sliderContainer = document.querySelector('.slider__Conatiner');

// Dom the Anime API
searchButton.addEventListener('click', () => {
  fetchAnimeData(animeToSearch).then((res) => res.json()).then((result) => {
    deleteNodeChilds(sliderContainer);
    result.data.forEach((element) => {
      const slide = document.createElement('div');
      slide.setAttribute('class', 'mySlides fade');
      const slideImage = document.createElement('img');
      slideImage.src = `${element.attributes.posterImage.large}`;
      slideImage.alt = `${element.attributes.titles.en}`;
      const slideTitle = document.createElement('div');
      element.attributes.titles.en === 'undefined' ? slideTitle.textContent = `${element.attributes.slug}` : slideTitle.textContent = `${element.attributes.titles.en}`;
      slideTitle.className = 'text';
      slide.appendChild(slideImage);
      slide.appendChild(slideTitle);
      sliderContainer.appendChild(slide);
    });
    showSlides(slideIndex);
  });
});

// Dom the Giphy API

const addImg = (src, parent, size) => {
  const img = document.createElement('img');
  img.src = src;
  img.style.width = size;
  img.style.height = size;
  img.alt = 'anime gif';
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
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
};


const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));
