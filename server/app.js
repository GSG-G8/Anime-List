const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const routes = require('./routers');
const controllers = require('./controllers');

const app = express();

app.disable('x-powered-by');
app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);
app.use(controllers.error.clientError);
app.use(controllers.error.serverError);

module.exports = app;
