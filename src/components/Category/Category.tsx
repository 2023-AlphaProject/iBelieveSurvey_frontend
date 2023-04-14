import { Flex, Label } from 'components/Box';

const Category = () => {
  const categorys = [
    '인구통계',
    '라이프스타일',
    '건강과 웰빙',
    '기술',
    '정치 및 사회문제',
    '소비자 행동',
    '직장과 경력',
    '교육',
    '여행 및 관광',
    '엔터테인먼트',
    '음식과 식습관',
  ];
  return (
    <Flex gridGap={2} flexWrap="wrap" m={1}>
      {categorys.map((category) => (
        <Label
          key={category}
          fontSize="0.9rem"
          fontWeight={600}
          border="2px solid"
          borderColor="#5184B1"
          borderRadius="1rem"
          p="0.4rem"
        >
          {category}
        </Label>
      ))}
    </Flex>
  );
};
export default Category;
