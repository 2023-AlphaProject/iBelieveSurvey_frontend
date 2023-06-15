import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Category, Sidebar, CategoryBox, BrandBox } from 'components/Gifticon';
import { Filterbar } from 'components/common';
import { useLocation } from 'react-router-dom';

const NewSurveyGifts = () => {
  const { state } = useLocation();
  const [label, setLabel] = useState('카테고리별 보기');
  return (
    <Flex alignItems="center" flexDirection="column" gap="3.5rem">
      <Flex gap="2rem">
        <Sidebar setLabel={setLabel} />
        <Flex flexDirection="column" gap="2rem" pt={1} position="relative">
          <Label fontFamily="Pr-Bold">{label}</Label>
          <Category />
          {label === '카테고리별 보기' ? <CategoryBox /> : <BrandBox />}

          <Filterbar right="5rem" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewSurveyGifts;
