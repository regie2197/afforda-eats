// /frontend/api/api.ts

import axios from 'axios';


console.log('API URL from .env:', process.env.NEXT_PUBLIC_API_URL);
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // This reads from your env
  withCredentials: true,  // If you need to send cookies or session info
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
