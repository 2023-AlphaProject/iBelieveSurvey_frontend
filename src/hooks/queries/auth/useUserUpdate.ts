import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import kakaoAuthAPI from 'apis/kakaoAuthAPI';
import { useSnackBar } from 'hooks/useSnackBar';
import { userInfo } from 'types';

const useUserUpdate = (options = {}) => {
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();

  return useMutation(
    (payload: userInfo) => {
      return kakaoAuthAPI.put(payload);
    },
    {
      ...options,
      onSuccess: ({ data }) => {
        // Recoil User Info 추가
        console.log(data);
        navigate('/');
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

export default useUserUpdate;
