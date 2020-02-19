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
