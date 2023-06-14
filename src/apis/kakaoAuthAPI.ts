import { instance } from 'config/api';

const kakaoAuthAPI = {
  callback: (code: string) => {
    return instance.get(`/user/kakao/callback?code=${code}`);
  },
  put: () => {
    return instance.put(`/user/update`);
  },
};

export default kakaoAuthAPI;
