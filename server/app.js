const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const routes = require('./routers/index');

const app = express();


app.use(favicon(path.join(__dirname, '..', 'public', 'images', 'favicon.ico')));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);
module.exports = app;
