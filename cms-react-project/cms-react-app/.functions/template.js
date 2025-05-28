import axios from "axios";

exports.main = ({ accountId }, sendResponse) => {
  axios
    .get("https://api.hubapi.com/contentsearch/v2/search", {
      params: {
        portalId: accountId,
        term: "searchTerm",
      },
    })
    .then(function (response) {
      console.log("Data received from the search API:", response.data);
      sendResponse({ body: { response: response.data }, statusCode: 200 });
    })
    .catch(function (error) {

      sendResponse({ body: { error: error.message }, statusCode: 500 });
    });
};
