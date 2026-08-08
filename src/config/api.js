import axios from 'axios';

// The port where your Spring Boot backend runs
// const BACKEND_URL = 'http://localhost:8082';
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8082';

export const API_BASE_URL = BACKEND_URL;

// Create a central axios instance for all API calls
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Automatic JWT Injector middleware before any request leaves the frontend
api.interceptors.request.use(
  (config) => {
    // Fetch the fresh token from local storage
    const token = localStorage.getItem('jwt');
    
    // If token exists, add it to the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors automatically
    return Promise.reject(error);
  }
);

// Set default format to JSON for all POST requests
api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
