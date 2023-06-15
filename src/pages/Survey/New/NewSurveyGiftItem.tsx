import { useState } from 'react';
import { Flex, Label, Box } from 'components/Box';
import { Button } from 'components/common';
import Selector from 'components/Gifticon/Selector/Selector';
import { useNavigate, useParams } from 'react-router-dom';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import useTemplateQuery from 'hooks/queries/templates/useTemplateQuery';

interface ButtonProps {
  isClicked?: boolean;
}

const CategoryBtn = styled.button<ButtonProps>`
  width: 6rem;
  font-family: 'Pr-Bold';
  font-size: 0.9rem;
  color: ${(props) => (props.isClicked ? 'black' : '#888888')};
`;

// const PayBtn = styled.button`
//   width: 9rem;
//   text-align: center;
//   font-family: 'Pr-Bold';
//   border: solid ${COLORS.secondary};
//   border-radius: 1.5rem;
// `;

const NewSurveyGiftItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productCnt, setProductCnt] = useState(1);
  const [isClicked, setClicked] = useState([true, false]);

  const { data } = useTemplateQuery(id);

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
    <Flex flexDirection="column" gap="0.6rem" justifyContent="center" position="relative" pt="5rem">
      <Flex gap="7rem" justifyContent="center" flexWrap="wrap">
        <img
          src={data?.data?.product_image_url}
          alt="GIFTICON"
          style={{
            width: '25rem',
            height: '25rem',
            borderRadius: '1.25rem',
          }}
        />
        <Flex flexDirection="column" gap="1.5rem" pt={4} mb={5}>
          <Label fontSize="0.9rem" fontFamily="Pr-Bold" color={COLORS.primary}>
            {data?.data?.brand_name}
          </Label>
          <Label fontSize="1.25rem" fontFamily="Pr-Bold">
            {data?.data?.product_name}
          </Label>
          <Label fontSize="1.1rem" fontFamily="Pr-Bold" mb={5}>
            {data?.data?.product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </Label>
          <Selector product={data?.data} cnt={productCnt} setCnt={setProductCnt} />
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
        {/* <CategoryBtn
          isClicked={isClicked[1]}
          onClick={() => {
            handleClick(1);
          }}
        >
          상세 정보
        </CategoryBtn> */}
      </Flex>
      <Box background={COLORS.primaryVariant} height="2px" width="85%" ml="7.5%" />
      <a href={data?.data.product_detail_url} target="_blank" rel="noreferrer">
        <Box width="80%" background="#8888" ml="10%" p="2%" borderRadius="1rem">
          클릭 시 상품 설명 페이지로 이동합니다.
        </Box>
      </a>
      <Flex flexDirection="column" gap="2rem" mt="2rem">
        <Flex gap="8rem" width="90%" justifyContent="flex-end">
          <Label fontFamily="Pr-Bold" mt={1} ml="3rem">
            총 금액
          </Label>
          <Label fontSize="1.4rem" fontFamily="Pr-Bold">
            {(productCnt * (data?.data?.product_price || 0))
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            원
          </Label>
        </Flex>
        <Flex gap="1rem" width="90%" justifyContent="flex-end">
          <Button variant="secondaryBasic" onClick={() => navigate(-1)}>
            목록으로
          </Button>
          <Button variant="secondary">장바구니</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewSurveyGiftItem;
