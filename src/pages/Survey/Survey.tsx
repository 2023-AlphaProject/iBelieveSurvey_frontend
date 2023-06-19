import { Suspense, useEffect, useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar, LoadingComponent } from 'components/common';
import { Card, SurveyCardWrapper } from 'components/Survey';
import Checkbox from '@mui/material/Checkbox';
import { useSurveyListQuery } from 'hooks/queries/surveys';
import { surveyType } from 'types';

const Survey = () => {
  const categorys = [
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
  ];
  const [label, setLabel] = useState('인구통계');
  const [cateNum, setCateNums] = useState(1);
  const [page, setPage] = useState(1);
  const [isOngoing, setOngoing] = useState(false);
  const { data } = useSurveyListQuery(page, cateNum);
  console.log(isOngoing);
  console.log(data?.data?.results);

  useEffect(() => {
    const idx = categorys.indexOf(label);
    setCateNums(idx + 1);
  }, [label]);

  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Flex gap="1.75rem">
        <Sidebar title="카테고리 선택" categorys={categorys} setLabel={setLabel} />

        <Flex flexDirection="column" gap="1.25rem">
          <Flex position="relative">
            <Label fontFamily="Pr-Bold" fontSize="1.25rem" mr={2}>
              {label}
            </Label>
            <Label fontFamily="Pr-Regular" fontSize="0.8rem" mt="0.5rem">
              총 {data?.data?.results.length}개
            </Label>
            <Filterbar right="0" />
          </Flex>
          <Flex>
            <Label fontFamily="Pr-Bold" fontSize="0.8rem" mt="0.5rem">
              설문 진행중
            </Label>
            <Checkbox
              sx={{ width: '2rem', height: '1.8rem' }}
              onClick={() => setOngoing(!isOngoing)}
            />
          </Flex>
          <Suspense fallback={<LoadingComponent />}>
            <SurveyCardWrapper
              currentPage={data?.data?.results.current_page}
              totalPages={data?.data?.results.total_pages}
              setPage={setPage}
            >
              {data?.data?.results.map((survey: surveyType) => {
                if (isOngoing === true) {
                  if (survey.is_ongoing === true) {
                    return <Card key={`survey_${survey.id}`} survey={survey} />;
                  }
                } else {
                  return <Card key={`survey_${survey.id}`} survey={survey} />;
                }
                return null;
              })}
            </SurveyCardWrapper>
          </Suspense>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Survey;
