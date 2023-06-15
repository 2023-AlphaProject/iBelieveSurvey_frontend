import { useState } from 'react';
import { Flex, Label, Box } from 'components/Box';
import { Button } from 'components/common';
import Selector from 'components/Gifticon/Selector/Selector';
// import { useLocation } from 'react-router-dom';
import { StepProgress } from 'components/Survey';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';

interface ButtonProps {
  isClicked?: boolean;
}

const CategoryBtn = styled.button<ButtonProps>`
  width: 6rem;
  font-family: 'Pr-Bold';
  font-size: 0.9rem;
  color: ${(props) => (props.isClicked ? 'black' : '#888888')};
`;

const PayBtn = styled.button`
  width: 9rem;
  text-align: center;
  font-family: 'Pr-Bold';
  border: solid ${COLORS.secondary};
  border-radius: 1.5rem;
`;

const NewSurveyGiftItem = () => {
  const [isClicked, setClicked] = useState([true, false]);
  const handleClick = (id: number) => {
    setClicked(
      isClicked.map((data, idx) => {
        let updatedData = data;

        if (data === true) {
          updatedData = false;
        }
        if (idx === id) {
          updatedData = !data;
        }

        return updatedData;
      }),
    );
  };
  // const location = useLocation();
  // console.log(location);

  return (
    <Flex flexDirection="column" gap="0.6rem" justifyContent="center" position="relative">
      <StepProgress />
      <Flex gap="7rem" justifyContent="center" flexWrap="wrap">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/starbucks.jpg`}
          alt="GIFTICON"
          style={{
            width: '25rem',
            height: '25rem',
            borderRadius: '1.25rem',
          }}
        />
        <Flex flexDirection="column" gap="1.5rem" pt={4} mb={5}>
          <Label fontSize="0.9rem" fontFamily="Pr-Bold" color={COLORS.primary}>
            스타벅스
          </Label>
          <Label fontSize="1.25rem" fontFamily="Pr-Bold">
            마음을 전하는 선물 아메리카노(T)
          </Label>
          <Label fontSize="1.1rem" fontFamily="Pr-Bold" mb={5}>
            4,700원
          </Label>
          <Selector />
        </Flex>
      </Flex>
      <Flex ml="7.5%">
        <CategoryBtn
          isClicked={isClicked[0]}
          onClick={() => {
            handleClick(0);
          }}
        >
          상품 설명
        </CategoryBtn>
        <CategoryBtn
          isClicked={isClicked[1]}
          onClick={() => {
            handleClick(1);
          }}
        >
          상세 정보
        </CategoryBtn>
      </Flex>
      <Box background={COLORS.primaryVariant} height="2px" width="85%" ml="7.5%" />
      <Box width="80%" background="#8888" ml="10%" p="2%">
        상품 설명 링크
      </Box>
      <Flex flexDirection="column" gap="1rem" height="10rem">
        <Flex gap="8rem" position="absolute" right="5rem" bottom="6.5rem">
          <Label fontFamily="Pr-Bold" mt={1} ml="3rem">
            총 금액
          </Label>
          <Label fontSize="1.4rem" fontFamily="Pr-Bold">
            9,600원
          </Label>
        </Flex>
        <Flex gap="1rem" position="absolute" right="4.5rem" bottom="3rem">
          <Button variant="secondary" width="7rem" scale="xs">
            장바구니
          </Button>
          <PayBtn>결제하기</PayBtn>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewSurveyGiftItem;
