import { myCustomFunction } from '../layer/nodejs/dist/custom-lib';

export const handler = async (event: any, context: any) => {
  try {
    // Get data from query string parameters
    const data = event.queryStringParameters?.data || '';
    
    // Process the data with myCustomFunction
    const customResult = myCustomFunction(data);
    
    return {
      statusCode: 200,
      body: JSON.stringify(customResult),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error occurred' }),
    };
  }
};