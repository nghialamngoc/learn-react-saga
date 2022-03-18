import { LoginPayload } from 'features/auth/authSilce';
import axiosClient from './axiosClient';

const authApi = {
  login: async (payload: LoginPayload): Promise<any> => {
    try {
      const res: Promise<string> = axiosClient.post('/login', payload);
      return res;
    } catch (err) {
      Promise.reject(err);
    }
  },
};

export default authApi;
