/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from 'recoil';

type ModalType = {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  callback?: () => any;
};

export const bannerState = atom<ModalType>({
  key: 'bannerState',
  default: {
    title: '',
    isOpen: false,
    content: '',
  },
});
