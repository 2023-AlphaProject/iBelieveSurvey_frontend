import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar } from 'components/common';
import { Card, SurveyCardWrapper, SearchContainer } from 'components/Survey';
import Checkbox from '@mui/material/Checkbox';
import dummyCards from 'components/Survey/Card/dummyCards';
import styled from 'styled-components';
import { surveyType } from 'types/surveyType';
import { useParams } from 'react-router-dom';
import { useSurveyListSearchQuery } from 'hooks/queries/surveys';

const SurveySearch = () => {
  const [label, setLabel] = useState('인구통계');
  const [page, setPage] = useState(1);
  const { searchParams } = useParams();
  const { data, isLoading } = useSurveyListSearchQuery(page, searchParams || '');

  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Label fontFamily="Pr-Bold" fontSize="1.25rem">
        &quot;{searchParams}&quot;에 대한 검색 결과입니다.
      </Label>
      <SearchContainer />
      <Flex flexDirection="column" gap="2rem" width="90%">
        <Flex position="relative">
          <Filterbar right="0" />
        </Flex>
        <SurveyCardWrapper
          currentPage={data?.data?.current_page}
          totalPages={data?.data?.total_pages}
          setPage={setPage}
        >
          {data?.data?.results?.map((survey: surveyType) => {
            return <Card key={`survey_${survey.id}`} survey={survey} />;
          })}
        </SurveyCardWrapper>
        {label === '결제한 설문 내역' ? (
          <Label fontFamily="Pr-Bold" fontSize="1.25rem">
            카카오톡 선물 전달 내역
          </Label>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default SurveySearch;
