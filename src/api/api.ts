import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000/api';

export enum ENDPOINTS {
  LOGIN = '/login',
  SIGNUP = '/signup',
  GET_TREES = '/user/:user_id/trees',
  SAVE_TREE = '/user/:user_id/trees',
  UPDATE_TREE = '/user/:user_id/trees/:tree_id',
  GET_MOCKED_TARGET = '/get-mocked-target',
}

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
