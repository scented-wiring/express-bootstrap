const mainController = (req, res) =>
  res.send({
    message: 'Welcome to my jokes API!',
  });

const request = require('request');

const jokeController = (req, res) =>
  request('https://api.icndb.com/jokes', (error, jokesAPIresponse) => {
    if (error) {
      console.log(error);
    }

    const parsedResponse = JSON.parse(jokesAPIresponse.body);

    res.send({ jokes: parsedResponse.value });
  });

const randomController = (req, res) =>
  res.send({
    message: 'This is the random joke endpoint!',
  });

const personalController = (req, res) =>
  res.send({
    message: `This is the personal joke endpoint! Your name is ${req.params.first} ${req.params.last}`,
  });

module.exports = {
  mainController,
  jokeController,
  randomController,
  personalController,
};
