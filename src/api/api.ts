import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000/api';

export enum ENDPOINTS {
  LOGIN = '/login',
  SIGNUP = '/signup',
}

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
