import { instance } from 'config/api';

const surveysAPI = {
  get: (id: number) => {
    return instance.get(`/surveys/${id}/`);
  },
  list: (page: number, ordering: string) => {
    return instance.get(`/surveys/?ordering=${ordering}&page=${page}`);
  },
  search: (page: number, ordering: string, search: string, category: string) => {
    return instance.get(
      `/surveys/?ordering=${ordering}&search=${search}&page=${page}&category=${category}`,
    );
  },
};

export default surveysAPI;
