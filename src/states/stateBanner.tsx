import { atom } from 'recoil';

type BannerType = {
  title: string;
  content: JSX.Element | string;
  callback?: () => any;
};

export const bannerState = atom<BannerType>({
  key: 'bannerState',
  default: {
    title: '',
    content: '',
  },
});
