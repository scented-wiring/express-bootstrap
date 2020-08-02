const express = require('express');
const { jokeController, randomController, personalController } = require('./controllers');

const app = express();
app.use(express.static('public'));

app.get('/jokes', jokeController);

app.get('/jokes/random', randomController);

app.get('/jokes/personal/:first/:last', personalController);

module.exports = app;
