import axios from 'axios';
import { myCustomFunction } from '../layer/nodejs/dist/custom-lib';

export const handler = async (event: any, context: any) => {
  try {
    const response = await axios.get('https://api.example.com/data');
    const customResult = myCustomFunction(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello from Lambda!', data: customResult }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error occurred' }),
    };
  }
};