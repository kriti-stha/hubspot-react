const axios = require("axios");

exports.main = async (context, sendResponse) => {
  // const objectType = ''
  // const pipelineId = ''
  // const url = `https://api.hubapi.com/crm/v3/pipelines/${objectType}/${pipelineId}`;
  const url = `https://api.hubapi.com/crm/v3/pipelines`;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${context.secrets.HUBSPOT_API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return {
      statusCode: 200,
      body: response.data,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    console.error("the error is ------>", error);
    return {
      statusCode: 500,
      body: {
        error: error,
      },
    };
  }
};
