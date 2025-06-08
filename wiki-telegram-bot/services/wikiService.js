const axios = require('axios');

exports.getRandomArticle = async () => {
  const url = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';
  const response = await axios.get(url);
  return response.data;
};
