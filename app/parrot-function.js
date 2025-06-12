// export const main = async (context) => {
//   return {
//     statusCode: 200,
//     body: {
//       message: `SQUAWK: ${context.params.message}`,
//     },
//   }
// }

import { logInfo } from '@hubspot/cms-components'

exports.main = (context, sendResponse) => {
  try {
    const message = context.params.message || 'Hello!'
    logInfo('Parrot function called with message:', message)

    sendResponse({
      statusCode: 200,
      body: {
        message: `SQUAWK: ${message}`,
      },
    })
  } catch (error) {
    console.error('Error in parrot function:', error)
    sendResponse({
      statusCode: 500,
      body: {
        error: 'Something went wrong',
      },
    })
  }
}
