const fetchAnimeGiphy = () => fetch('/anime-giphy');
const fetchAnimeData = (node) => fetch('/anime', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ anime: node.value }),
});
