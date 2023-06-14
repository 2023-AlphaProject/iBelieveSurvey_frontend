import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'components/Box';
import { Button } from 'components/common';
import { useKakaoCallback } from 'hooks/queries/auth';
import UserInfoContainer from './UserInfoContainer';

const KakaoAuth = () => {
  const navigate = useNavigate();

  const init = {
    realName: '',
    phoneNumber: '010',
    birthYear: '',
    gender: '',
  };

  const [userInfo, setUserInfo] = useState(init);
  const code = new URL(window.location.href).searchParams.get('code');

  try {
    const { data } = useKakaoCallback(code ?? '');
    const tempUserInfo = data?.data;
    const cleanedString = tempUserInfo.replace(/:/g, '":"').replace(/, /g, '","');
    const jsonString = `{"${cleanedString}"}`;
    const userInfo = JSON.parse(jsonString);
    console.log(userInfo);
  } catch (err) {
    console.log(err);
  }
  console.log(userInfo);

  return <UserInfoContainer userInfo={userInfo} setUserInfo={setUserInfo} />;
};

export default KakaoAuth;
