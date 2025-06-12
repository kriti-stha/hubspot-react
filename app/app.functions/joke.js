const axios = require("axios");

exports.main = (context, sendResponse) => {
  axios
    .get("https://official-joke-api.appspot.com/random_joke", {
    })
    .then(function (response) {
      console.log('Joke API Response:', JSON.stringify(response.data));
      return{ body: { response: response.data }, statusCode: 200 };
    })
    .catch(function (error) {
      console.error('Error fetching joke:', error);
      return{ body: { error: error.message }, statusCode: 500 };
    });
};
