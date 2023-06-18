import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackBar } from 'hooks';
import { useKakaoCallback, useUserUpdate } from 'hooks/queries/auth';

const KakaoAuth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const { data } = useKakaoCallback(code ?? '');
  const { handleSnackBar } = useSnackBar();

  useEffect(() => {
    try {
      const tempUserInfo = data?.data;
      const cleanedString = tempUserInfo.replace(/:/g, '":"').replace(/, /g, '","');
      const jsonString = `{"${cleanedString}"}`;
      const initUserInfo = JSON.parse(jsonString);
      sessionStorage.setItem('userToken', initUserInfo?.token);
      console.log(initUserInfo);

      if (initUserInfo?.exist) {
        navigate('/', { state: initUserInfo });
      }

      if (!initUserInfo?.exist) {
        navigate('/signup', { state: initUserInfo });
      }
    } catch (err) {
      handleSnackBar({
        variant: 'error',
        message: '오류가 발생했습니다.',
      })();
    }
  }, [data]);

  return <div />;
};

export default KakaoAuth;
