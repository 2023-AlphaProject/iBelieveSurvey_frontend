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
  });
};

const instance = createInstance();

const AxiosInterceptor = (props: Props) => {
  if (userToken.user) {
    instance.interceptors.request.use(
      async (config) => {
        console.log(config);
        const newConfig = { ...config };
        newConfig.headers.Authorization = `Bearer ${userToken.user}`;
        return newConfig;
      },
      async (error) => {
        return Promise.reject(error);
      },
    );
  }
  return props.children;
};

export { instance, AxiosInterceptor };
