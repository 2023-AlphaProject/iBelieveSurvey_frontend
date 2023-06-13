import { instance } from 'config/api';

const kakaoAuthAPI = {
  callback: (code: string) => {
    return instance.get(`/user/kakao/callback?code=${code}`);
  },
  list: (page: number, ordering: string) => {
    return instance.get(`/surveys/?ordering=${ordering}&page=${page}`);
  },
  search: (page: number, ordering: string, search: string) => {
    return instance.get(`/surveys/?ordering=${ordering}&search=${search}&page=${page}`);
  },
};

export default kakaoAuthAPI;
