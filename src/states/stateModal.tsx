import { atom } from 'recoil';

type ModalType = {
  isOpen: boolean;
  title: string;
  content: JSX.Element | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback?: () => any;
};

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    isOpen: false,
    title: '',
    content: '',
  },
});
