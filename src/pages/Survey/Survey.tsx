import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar } from 'components/common';
import { Card, SurveyCardWrapper } from 'components/Survey';
import Checkbox from '@mui/material/Checkbox';
import dummyCards from 'components/Survey/Card/dummyCards';
import { useSurveyListQuery } from 'hooks/queries/surveys';

const Survey = () => {
  const [label, setLabel] = useState('인구통계');
  const [page, setPage] = useState(1);
  const { data } = useSurveyListQuery(page);

  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Label fontFamily="Pr-Bold" fontSize="1.25rem">
        설문게시판
      </Label>
      <Flex gap="1.75rem">
        <Sidebar
          title="카테고리 선택"
          categorys={[
            '인구통계',
            '라이프스타일',
            '기술',
            '건강과 웰빙',
            '정치 및 사회문제',
            '소비자 행동',
            '직장과 경력',
            '교육',
            '여행 및 관광',
            '엔터테인먼트',
          ]}
          setLabel={setLabel}
        />

        <Flex flexDirection="column" gap="1.25rem">
          <Flex position="relative">
            <Label fontFamily="Pr-Bold" fontSize="1.25rem" mr={2}>
              {label}
            </Label>
            <Label fontFamily="Pr-Regular" fontSize="0.8rem" mt="0.5rem">
              총 1,000개
            </Label>
            <Filterbar right="0" />
          </Flex>
          <Flex>
            <Label fontFamily="Pr-Bold" fontSize="0.8rem" mt="0.5rem">
              설문 진행중
            </Label>
            <Checkbox sx={{ width: '2rem', height: '1.8rem' }} />
          </Flex>
          <SurveyCardWrapper>
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
          </SurveyCardWrapper>
          {label === '결제한 설문 내역' ? (
            <Label fontFamily="Pr-Bold" fontSize="1.25rem">
              카카오톡 선물 전달 내역
            </Label>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Survey;
