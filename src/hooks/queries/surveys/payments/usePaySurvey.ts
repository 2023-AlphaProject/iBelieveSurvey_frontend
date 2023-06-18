import { useMutation } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import { useSnackBar } from 'hooks';

const usePaySurvey = (id: number, options = {}) => {
  const { handleSnackBar } = useSnackBar();

  return useMutation(
    () => {
      return surveysAPI.payments.post(id);
    },
    {
      ...options,
      onSuccess: ({ data }) => {
        const { innerWidth: width } = window;
        if (width > 768) {
          window.location.href = data.next_redirect_pc_url;
        } else {
          window.location.href = data.next_redirect_mobile_url;
        }
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

export default usePaySurvey;
