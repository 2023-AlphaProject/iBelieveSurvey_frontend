/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import participantAPI from 'apis/participantAPI';
import { useSnackBar } from 'hooks';

const useAddParticipant = (id: number) => {
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();

  return useMutation(
    (data: any) => {
      // console.log(id);
      // console.log(data);
      return participantAPI.post(id, data);
    },
    {
      onSuccess: () => {
        navigate(`/survey/${id}`);
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

export default useAddParticipant;
