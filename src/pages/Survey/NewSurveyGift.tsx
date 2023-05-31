import { useState } from 'react';
import { Flex, Label, Box } from 'components/Box';
import Selector from 'components/Gifticon/Selector/Selector';
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

const NewSurveyGift = () => {
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
  return (
    <Flex flexDirection="column" gap="0.75rem">
      <Flex gap="7rem" justifyContent="center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/starbucks.jpg`}
          alt="GIFTICON"
          style={{
            width: '24rem',
            height: '24rem',
            borderRadius: '1.25rem',
          }}
        />
        <Flex flexDirection="column" gap="1.5rem" pt={4}>
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
      <Flex>
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
      <Box background={COLORS.primaryVariant} height="3px" />
    </Flex>
  );
};

export default NewSurveyGift;
