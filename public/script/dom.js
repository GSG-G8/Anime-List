const animeToSearch = document.getElementById('search');
const animesWrapper = document.getElementById('animes');
const searchButton = document.querySelector('#btn');
const sliderContainer = document.querySelector('.slider__Conatiner');

const deleteNodeChilds = (node) => {
  while (node.firstChild) node.removeChild(node.firstChild);
};
// Dom the Anime API
searchButton.addEventListener('click', () => {
  fetchAnimeData(animeToSearch).then((res) => res.json()).then((result) => {
    deleteNodeChilds(sliderContainer);

    result.data.forEach((element) => {
      const slide = document.createElement('div');
      slide.setAttribute('class', 'mySlides fade');
      const informationContainer = document.createElement('div');
      informationContainer.className = 'slider__information';
      // console.log(element.attributes);
      if (element.attributes.posterImage.small !== undefined) {
        const slideImage = document.createElement('img');
        slideImage.src = `${element.attributes.posterImage.medium}`;
        slideImage.alt = `${element.attributes.titles.en}`;
        slide.appendChild(slideImage);
      }
      const createInfo = (tag, textContent, className, title, parent) => {
        const animeInfo = document.createElement(tag);
        if (textContent !== undefined) {
          animeInfo.textContent = `${title}: ${textContent}`;
          animeInfo.className = `${className}`;
        }
        parent.appendChild(animeInfo);
      };

      createInfo('h1', element.attributes.titles.en, 'slider__heading', 'Title', informationContainer);
      createInfo('h4', element.attributes.averageRating, 'slider__heading', 'Average Rating', informationContainer);
      createInfo('h4', element.attributes.ageRating, 'slider__heading', 'Age Rating', informationContainer);
      createInfo('h4', element.attributes.ageRatingGuide, 'slider__heading', 'Age Rating Guide', informationContainer);
      createInfo('h4', element.attributes.status, 'slider__heading', 'Status', informationContainer);
      createInfo('h4', element.attributes.episodeCount, 'slider__heading', 'Episode Count', informationContainer);
      createInfo('p', element.attributes.synopsis, 'slider__paragraph', 'Story', informationContainer);

      if (element.attributes.youtubeVideoId !== undefined) {
        const animeTrailer = document.createElement('span');
        animeTrailer.textContent = 'Watch Trailer';
        animeTrailer.className = 'trailer__span';
        informationContainer.appendChild(animeTrailer);

        animeTrailer.addEventListener('click', () => {
          animeTrailer.remove();
          const iframe = document.createElement('iframe');
          iframe.setAttribute('width', '560');
          iframe.setAttribute('height', '315');
          iframe.setAttribute('src', `https://www.youtube.com/embed/${element.attributes.youtubeVideoId}`);
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          informationContainer.appendChild(iframe);
        });
      }

      slide.appendChild(informationContainer);
      sliderContainer.appendChild(slide);
    });
    showSlides(slideIndex);
  });
});

// Press Enter to search eventlistener
animeToSearch.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    searchButton.click();
  }
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

  slides[slideIndex - 1].style.display = 'flex';
};


const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));
