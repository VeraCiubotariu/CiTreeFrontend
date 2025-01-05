import { api, ENDPOINTS } from './api';

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post(ENDPOINTS.LOGIN, { username, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const signup = async (userData: Record<string, any>) => {
  try {
    const response = await api.post(ENDPOINTS.SIGNUP, userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Signup failed');
  }
};
