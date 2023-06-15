import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import { useSnackBar } from 'hooks';

const useAddSurvey = (options = {}) => {
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();

  return useMutation(
    (payload: FormData) => {
      return surveysAPI.post(payload);
    },
    {
      ...options,
      onSuccess: ({ data }) => {
        navigate('/survey/new/form', { state: { id: data?.id } });
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

export default useAddSurvey;
