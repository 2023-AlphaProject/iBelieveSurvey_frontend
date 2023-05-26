import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackBar } from 'hooks';
import { Box, Flex, Label } from 'components/Box';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';

const Container = styled.div`
  padding: 1.5rem;
  width: 25rem;
  height: 35rem;
  border: 3px solid;
  border-radius: 2rem;
  border-color: ${COLORS.primary};
`;

const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  height: 3rem;
  border: none;
  border-bottom: 2px solid ${COLORS.primary};
`;

const InfoLabel = styled.div`
  width: 5rem;
  line-height: 2rem;
  margin-top: 15px;
  text-align: center;
  border-radius: 15px;
  background-color: ${COLORS.secondary};
  color: #fff;
`;

const KakaoAuth = () => {
  const navigate = useNavigate();
  const { handleSnackBar } = useSnackBar();

  const init = {
    realName: '',
    phoneNumber: '',
    birth: '0',
    gender: '',
  };

  const [userInfo, setUserInfo] = useState(init);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      userInfo.realName === '' ||
      userInfo.phoneNumber === '' ||
      userInfo.birth === '0' ||
      userInfo.gender === ''
    ) {
      handleSnackBar({
        variant: 'error',
        message: '공백없이 작성해주세요.',
      });
      // return;
    }
    // postData
  };

  const onUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'realName') {
      setUserInfo({
        ...userInfo,
        realName: value,
      });
    }
    if (name === 'phoneNumber') {
      setUserInfo({
        ...userInfo,
        phoneNumber: value,
      });
    }
    if (name === 'birth') {
      setUserInfo({
        ...userInfo,
        birth: value,
      });
    }
    if (name === 'gender') {
      setUserInfo({
        ...userInfo,
        gender: value,
      });
    }
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

  return (
    <Flex height="100%" flexWrap="wrap" alignItems="center">
      <Container>
        <InfoLabel style={{ margin: '0' }}>이름</InfoLabel>
        <Input
          value={userInfo.realName}
          onChange={onUserInfoChange}
          type="text"
          placeholder="이름을 입력학세요."
          name="realName"
        />
        <InfoLabel>이름</InfoLabel>
        <Input
          value={userInfo.phoneNumber}
          onChange={onUserInfoChange}
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          placeholder="테스트를 작성해 보세요."
          name="phoneNumber"
        />
        <InfoLabel>휴대폰 번호</InfoLabel>
        <Input
          value={userInfo.realName}
          onChange={onUserInfoChange}
          type="text"
          placeholder="테스트를 작성해 보세요."
          name="realName"
        />
        <InfoLabel>이름</InfoLabel>
        <Input
          value={userInfo.realName}
          onChange={onUserInfoChange}
          type="text"
          placeholder="테스트를 작성해 보세요."
          name="realName"
        />
      </Container>
    </Flex>
  );
  /* <Input
        value={userInfo.realName}
        onChange={onUserInfoChange}
        type="text"
        placeholder="테스트를 작성해 보세요."
        name="realName"
      />
      <Input
        value={userInfo.phoneNumber}
        onChange={onUserInfoChange}
        type="text"
        placeholder="테스트를 작성해 보세요."
        name="phoneNumber"
      />
      <Input
        value={userInfo.phoneNumber}
        onChange={onUserInfoChange}
        type="text"
        placeholder="테스트를 작성해 보세요."
        name="birth"
      />
      <Input
        value={userInfo.phoneNumber}
        onChange={onUserInfoChange}
        type="text"
        placeholder="테스트를 작성해 보세요."
        name="phoneNumber"
      /> */
};

export default KakaoAuth;
