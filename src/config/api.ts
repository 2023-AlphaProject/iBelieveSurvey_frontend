import axios from 'axios';
import { BASEURL } from 'constants/BASEURL';

const createInstance = () => {
  return axios.create({
    baseURL: BASEURL,
    timeout: 2000,
    withCredentials: true,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MTE1ODgyLCJpYXQiOjE2ODcxMDUwODIsImp0aSI6IjkwZDU4MGVhNDkwNzQ1ODBiZjNiNjM4YmU5OWE1MDRlIiwidXNlcl9pZCI6N30.wqu-vuJTrExeYCL7EwGxeY5c9-l83LTbF62gCrMhYDU',
    },
  });
};

export const instance = createInstance();
