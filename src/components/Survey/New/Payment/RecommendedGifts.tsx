import { Flex, Label } from 'components/Box';
import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
import RecommendedItem from './RecommendedItem';

const RecommendedList = styled(Flex)`
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 1.5rem;
  padding-bottom: 1.5rem;

  &::-webkit-scrollbar {
    background-color: #d9d9d9;
    height: 4px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.secondary};
    border-radius: 6px;
  }
`;

const RecommendedGifts = () => {
  return (
    <Flex flexDirection="column" gap="1.5rem">
      <Label fontFamily="Pr-SemiBold" fontSize="18px">
        다른 설문자들이 많이 선택한 기프티콘
      </Label>
      <RecommendedList>
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
      </RecommendedList>
    </Flex>
  );
};

export default RecommendedGifts;
