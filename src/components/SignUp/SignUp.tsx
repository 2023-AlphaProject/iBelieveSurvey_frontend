import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackBar } from 'hooks';
import { Flex } from 'components/Box';
import { Button } from 'components/common';
import UserInfoContainer from './UserInfoContainer';

const KakaoAuth = () => {
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();

  const init = {
    realName: '',
    phoneNumber: '010',
    birth: 2000,
    gender: '',
  };

  const [userInfo, setUserInfo] = useState(init);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.realName || !userInfo.phoneNumber || !userInfo.birth || !userInfo.gender) {
      handleSnackBar({
        variant: 'error',
        message: '공백없이 작성해주세요.',
      });
      // return;
    }
    // postData
  };

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
          // 카카오계정 연결에 성공한 경우, 회원 정보 유무 확인
          // getMyFridge(res.data.toString()).then((data) => {
          //   if (!data) {
          //     navigate("/init", { state: { kakaoId: res.data } });
          //   } else {
          //     setUserID({ ref: data.id, kakao: data.kakaoId, link: data.link });
          //     navigate(`/refrigerator/${data.kakaoId}`);
          //   }
          // });
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
