const app = require('./app');
require('dotenv').config();

app.set('port', process.env.PORT || 5555);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Visit our server at http://localhost:${app.get('port')}`);
});
