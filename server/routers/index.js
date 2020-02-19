const express = require('express');
const controllers = require('../controllers');

const router = express.Router();
router.post('/anime', controllers.helper.getAnimeData);
router.get('/anime-giphy', controllers.helper.getAnimeGiphy);
module.exports = router;
