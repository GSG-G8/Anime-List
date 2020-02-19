const express = require('express');
const controllers = require('../controllers');

const router = express.Router();
router.post('/anime', controllers.getAnimeData);
router.get('/anime-giphy', controllers.getAnimeGiphy);
module.exports = router;
