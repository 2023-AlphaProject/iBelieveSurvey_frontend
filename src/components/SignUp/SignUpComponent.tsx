import { useEffect, useState } from 'react';
import { Flex } from 'components/Box';
import { useSnackBar } from 'hooks';
import { useUserUpdate } from 'hooks/queries/auth';
import { useLocation } from 'react-router';
import UserInfoContainer from './UserInfoContainer';

const SignUpComponent = () => {
  const { handleSnackBar } = useSnackBar();
  const { state } = useLocation();
  console.log(state);

  const initInfo = {
    realName: '',
    phoneNumber: '010',
    birthYear: '',
    gender: '',
  };

  const [userInfo, setUserInfo] = useState(initInfo);
  // const userUpdate = async () => {
  //   const { refetch } = useUserUpdate(userInfo);
  //   return refetch();
  // };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !userInfo.realName ||
      userInfo.phoneNumber === '010' ||
      !userInfo.birthYear ||
      !userInfo.gender
    ) {
      handleSnackBar({
        variant: 'error',
        message: '공백 없이 작성해주세요.',
      })();
      return;
    }
    console.log('asd');
    // userUpdate();
  };

  return <UserInfoContainer userInfo={userInfo} setUserInfo={setUserInfo} onSubmit={onSubmit} />;
};

export default SignUpComponent;
