/* eslint-disable @typescript-eslint/no-explicit-any */
import { instance } from 'config/api';

const surveysAPI = {
  get: (id: number) => {
    return instance.get(`/surveys/${id}/`);
  },
  post: (survey: FormData) => {
    return instance.post('/surveys/', survey);
  },
  patch: (id: number, data: any) => {
    return instance.patch(`/surveys/${id}/`, data);
  },
  list: (page: number, ordering: string) => {
    return instance.get(`/surveys/?ordering=${ordering}&page=${page}`);
  },
  search: (page: number, ordering: string, search: string) => {
    return instance.get(`/surveys/?ordering=${ordering}&search=${search}&page=${page}`);
  },
  carts: {
    get: (id: number) => {
      return instance.get(`/surveys/${id}/carts/`);
    },
    post: (id: number, data: any) => {
      return instance.post(`/surveys/${id}/carts/`, data);
    },
    patch: (id: number, uuid: number, data: any) => {
      return instance.patch(`/surveys/${id}/carts/${uuid}/`, data);
    },
    delete: (id: number, uuid: number) => {
      return instance.delete(`/surveys/${id}/carts/${uuid}/`);
    },
  },
  payments: {
    post: (id: number) => {
      return instance.post(`/surveys/${id}/carts/payments/`);
    },
    success: (id: number) => {
      return instance.get(`/surveys/${id}/carts/payments/success/`);
    },
  },
};

export default surveysAPI;
