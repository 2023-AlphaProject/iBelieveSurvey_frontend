import React from 'react';
import { Flex } from 'components/Box';
import { Button } from 'components/common';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import { StyleProps, UserInfoProps } from './types';

const Container = styled.div`
  padding: 1.5rem;
  width: 20rem;
  height: 33rem;
  border: 3px solid;
  border-radius: 2rem;
  border-color: ${COLORS.primary};
  // 자동완성 background auto filled 지우기
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
  }
`;

const Input = styled.input`
  width: 90%;
  font-size: 1rem;
  height: 2rem;
  margin: 0 0 10px 10px;
  border: none;
  border-bottom: 2px solid ${COLORS.primary};
  // 자동완성 background auto filled 지우기
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
  }
`;

const InfoLabel = styled.div<StyleProps>`
  width: ${(props) => props.width || '5rem'};
  line-height: 2rem;
  text-align: center;
  border-radius: 15px;
  background-color: ${COLORS.secondary};
  color: #fff;
`;

const Select = styled.select`
  width: 90%;
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid ${COLORS.primary};
  outline: none;
`;

const GenderButton = styled(Button)<StyleProps>`
  height: 2rem;
  margin: 0 10px 10px 0;
  color: ${(props) => props.color};
  border: 3px solid ${COLORS.primary};
  background-color: ${(props) => props.backgroundcolor};
`;

const UserInfoContainer = ({ userInfo, setUserInfo, onSubmit }: UserInfoProps) => {
  const onUserInfoChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
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
    if (name === 'birthYear') {
      setUserInfo({
        ...userInfo,
        birthYear: value,
      });
    }
  };

  // const onSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (
  //     !userInfo.realName ||
  //     userInfo.phoneNumber === '010' ||
  //     !userInfo.birthYear ||
  //     !userInfo.gender
  //   ) {
  //     handleSnackBar({
  //       variant: 'error',
  //       message: '공백 없이 작성해주세요.',
  //     })();
  //     console.log('asd');
  //   }
  // };

  return (
    <Flex justifyContent="center" alignItems="center" height="100%">
      <Container>
        <Flex flexWrap="wrap" alignItems="center" height="100%">
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
          <div>
            <GenderButton
              name="gender"
              value="male"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          </div>
          <InfoLabel width="6rem">출생연도</InfoLabel>
          <Select name="birthYear" onChange={(e) => onUserInfoChange(e)}>
            {Array.from({ length: 2024 - 1960 }, (_, index) => (
              <option key={index}>{1960 + index}</option>
            ))}
          </Select>
          <Flex width="100%" justifyContent="center">
            <Button width="50%" onClick={(e: React.FormEvent<Element>) => onSubmit(e)}>
              회원가입
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default UserInfoContainer;
