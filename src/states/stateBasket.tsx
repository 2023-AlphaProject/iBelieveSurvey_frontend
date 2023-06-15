import { atom } from 'recoil';
import { giftType } from 'types';

export type basketItemType = {
  template?: string;
  gift?: giftType;
  quantity?: number;
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
