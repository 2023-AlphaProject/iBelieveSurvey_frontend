import { useMutation } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import { useSnackBar } from 'hooks';

const useUpdateCarts = (id: number, uuid: number, options = {}) => {
  const { handleSnackBar } = useSnackBar();

  return useMutation(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (payload: any) => {
      return surveysAPI.carts.patch(id, uuid, payload);
    },
    {
      ...options,
      onError: () => {
        handleSnackBar({
          variant: 'error',
          message: '오류가 발생했습니다. 잠시 후 다시 시도해주세요',
        })();
      },
    },
  );
};

export default useUpdateCarts;
