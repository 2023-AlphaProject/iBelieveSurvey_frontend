import axios from 'axios';
import { BASEURL } from 'constants/BASEURL';
import userToken from 'utils/userToken';

interface Props {
  children: React.ReactElement;
}

const createInstance = () => {
  return axios.create({
    baseURL: BASEURL,
    timeout: 2000,
    withCredentials: true,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });
};

const instance = createInstance();

const AxiosInterceptor = (props: Props) => {
  instance.interceptors.request.use(
    async (config) => {
      const newConfig = { ...config };
      const user = userToken();
      if (user.user) newConfig.headers.Authorization = `Bearer ${user.user}`;
      return newConfig;
    },
    async (error) => {
      return Promise.reject(error);
    },
  );
  return props.children;
};

export { instance, AxiosInterceptor };
