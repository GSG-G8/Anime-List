const fetch = require('node-fetch');

exports.getAnimeData = (req, res) => {
  fetch(`https://kitsu.io/api/edge/anime?filter%5Btext%5D=${req.body.anime}`).then((result) => result.json()).then((result) => res.json(result)).catch(console.error);
};
