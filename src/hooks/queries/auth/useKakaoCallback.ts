import { useQuery } from '@tanstack/react-query';
import kakaoAuthAPI from 'apis/kakaoAuthAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useKakaoCallback = (code: string) => {
  return useQuery([QUERY_KEYS.KAKAO_AUTH_CALLBACK, code], () => kakaoAuthAPI.callback(code));
};

export default useKakaoCallback;
