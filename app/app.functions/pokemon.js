const axios = require("axios");

exports.main = (context, sendResponse) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/2`)
    .then(function (response) {
      return {
        statusCode: 200,
        body: { response },
        headers: {
          "Content-Type": "application/json",
        },
      };
    })
    .catch((error) => {
      return {
        statusCode:500,
        body: {
          error
        },
      };
    });
};
