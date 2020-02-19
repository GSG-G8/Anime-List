const animeToSearch = document.getElementById('search');
const section = document.getElementById('animes');
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

(() => {
  deleteNodeChilds(section);
  fetchAnimeGiphy().then((response) => response.json())
    .then((animesGiphy) => {
      if (animesGiphy.data.length === 0) {
        throw new TypeError('No Result');
      }
      animesGiphy.data.forEach((element) => {
        addImg(element.images.original.url, section, '200px');
      });
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
})();
