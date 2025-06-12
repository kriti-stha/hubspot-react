const axios = require("axios");

exports.main = async (context) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/2`);
    console.log("Pokemon API Response:", JSON.stringify(response.data));

    return {
      statusCode: 200,
      body: response.data,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("Error fetching pokemon:", error);
    return {
      statusCode: 500,
      body: { error: error.message },
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
