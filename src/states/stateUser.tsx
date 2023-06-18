import { atom } from 'recoil';
import { UserType } from 'types/userType';

export const userState = atom<UserType>({
  key: 'userState',
  default: {
    isUser: false,
    birthYear: '',
    email: '',
    gender: '',
    hidden_realName: '',
    realName: '',
    kakaoId: '',
    phoneNumber: '',
  },
});
