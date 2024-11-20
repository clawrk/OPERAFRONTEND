import axios from 'axios';

const API_URL = 'http://ec2-18-191-44-49.us-east-2.compute.amazonaws.com:3000/api/v1/chats/c9de5c65-23df-4a0f-b02c-cb0d59b77151';

const setApiUrl = (url) => {
  API_URL = url;
};
const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer <token>',
        },
      });
      return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postRequest;