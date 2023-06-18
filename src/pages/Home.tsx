import { useLocation } from 'react-router';
import { userState } from 'states/stateUser';
import { useSetRecoilState } from 'recoil';
import { Flex, Label, Box } from 'components/Box';
import { Button } from 'components/common';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import { Navbar } from 'components/Navbar';
import { Footer } from 'components/Footer';
import { Card } from 'components/Survey';
import { useSurveyListQuery } from 'hooks/queries/surveys';
import { surveyType } from 'types';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

interface BoxProps {
  right?: string;
  left?: string;
  top?: string;
}

const TextBox = styled.div<BoxProps>`
  width: 21.5rem;
  padding: 1rem;
  background: ${COLORS.secondary};
  border-radius: 1.5rem;
  box-shadow: 2px 3px 3px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

const GradBox = styled.div<BoxProps>`
  width: 100%;
  height: 36rem;
  background: linear-gradient(#6795bd, #f08b69);
  display: flex;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 1275px) {
    height: 46rem;
  }
`;

const LogoBox = styled.div<BoxProps>`
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 15rem;
  position: relative;
  @media screen and (max-width: 1275px) {
    margin: 0 0 4rem 20%;
  }
`;

const Img = styled.img`
  width: 10rem;
  position: absolute;
  left: 45%;
  top: 20%;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const Img2 = styled.img`
  width: 28rem;
  position: absolute;
  right: -3rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Label2 = styled(Label)`
  font-family: 'Pr-SemiBold';
  font-size: 2.6rem;
  color: white;
  width: 13rem;
  line-height: 1.2;
  margin: 1.25rem 1rem;
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const Home = () => {
  const { state } = useLocation();
  const setUserState = useSetRecoilState(userState);
  useEffect(() => {
    if (!state) return;
    const data = state?.data;
    setUserState({
      isUser: true,
      birthYear: data?.birthyear,
      eamil: data?.email,
      gender: data?.gender,
      hidden_realName: data?.hidden_realName,
      realName: data?.realName,
      kakaoId: data?.kakaoId,
      phoneNumber: data?.phoneNumber,
    });
  }, []);

  const { data } = useSurveyListQuery(1);
  return (
    <Flex width="100%" flexDirection="column" alignItems="center">
      <Navbar />
      <GradBox>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/one.svg`}
          alt="GIFTICON"
          style={{
            width: '42rem',
            position: 'absolute',
            top: '-20rem',
            left: '-2rem',
          }}
        />
        <Flex width="88%" flexWrap="wrap" position="relative" justifyContent="space-between">
          <Flex position="relative" flexDirection="column" width="38rem" height="45vh" pt={5}>
            <TextBox>
              <Label fontFamily="Pr-SemiBold" fontSize="0.95rem" color="white" lineHeight="1.25">
                ‘아빌립서베이’에서는 다양한 주제의 설문 조사를 찾아보고, 직접 참여하거나 설문을
                작성할 수 있어요.
              </Label>
            </TextBox>
            <TextBox right="2rem" top="10.75rem">
              <Label fontFamily="Pr-SemiBold" fontSize="0.95rem" color="white" lineHeight="1.25">
                설문에 참여하면 설문 작성자가 등록한 기프티콘을 추첨을 통해 받을 수 있고, 상품 전달
                과정까지 투명하게 확인할 수 있어요.
              </Label>
            </TextBox>
            <TextBox top="17.4rem">
              <Label fontFamily="Pr-SemiBold" fontSize="0.95rem" color="white" lineHeight="1.25">
                또한, 설문 내용이 저장되어 나중에 참고할 수 있어요.
              </Label>
            </TextBox>
          </Flex>
          <LogoBox>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/loading.png`}
              alt="IBELEVESURVEY Logo"
              style={{
                width: '10rem',
                position: 'absolute',
                top: '-4.5rem',
                left: '7rem',
              }}
            />
            <Label fontFamily="Pr-SemiBold" fontSize="2.2rem" color="white">
              환영합니다
            </Label>
            <Flex>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo-white.svg`}
                alt="LOGO"
                style={{
                  width: '16.2rem',
                }}
              />
              <Label2>에 오신 것을 환영해요!</Label2>
            </Flex>
          </LogoBox>
        </Flex>
      </GradBox>
      <Flex width="80%" position="relative" flexDirection="column" gap="3rem">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/one.svg`}
          alt="GIFTICON"
          style={{
            width: '13rem',
            position: 'absolute',
            top: '-8rem',
          }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/one5.svg`}
          alt="GIFTICON"
          style={{
            width: '6.7rem',
            position: 'absolute',
            left: '5.6rem',
          }}
        />
        <Label
          fontFamily="Pr-Bold"
          fontSize="3.3rem"
          color="white"
          width="14rem"
          position="absolute"
          top="1.8rem"
          left="8.2rem"
        >
          1
        </Label>
        <Flex flexDirection="column" ml="16%" mt="2.6%" gap="6px">
          <Label fontFamily="Pr-Bold" fontSize="1.9rem" position="absolute" left="15rem">
            설문 작성하기
          </Label>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/phrase.svg`}
            alt="GIFTICON"
            style={{
              width: '11rem',
              position: 'absolute',
              top: '4.5rem',
              left: '15rem',
            }}
          />
        </Flex>
        <Flex flexDirection="column" alignItems="center" gap="2.5rem" mt={5}>
          <Flex width="65%" gap="10%" justifyContent="center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/main1.jpg`}
              alt="GIFTICON"
              style={{
                width: '38%',
              }}
            />
            <Label fontFamily="Pr-Bold" fontSize="1.1rem" mt="5%">
              여러분은 원하는 주제로 질문들을 작성할 수 있어요
            </Label>
          </Flex>
          <Flex width="65%" gap="10%" justifyContent="center">
            <Label fontFamily="Pr-Bold" fontSize="1.1rem" width="20rem" lineHeight="1.25" mt="20%">
              설문 조사는 여러 개의 질문으로 이루어질 수 있고, 다양한 유형의 답변 형식을 지원해요.
              답변 형식은 주관식, 객관식, 척도형, 별점 등이 있어 다양한 응답을 얻을 수 있어요.
            </Label>
            <Box width="46%" background={COLORS.primaryVariant} p={3} borderRadius="1.4rem">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/main2.jpg`}
                alt="GIFTICON"
                style={{
                  width: '100%',
                }}
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex position="relative" mt={5}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/main3.svg`} alt="GIFTICON" />
        <Img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-white.svg`}
          alt="LOGO"
          style={{
            width: '10rem',
            position: 'absolute',
            left: '45%',
            top: '20%',
          }}
        />
      </Flex>
      <Flex width="85%" position="relative" alignItems="center" flexDirection="column" mt="3rem">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/one3.svg`}
          alt="GIFTICON"
          style={{
            width: '16rem',
            position: 'absolute',
            top: '-15rem',
            right: '0',
          }}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/one5.svg`}
          alt="GIFTICON"
          style={{
            width: '6.7rem',
            position: 'absolute',
            right: '2.2rem',
            top: '-5.8rem',
          }}
        />
        <Label
          fontFamily="Pr-Bold"
          fontSize="3.3rem"
          width="14rem"
          color="white"
          position="absolute"
          top="-4rem"
          right="-7.5rem"
        >
          2
        </Label>
        <Flex width="80%" alignItems="center" flexDirection="column">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/phrase2.svg`}
            alt="GIFTICON"
            style={{
              width: '9rem',
              position: 'absolute',
              top: '-3.5rem',
              right: '12rem',
            }}
          />
          <Label
            fontFamily="Pr-Bold"
            fontSize="1.9rem"
            position="absolute"
            top="-1.5rem"
            right="12rem"
          >
            기프티콘 추첨
          </Label>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/one4.svg`}
            alt="GIFTICON"
            style={{
              width: '38rem',
              marginTop: '12rem',
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/starbucks.svg`}
            alt="GIFTICON"
            style={{
              width: '14.6rem',
              position: 'absolute',
              top: '3.25rem',
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/phrase3.svg`}
            alt="GIFTICON"
            style={{
              width: '14rem',
              margin: '3rem 0',
            }}
          />
          <Label fontFamily="Pr-Bold" fontSize="1.2rem" width="51%" lineHeight="1.4">
            설문에 참여한 유저들은 추첨을 통해 설문 작성자가 등록했던 기프티콘을 받을 수 있어요.
            설문은 익명으로 진행되고, 설문 작성자가 답변의 질을 보고 직접 기프티콘 수신자를 지정할
            수 있고, 설문 종료 기한까지 수신자를 지정하지 않는다면 무작위 추첨을 통해 기프티콘이
            전달돼요. 기프티콘 전달 과정은 설문이 끝난 이후에도 언제든지 열람할 수 있어요.
          </Label>
        </Flex>
        <Flex width="94%" flexDirection="column" position="relative" alignItems="center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/one.svg`}
            alt="GIFTICON"
            style={{
              width: '13rem',
              position: 'absolute',
              top: '4rem',
              left: '0',
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/one5.svg`}
            alt="GIFTICON"
            style={{
              width: '6.7rem',
              position: 'absolute',
              top: '11.9rem',
              left: '5.6rem',
            }}
          />
          <Label
            fontFamily="Pr-Bold"
            fontSize="3.3rem"
            color="white"
            width="14rem"
            position="absolute"
            top="14rem"
            left="8rem"
          >
            3
          </Label>
          <Flex width="65%" flexDirection="column" mt="14rem">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/phrase4.svg`}
              alt="GIFTICON"
              style={{
                width: '14rem',
                position: 'absolute',
                top: '12.5rem',
                left: '15rem',
              }}
            />
            <Label fontFamily="Pr-Bold" fontSize="1.9rem" position="absolute" left="15rem">
              설문 저장 및 참고
            </Label>

            <Label
              fontFamily="Pr-Bold"
              fontSize="1.3rem"
              width="90%"
              ml="8%"
              mt="10rem"
              lineHeight="1.25"
            >
              작성한 설문은 데이터베이스에 저장되어 나중에 참고할 수 있어요.
              <br /> 자신이 작성한 설문이나 관심 있는 주제의 설문을 찾아볼 수 있고,
              <br /> 비슷한 주제나 질문을 가진 설문을 쉽게 찾을 수 있어요.
              <br /> 이를 통해 유저들은 자신이 하려고 했던 설문과 비슷한 설문을 참고하거나 다른
              유저의 의견을 확인할 수 있어요.
            </Label>
            <Img2 src={`${process.env.PUBLIC_URL}/assets/images/one5.svg`} alt="GIFTICON" />
          </Flex>
        </Flex>
      </Flex>
      <Flex width="95%" flexDirection="column" alignItems="center" gap="0.5rem" m={5}>
        <Label fontFamily="Pr-Bold" fontSize="1.25rem" mt={5}>
          진행중인 설문
        </Label>
        <Label fontFamily="Pr-Bold" fontSize="2rem">
          IbelieveSurvey
        </Label>
        <Link to="/survey">
          <Flex cursor="pointer">
            <Label fontFamily="Pr-Bold" color={COLORS.primary}>
              설문게시판 전체보기
            </Label>
          </Flex>
        </Link>
        <Flex mt={3} flexWrap="wrap">
          {data?.data?.results?.map((survey: surveyType) => {
            if (survey.is_ongoing === true) {
              return <Card key={`survey_${survey.id}`} survey={survey} />;
            }
            return null;
          })}
        </Flex>
      </Flex>
      <Label fontFamily="Pr-Bold" mb={3}>
        나만의 설문을 시작하려면
      </Label>
      <Link to="/survey/new">
        <Button width="12rem" mb={5}>
          설문 작성하기
        </Button>
      </Link>
      <Footer />
    </Flex>
  );
};

export default Home;
