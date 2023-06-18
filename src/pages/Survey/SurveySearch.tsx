import { Suspense, useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar, LoadingComponent } from 'components/common';
import { Card, SurveyCardWrapper, SearchContainer } from 'components/Survey';
import surveyType from 'types/surveyType';
import { useParams } from 'react-router-dom';
import { useSurveyListSearchQuery } from 'hooks/queries/surveys';

const SurveySearch = () => {
  const [label, setLabel] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [participants, setParticipants] = useState('');
  const [surveyState, setSurveyState] = useState('');
  const [orderState, setOrderState] = useState('created_at');
  const { searchParams } = useParams();
  const { data, isLoading } = useSurveyListSearchQuery(
    page,
    searchParams || '',
    category,
    participants,
    surveyState,
    orderState,
  );

  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Label fontFamily="Pr-Bold" fontSize="1.25rem">
        &quot;{searchParams}&quot;에 대한 검색 결과입니다.
      </Label>
      <SearchContainer
        category={category}
        setCategory={setCategory}
        participants={participants}
        setParticipants={setParticipants}
        surveyState={surveyState}
        setSurveyState={setSurveyState}
      />
      <Flex flexDirection="column" gap="2rem" width="90%">
        <Flex position="relative">
          <Filterbar setOrderState={setOrderState} right="0" />
        </Flex>
        <Suspense fallback={<LoadingComponent />}>
          <SurveyCardWrapper
            currentPage={data?.data?.current_page}
            totalPages={data?.data?.total_pages}
            setPage={setPage}
          >
            {data?.data?.map((survey: surveyType) => {
              return <Card key={`survey_${survey.id}`} survey={survey} />;
            })}
          </SurveyCardWrapper>
        </Suspense>
      </Flex>
    </Flex>
  );
};

export default SurveySearch;
