import { useMutation } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import { useNavigate } from 'react-router-dom';
import { useSnackBar } from 'hooks';

const useUpdateSurvey = (id: number, options = {}) => {
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();

  return useMutation(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (payload: any) => {
      return surveysAPI.patch(id, payload);
    },
    {
      ...options,
      onSuccess: () => {
        navigate('/survey/new/payment', { state: { id } });
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

export default useUpdateSurvey;
