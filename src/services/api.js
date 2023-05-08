import axios from 'axios';

const API_URL = 'https://64579fb71a4c152cf9864a8f.mockapi.io/users';

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};