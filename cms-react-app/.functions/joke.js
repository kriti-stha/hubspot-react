import axios from "axios";

exports.main = ({ accountId }, sendResponse) => {
  console.error('Fetching joke...');
  axios
    .get("https://official-joke-api.appspot.com/random_joke", {
    })
    .then(function (response) {
      console.log('Joke API Response:', JSON.stringify(response.data));
      sendResponse({ body: { response: response.data }, statusCode: 200 });
    })
    .catch(function (error) {
      console.error('Error fetching joke:', error);
      sendResponse({ body: { error: error.message }, statusCode: 500 });
    });
};
