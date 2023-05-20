/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { bannerState } from 'states/stateBanner';

type openBannerType = {
  content: JSX.Element | string;
  title: string;
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
    ({ title, content, callback }: openBannerType) =>
      setBannerDataState({
        title,
        isOpen: true,
        content,
        callback,
      }),
    [setBannerDataState],
  );

  return { bannerDataState, openBanner, closeBanner };
};
