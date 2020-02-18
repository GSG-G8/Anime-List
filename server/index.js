const express = require('express');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5555;


app.get('/', (req, res) => {
  res.send('<h1> Welcome to Anime List </h1>');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Visit our server at http://localhost:${port}`);
});
