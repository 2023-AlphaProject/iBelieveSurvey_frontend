import axios from 'axios';
import { BASEURL } from 'constants/BASEURL';
import userToken from 'utils/userToken';

const createInstance = () => {
  return axios.create({
    baseURL: BASEURL,
    timeout: 2000,
    withCredentials: true,
  });
};

const instance = createInstance();

if (userToken.user) {
  instance.interceptors.request.use(
    async (config) => {
      const newConfig = { ...config };
      newConfig.headers.Authorization = `Bearer ${userToken.user}`;
      return newConfig;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
}

export { instance };
