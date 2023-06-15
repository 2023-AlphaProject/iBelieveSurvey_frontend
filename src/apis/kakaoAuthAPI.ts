import { instance } from 'config/api';
import { userInfo } from 'types';

const kakaoAuthAPI = {
  callback: (code: string) => {
    return instance.get(`/user/kakao/callback?code=${code}`);
  },
  put: (userInfo: userInfo) => {
    return instance.put(`/user/update`, userInfo);
  },
};

export default kakaoAuthAPI;
