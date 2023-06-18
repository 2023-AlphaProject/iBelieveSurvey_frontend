import { useMutation } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import { queryClient } from 'config/quertClients';
import { useSnackBar } from 'hooks';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useDeleteCarts = (id: number, uuid: number, options = {}) => {
  const { handleSnackBar } = useSnackBar();

  return useMutation(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => {
      return surveysAPI.carts.delete(id, uuid);
    },
    {
      ...options,
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEYS.CARTS, id]);
      },
      onError: () => {
        handleSnackBar({
          variant: 'error',
          message: '오류가 발생했습니다. 잠시 후 다시 시도해주세요',
        })();
      },
    },
  );
};

export default useDeleteCarts;
