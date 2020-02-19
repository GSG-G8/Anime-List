const express = require('express');
const controllers = require('../controllers');

const router = express.Router();
router.post('/anime', controllers.helper.getAnimeData);

module.exports = router;
