import { api, ENDPOINTS } from './api';

export const getMockedTarget = async () => {
  try {
    const endpoint = ENDPOINTS.GET_MOCKED_TARGET;
    const response = await api.get(endpoint, { responseType: 'blob' });
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.response?.data?.message || 'Failed to fetch target');
  }
};
