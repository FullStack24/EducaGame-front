import axios from 'axios';

const baseURL = 'http://localhost:3001';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      removeTokenAndLogout();
    }
    return Promise.reject(error);
  }
);

export const apiNoAuth = axios.create({
  baseURL: baseURL,
});

function getToken() {
  try {
    return typeof localStorage !== 'undefined'
      ? localStorage.getItem('token') ?? ''
      : '';
  } catch (error) {
    console.log(error);
    return '';
  }
}

function removeTokenAndLogout() {
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }
  if (window) {
    window.location.href = '/login';
  }
}
