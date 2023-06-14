import axios from 'axios';
import { BASEURL } from 'constants/BASEURL';

const createInstance = () => {
  return axios.create({
    baseURL: BASEURL,
    timeout: 2000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const instance = createInstance();
