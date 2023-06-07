import { Dispatch, SetStateAction } from 'react';
import { Flex, Label } from 'components/Box';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';

interface Props {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

interface BtnProps {
  isSelected: boolean;
}

const Scroll = styled(Flex)`
  overflow-x: scroll;
`;

const CategoryBtn = styled.button<BtnProps>`
  padding: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid;
  border-radius: 1rem;
  cursor: pointer;
  font-family: 'Pr-SemiBold';
  border: 2px solid ${COLORS.primary};
  flex-shrink: 0;
  color: ${(props) => props.isSelected && 'white'};
  background-color: ${(props) => (props.isSelected ? COLORS.primary : 'white')};
`;

const CategoryPicker = ({ category, setCategory }: Props) => {
  const categorys = [
    '인구통계',
    '라이프스타일',
    '건강과 웰빙',
    '기술',
    '정치 및 사회 문제',
    '소비자 행동',
    '직장과 경력',
    '교육',
    '여행 및 관광',
    '엔터테인먼트',
    '음식과 식습관',
  ];
  return (
    <Flex flexDirection="column" gap="1rem">
      <Flex alignItems="center">
        <Label fontFamily="Pr-SemiBold" fontSize="1.2rem" mr="1rem">
          카테고리 선택
        </Label>
        <Label
          fontFamily={category ? 'Pr-SemiBold' : 'Pr-Regular'}
          color={category ? COLORS.primary : COLORS.gray}
        >
          {category ? `#${category}` : '설문의 카테고리를 클릭해주세요. (중복 불가)'}
        </Label>
      </Flex>
      <Flex borderRadius="3rem" justifyContent="center" background={COLORS.primaryVariant}>
        <Scroll m="12px 2rem" gap="10px" flexWrap="nowrap">
          {categorys.map((e) => {
            return (
              <CategoryBtn isSelected={category === e} key={e} onClick={() => setCategory(e)}>
                {e}
              </CategoryBtn>
            );
          })}
        </Scroll>
      </Flex>
    </Flex>
  );
};

export default CategoryPicker;
