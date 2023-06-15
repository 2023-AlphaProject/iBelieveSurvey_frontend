import { instance } from 'config/api';

const surveysAPI = {
  get: (id: number) => {
    return instance.get(`/surveys/${id}/`);
  },
  list: (page: number, ordering: string) => {
    return instance.get(`/surveys/?ordering=${ordering}&page=${page}`);
  },
  search: (page: number, ordering: string, search: string) => {
    return instance.get(`/surveys/?ordering=${ordering}&search=${search}&page=${page}`);
  },
};

export default surveysAPI;