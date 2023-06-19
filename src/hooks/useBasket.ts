/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { basketState, basketType } from 'states/stateBasket';

export const useBasket = () => {
  const [basketDataState, setBasketDataState] = useRecoilState(basketState);

  const setGifts = useCallback(
    ({ surveyId, basketData }: basketType) =>
      setBasketDataState({
        surveyId,
        basketData,
      }),
    [],
  );

  return { surveyId: basketDataState.surveyId, basketData: basketDataState.basketData, setGifts };
};
