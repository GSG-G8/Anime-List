const fetch = require('node-fetch');
require('dotenv').config();

const { apiKey } = process.env;
exports.getAnimeData = (req, res) => {
  fetch(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${req.body.anime}`).then((result) => result.json()).then((result) => res.json(result)).catch(console.error);
};

exports.getAnimeGiphy = (req, res) => {
  fetch(`http://api.giphy.com/v1/gifs/search?q=anime-shonen&api_key=${apiKey}&limit=10`).then((result) => result.json()).then((result) => res.json(result)).catch(console.log);
};
