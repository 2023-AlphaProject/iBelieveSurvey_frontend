import { useState, useCallback, ChangeEvent } from 'react';

export type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

export const useInput = (initValue = '', limit: undefined | number = undefined) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.substring(0, limit));
  }, []);
  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};
export default useInput;
