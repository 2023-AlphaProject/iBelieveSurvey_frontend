import { useEffect } from 'react';
import { Suspense, useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar, LoadingComponent } from 'components/common';
import { Card, SurveyCardWrapper } from 'components/Survey';
import Checkbox from '@mui/material/Checkbox';
import { useSurveyListQuery } from 'hooks/queries/surveys';
import { surveyType } from 'types';

const Survey = () => {
  const [label, setLabel] = useState('인구통계');
  const [orderState, setOrderState] = useState('created_at');
  const [page, setPage] = useState(1);
  const [cnt, setCnt] = useState(0);
  const [isOngoing, setOngoing] = useState(false);
  const { data } = useSurveyListQuery(page);
  // console.log(data?.data);

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    {
      // eslint-disable-next-line array-callback-return
      let tmp = 0;
      // eslint-disable-next-line array-callback-return
      data?.data?.map((survey: surveyType) => {
        if (survey.category_name === label) {
          tmp += 1;
        }
      });
      setCnt(tmp);
    }
  }, [label]);

  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
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
            <Label fontFamily="Pr-Regular" fontSize="0.8rem" mt="0.5rem">
              총 {cnt}개
            </Label>
            <Filterbar setOrderState={setOrderState} right="0" />
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
              currentPage={data?.data?.current_page}
              totalPages={data?.data?.total_pages}
              setPage={setPage}
            >
              {data?.data?.map((survey: surveyType) => {
                if (isOngoing === true) {
                  if (survey.category_name === label && survey.is_ongoing === true) {
                    return <Card key={`survey_${survey.id}`} survey={survey} />;
                  }
                } else if (survey.category_name === label) {
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
