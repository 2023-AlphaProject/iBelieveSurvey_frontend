/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { bannerState } from 'states/stateBanner';

type OpenModalType = {
  title: string;
  content: JSX.Element | string;
  callback?: () => any;
};

export const useBanner = () => {
  const [bannerDataState, setBannerDataState] = useRecoilState(bannerState);

  const closeBanner = useCallback(
      () =>
          setBannerDataState((prev) => {
            return { ...prev, isOpen: false };
          }),
      [setBannerDataState],
  );

  const openBanner = useCallback(
      ({ title, content, callback }: OpenModalType) =>
          setBannerDataState({
            isOpen: true,
            title,
            content,
            callback,
          }),
      [setBannerDataState],
  );

  return { bannerDataState, openBanner, closeBanner };
};
