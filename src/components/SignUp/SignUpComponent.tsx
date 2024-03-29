import { useState } from 'react';
import { useSnackBar } from 'hooks';
import { useUserUpdate } from 'hooks/queries/auth';
import { useLocation } from 'react-router';
import { userInfo } from 'types';
import UserInfoContainer from './UserInfoContainer';

const SignUpComponent = () => {
  const { mutate: userUpdate } = useUserUpdate();
  const { handleSnackBar } = useSnackBar();
  const { state } = useLocation();
  // const userToken = state?.token;

  const initInfo: userInfo = {
    realName: state?.realName || '',
    phoneNumber: state?.phoneNumber || '010',
    birthyear: state?.birthyear || '',
    gender: state?.gender || '',
  };
  const [userInfo, setUserInfo] = useState(initInfo);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !userInfo.realName ||
      userInfo.phoneNumber === '010' ||
      !userInfo.birthyear ||
      !userInfo.gender
    ) {
      handleSnackBar({
        variant: 'error',
        message: '공백 없이 작성해주세요.',
      })();
      return;
    }
    userUpdate(userInfo);
  };

  return <UserInfoContainer userInfo={userInfo} setUserInfo={setUserInfo} onSubmit={onSubmit} />;
};

export default SignUpComponent;
