// eslint-disable-next-line
const request = require('request');
const axios = require('axios');

const jokeController = (req, res) =>
  request('https://api.icndb.com/jokes', (error, jokesAPIresponse) => {
    if (error) {
      return res.status(error.statusCode).send({ error: error.message });
    }

    const parsedResponse = JSON.parse(jokesAPIresponse.body);

    res.send({ jokes: parsedResponse.value });
  });

const randomController = (req, res) =>
  axios
    .get('https://api.icndb.com/jokes/random?exclude=[explicit]')
    .then(response => res.send({ randomJoke: response.data.value }))
    .catch(error => {
      return res.status(error.statusCode).send({ error: error.message });
    });

const personalController = async (req, res) => {
  const { first, last } = req.params;

  try {
    const response = await axios.get(
      `https://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}&exclude=[explicit]`,
    );

    return res.send({ personalJoke: response.data.value });
  } catch (error) {
    return res.status(error.statusCode).send({ error: error.message });
  }
};

module.exports = {
  jokeController,
  randomController,
  personalController,
};
