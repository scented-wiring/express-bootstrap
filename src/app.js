const express = require('express');
const {
  mainController,
  jokeController,
  randomController,
  personalController,
} = require('./controllers');

const app = express();

app.get('/', mainController);

app.get('/jokes', jokeController);

app.get('/jokes/random', randomController);

app.get('/jokes/personal/:first/:last', personalController);

module.exports = app;
