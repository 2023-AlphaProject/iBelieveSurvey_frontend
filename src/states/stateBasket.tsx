import { atom } from 'recoil';
import { giftType } from 'types';

// https: velog.io/@chchaeun/Recoil%EB%A1%9C-%EC%A0%84%EC%97%AD-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
// recoil 새로고침시에도 유지

export type basketItemType = {
  template: number;
  gift: giftType;
  quantity: number;
  price: number;
};

export type basketType = {
  surveyId: string | null;
  basketData: basketItemType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setGifts?: any;
};

export const basketState = atom<basketType>({
  key: 'basketState',
  default: {
    surveyId: '',
    basketData: [],
  },
});
