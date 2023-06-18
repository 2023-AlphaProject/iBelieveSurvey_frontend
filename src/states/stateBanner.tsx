import { atom } from 'recoil';

type BannerType = {
  title: string;
  content: JSX.Element | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback?: () => any;
};

export const bannerState = atom<BannerType>({
  key: 'bannerState',
  default: {
    title: '',
    content: '',
  },
});
