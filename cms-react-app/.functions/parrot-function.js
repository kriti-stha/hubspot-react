export const main = async (context) => {
  return {
    statusCode: 200,
    body: {
      message: `SQUAWK: ${context.params.message}`,
    },
  }
}

// exports.main = (context, sendResponse) => {
//   try {
//     const message = context.params.message || 'Hello!';
//     console.log('Parrot function called with message:', message);

//     sendResponse({
//       statusCode: 200,
//       body: JSON.stringify({
//         message: `SQUAWK: ${message}`
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   } catch (error) {
//     console.error('Error in parrot function:', error);
//     sendResponse({
//       statusCode: 500,
//       body: JSON.stringify({
//         error: 'Something went wrong'
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   }
// };
