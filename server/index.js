const app = require('./app');


app.set('port', process.env.PORT || 5555);

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Visit our server at http://localhost:${app.get('port')}`);
});
