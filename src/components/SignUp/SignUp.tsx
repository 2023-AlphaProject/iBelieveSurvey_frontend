import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'components/Box';
import { useSnackBar } from 'hooks';
import { Button } from 'components/common';
import { useKakaoCallback, useUserUpdate } from 'hooks/queries/auth';
import UserInfoContainer from './UserInfoContainer';

const KakaoAuth = () => {
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();

  const init = {
    realName: '',
    phoneNumber: '010',
    birthYear: '',
    gender: '',
  };

  const [userInfo, setUserInfo] = useState(init);
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
      }
      console.log(initUserInfo);
    } catch (err) {
      console.log(err);
    }
  }, [data]);

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
      // return;
    }
    const userUpdateQuery = useUserUpdate(userInfo);
    userUpdateQuery.refetch();
  };

  return <UserInfoContainer userInfo={userInfo} setUserInfo={setUserInfo} onSubmit={onSubmit} />;
};

export default KakaoAuth;
