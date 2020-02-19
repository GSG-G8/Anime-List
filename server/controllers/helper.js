const fetch = require('node-fetch');

exports.getAnimeData = (req, res) => {
  fetch(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${req.body.anime}`).then((result) => result.json()).then((result) => res.json(result)).catch(console.error);
};

exports.getAnimeGiphy = (req, res) => {
  fetch('http://api.giphy.com/v1/gifs/search?q=anime&api_key=L8fzchyQVgtjN27RTupTrGwlZnSliLlg&limit=10').then((result) => result.json()).then((result) => res.json(result)).catch(console.log);
};
