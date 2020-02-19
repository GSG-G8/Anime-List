const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 5555;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Visit our server at http://localhost:${port}`);
});
