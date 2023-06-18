import axios from 'axios';
import { BASEURL } from 'constants/BASEURL';
import userToken from 'utils/userToken';

const createInstance = () => {
  return axios.create({
    baseURL: BASEURL,
    timeout: 2000,
    withCredentials: true,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MTI3MDY3LCJpYXQiOjE2ODcxMTYyNjcsImp0aSI6ImY2ZjQ5OTY2MmIyNDQ5ZTJiYzA5MmRmMTVlZTYwOTEwIiwidXNlcl9pZCI6N30.oDX2cANV4QjWYWXCmjhmqcAzyOPfqJ_2KL828nZ1tuk',
    },
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
