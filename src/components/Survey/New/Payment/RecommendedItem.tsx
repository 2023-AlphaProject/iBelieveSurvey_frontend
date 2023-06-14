import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';

const GiftImg = styled.img`
  object-fit: cover;
  border-radius: 1rem;
  width: 11rem;
  height: 11rem;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
`;

const ItemWrapper = styled(Flex)`
  @media (max-width: 768px) {
    width: 9rem;
  }
`;

const RecommendedItem = () => {
  return (
    <ItemWrapper flexDirection="column" gap="1rem" width="11.5rem">
      <GiftImg src="https://st.kakaocdn.net/product/gift/product/20220107172532_8a6336605bf447bd8632fe6d72b8d7d9.jpg" />
      <Label color={COLORS.primary} fontFamily="Pr-SemiBold">
        스타벅스
      </Label>
      <Label
        width="100%"
        style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        마음을 전하는 선물 아메리카노
      </Label>
      <Label fontFamily="Pr-SemiBold">4,700원</Label>
    </ItemWrapper>
  );
};
export default RecommendedItem;
