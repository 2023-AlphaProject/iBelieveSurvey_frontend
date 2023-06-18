import { useQuery } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useCartsQuery = (id: number) => {
  return useQuery([QUERY_KEYS.CARTS, id], () => surveysAPI.carts.get(id));
};

export default useCartsQuery;
