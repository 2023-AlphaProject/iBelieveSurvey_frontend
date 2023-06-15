import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKakaoCallback, useUserUpdate } from 'hooks/queries/auth';

const KakaoAuth = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const { data } = useKakaoCallback(code ?? '');

  useEffect(() => {
    try {
      const tempUserInfo = data?.data;
      const cleanedString = tempUserInfo.replace(/:/g, '":"').replace(/, /g, '","');
      const jsonString = `{"${cleanedString}"}`;
      const initUserInfo = JSON.parse(jsonString);

      if (initUserInfo?.token) {
        sessionStorage.setItem('userToken', initUserInfo?.token);
        navigate('/signup', { state: initUserInfo });
      }
    } catch (err) {
      console.log(err);
    }
  }, [data]);

  return <div />;
};

export default KakaoAuth;
