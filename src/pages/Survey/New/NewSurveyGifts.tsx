import { useState } from 'react';
import { Flex } from 'components/Box';
import { Sidebar, CategoryBox } from 'components/Gifticon';
import { Button, Filterbar } from 'components/common';
import { Link } from 'react-router-dom';

const NewSurveyGifts = () => {
  const [, setLabel] = useState('카테고리별 보기');
  return (
    <Flex alignItems="center" flexDirection="column" gap="3.5rem" m="2rem 0">
      <Flex gap="2rem">
        <Sidebar setLabel={setLabel} />
        <Flex flexDirection="column" gap="2rem" pt="4rem" position="relative">
          {/* <Label fontFamily="Pr-Bold">{label}</Label> */}
          {/* <Category /> */}
          {/* {label === '카테고리별 보기' ? <CategoryBox /> : <BrandBox />} */}
          <CategoryBox />
          <Filterbar right="0" />
          <Flex width="100%" justifyContent="flex-end">
            <Link to="/survey/new/payment">
              <Button>장바구니로 돌아가기</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewSurveyGifts;
