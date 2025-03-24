import { 
  DynamoDBClient 
} from '@aws-sdk/client-dynamodb';
import { 
  DynamoDBDocumentClient, 
  PutCommand, 
  GetCommand, 
  UpdateCommand, 
  DeleteCommand 
} from '@aws-sdk/lib-dynamodb';
import { v4 as uuidv4 } from 'uuid';

export const myCustomFunction = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map((item) => item.value * 2);
  } else if (typeof data === 'object' && data !== null) {
    const result: { [key: string]: number } = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        result[key] = data[key] * 2;
      }
    }
    return result;
  } else if (typeof data === 'number') {
    return data * 2;
  }
  return null;
};