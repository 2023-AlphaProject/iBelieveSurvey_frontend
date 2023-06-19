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
  search: (
    page: number,
    search: string,
    category: string,
    participants: string,
    surveyState: string,
    ordering: string,
  ) => {
    return instance.get(
      `/surveys/?page=${page}&search=${search}${category && `&category=${category}`}${
        participants && `&${participants}`
      }${surveyState && `&${surveyState}`}&ordering=${ordering}`,
    );
  },
};

export default surveysAPI;
