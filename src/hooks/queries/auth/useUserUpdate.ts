import { useQuery } from '@tanstack/react-query';
import kakaoAuthAPI from 'apis/kakaoAuthAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useUserUpdate = (userData: any) => {
  return useQuery([QUERY_KEYS.USER_UPDATE, userData], () => kakaoAuthAPI.put());
};

export default useUserUpdate;
