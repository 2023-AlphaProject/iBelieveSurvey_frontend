import { atom } from 'recoil';
import { userType } from 'types/userUpdateType';

export const userState = atom<userType>({
  key: 'userState',
  default: {
    isUser: false,
    birthyear: '',
    email: '',
    gender: '',
    hidden_realName: '',
    realName: '',
    kakaoId: '',
    phoneNumber: '',
  },
});
