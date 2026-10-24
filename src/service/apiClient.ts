import axios from 'axios';

const API_URL = 'http://localhost:5036/api';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});
