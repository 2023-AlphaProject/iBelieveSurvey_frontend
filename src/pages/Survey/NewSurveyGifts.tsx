import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Category, Sidebar, CategoryBox, BrandBox } from 'components/Gifticon';
import { Filterbar } from 'components/common';

const NewSurveyGifts = () => {
  const [label, setLabel] = useState('카테고리별 보기');
  return (
    <Flex alignItems="center" flexDirection="column" gap="3.5rem">
      <Label fontFamily="Pr-Bold" fontSize="1.25rem">
        설문 작성 페이지
      </Label>

      <Flex gap="2rem">
        <Sidebar setLabel={setLabel} />
        <Flex flexDirection="column" gap="2rem" pt={1} position="relative">
          <Label fontFamily="Pr-Bold">{label}</Label>
          <Category />
          {label === '카테고리별 보기' ? <CategoryBox /> : <BrandBox />}

          <Filterbar right="4rem" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewSurveyGifts;
