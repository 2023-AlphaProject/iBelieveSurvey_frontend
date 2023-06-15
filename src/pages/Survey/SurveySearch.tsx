import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar } from 'components/common';
import { Card, SurveyCardWrapper, SearchContainer } from 'components/Survey';
import Checkbox from '@mui/material/Checkbox';
import dummyCards from 'components/Survey/Card/dummyCards';
import styled from 'styled-components';
import { useSurveyListSearchQuery } from 'hooks/queries/surveys';

const Survey = () => {
  const [label, setLabel] = useState('인구통계');
  const [page, setPage] = useState(1);
  const searchValue = new URL(window.location.href).search.replace('?', '');

  const { data } = useSurveyListSearchQuery(page, searchValue);
  console.log(data);
  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Label fontFamily="Pr-Bold" fontSize="1.25rem">
        &quot;알파프로젝트&quot;에 대한 검색 결과입니다.
      </Label>
      <SearchContainer />
      <Flex flexDirection="column" gap="2rem" width="90%">
        <Flex position="relative">
          <Filterbar right="0" />
        </Flex>
        <SurveyCardWrapper currentPage={1} totalPages={1} setPage={() => ''}>
          <Flex flexWrap="wrap" gap="40px" mt="10px">
            {/* <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} /> */}
          </Flex>
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

export default Survey;
