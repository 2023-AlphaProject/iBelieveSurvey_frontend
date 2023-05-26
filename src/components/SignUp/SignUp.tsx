import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'components/Box';
import { Button } from 'components/common';
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

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const grantType = 'authorization_code';
    const REDIRECT_URL = `${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;
    const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
    console.log(code);

    axios
      .get(`http://localhost/user/kakao/callback?code=${code}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userInfo);

  return (
    <Flex height="100%" flexWrap="wrap" alignItems="center">
      <UserInfoContainer userInfo={userInfo} setUserInfo={setUserInfo} />
    </Flex>
  );
};

export default KakaoAuth;
