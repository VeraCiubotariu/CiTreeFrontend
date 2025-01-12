import { api, ENDPOINTS } from './api';
import { User } from '../model/user-types';

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post(ENDPOINTS.LOGIN, { username, password });
    console.log(response);
    return response.data.user as User;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const signup = async (userData: Record<string, any>) => {
  try {
    const response = await api.post(ENDPOINTS.SIGNUP, userData);
    return response.data.user as User;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Signup failed');
  }
};
