import axios from 'axios'

exports.main = (context, sendResponse) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/2`)
    .then(function (response) {
      sendResponse({
        statusCode: 200,
        body: { response: response.data },
      })
    })
    .catch((error) => {
      sendResponse({
        statusCode: error.response?.status || 500,
        body: {
          error:
            error.response?.data?.message || 'Failed to fetch Pokemon data',
        },
      })
    })
}


