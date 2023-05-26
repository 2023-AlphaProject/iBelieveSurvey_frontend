import { Button } from 'components/common';
import { COLORS } from 'constants/COLOR';
import React from 'react';
import styled from 'styled-components';
import UserInfoType from './SignUp';

type StyleProps = {
  width?: string;
  margin?: string;
  backgroundcolor?: string;
  color?: string;
};

type UserInfoType = {
  realName: string;
  phoneNumber: string;
  birth: number;
  gender: any;
};

type UserInfoProps = {
  userInfo: UserInfoType;
  setUserInfo: any;
};

const Container = styled.div`
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  width: 25rem;
  height: 35rem;
  border: 3px solid;
  border-radius: 2rem;
  border-color: ${COLORS.primary};
`;

const Input = styled.input`
  width: 90%;
  font-size: 1rem;
  height: 3rem;
  margin-left: 10px;
  border: none;
  border-bottom: 2px solid ${COLORS.primary};
`;

const InfoLabel = styled.div<StyleProps>`
  width: ${(props) => props.width || '5rem'};
  line-height: 2rem;
  margin-top: 20px;
  text-align: center;
  border-radius: 15px;
  background-color: ${COLORS.secondary};
  color: #fff;
`;

const GenderButton = styled(Button)<StyleProps>`
  height: 2rem;
  width: 3.5rem;
  margin: 15px 20px 0 0;
  color: ${(props) => props.color};
  border: 3px solid ${COLORS.primary};
  background-color: ${(props) => props.backgroundcolor};
`;

const UserInfoContainer = ({ userInfo, setUserInfo }: UserInfoProps) => {
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
        phoneNumber: value
          .replace(/[^0-9]/g, '')
          .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
          .replace(/(-{1,2})$/g, ''),
      });
    }
    if (name === 'gender') {
      setUserInfo({
        ...userInfo,
        gender: value,
      });
    }
    if (name === 'birth') {
      setUserInfo({
        ...userInfo,
        birth: value,
      });
    }
  };

  return (
    <Container>
      <InfoLabel margin="0">이름</InfoLabel>
      <Input
        value={userInfo.realName}
        onChange={onUserInfoChange}
        type="text"
        placeholder="이름을 입력하세요."
        name="realName"
      />
      <InfoLabel width="7rem">휴대폰 번호</InfoLabel>
      <Input
        value={userInfo.phoneNumber}
        onChange={onUserInfoChange}
        type="tel"
        placeholder="휴대폰 번호를 - 없이 입력하세요."
        name="phoneNumber"
        maxLength={13}
      />
      <InfoLabel>성별</InfoLabel>
      <GenderButton
        name="gender"
        value="male"
        onClick={(e: any) => onUserInfoChange(e)}
        backgroundcolor={userInfo.gender === 'male' ? COLORS.primary : '#fff'}
        color={userInfo.gender === 'male' ? '#fff' : '#000'}
      >
        남성
      </GenderButton>
      <GenderButton
        name="gender"
        value="female"
        onClick={(e: React.ChangeEvent<HTMLInputElement>) => onUserInfoChange(e)}
        backgroundcolor={userInfo.gender === 'female' ? COLORS.primary : '#fff'}
        color={userInfo.gender === 'female' ? '#fff' : '#000'}
      >
        여성
      </GenderButton>
      <InfoLabel width="6rem">출생연도</InfoLabel>
      <Input
        value={userInfo.realName}
        onChange={onUserInfoChange}
        type="text"
        placeholder="태어난 연도를 입력해주세요."
        name="realName"
      />
    </Container>
  );
};

export default UserInfoContainer;
