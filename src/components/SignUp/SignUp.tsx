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
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    // const { data } = useKakaoCallback(code ?? '');

    axios
      .get(`https://api.ibelievesurvey.com/user/kakao/callback?code=${code}`)
      .then((res) => {
        if (res.status === 200) {
          console.log('res: ', res);
        }
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  }, []);
  console.log(userInfo);

  return <UserInfoContainer userInfo={userInfo} setUserInfo={setUserInfo} />;
};

export default KakaoAuth;
