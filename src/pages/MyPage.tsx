import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar } from 'components/common';
import { SurveyCardWrapper, NewSurveyBtn, Card } from 'components/Survey';
import { useSurveyListQuery } from 'hooks/queries/surveys';
import surveyType from 'types/surveyType';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const [label, setLabel] = useState('결제한 설문 내역');
  const { data } = useSurveyListQuery(1, 1);
  let mydata1 = data?.data?.results;
  mydata1 = mydata1.slice(1, 5);
  let mydata2 = data?.data?.results;
  mydata2 = mydata2.slice(6, 12);
  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Flex gap="1.75rem">
        <Sidebar
          title="마이페이지"
          categorys={['결제한 설문 내역', '참여한 설문 내역']}
          setLabel={setLabel}
        />

        <Flex flexDirection="column" gap="1.5rem">
          <Flex position="relative">
            <Label fontFamily="Pr-Bold" fontSize="1.25rem">
              {label}
            </Label>
            <Filterbar right="0" />
          </Flex>

          {label === '결제한 설문 내역' ? (
            <SurveyCardWrapper currentPage={1} totalPages={1} setPage={() => ''}>
              {mydata1.map((survey: surveyType) => {
                return <Card key={`survey_${survey.id}`} survey={survey} />;
              })}
              <Link to="/survey/new">
                <NewSurveyBtn />
              </Link>
            </SurveyCardWrapper>
          ) : (
            <SurveyCardWrapper currentPage={1} totalPages={1} setPage={() => ''}>
              {mydata2.map((survey: surveyType) => {
                return <Card key={`survey_${survey.id}`} survey={survey} />;
              })}
              <Link to="/survey/new">
                <NewSurveyBtn />
              </Link>
            </SurveyCardWrapper>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyPage;
