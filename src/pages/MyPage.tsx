import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar } from 'components/common';
import { Card, SurveyCardWrapper, NewSurveyBtn } from 'components/Survey';
import dummyCards from 'components/Survey/Card/dummyCards';

const MyPage = () => {
  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Label fontFamily="Pr-Bold" fontSize="1.25rem">
        마이페이지
      </Label>
      <Flex gap="1.75rem">
        <Sidebar title="마이페이지" categorys={['결제한 설문 내역', '참여한 설문 내역']} />

        <Flex flexDirection="column" gap="1.5rem">
          <Flex>
            <Label fontFamily="Pr-Bold" fontSize="1.25rem">
              결제한 설문 내역
            </Label>
            <Filterbar />
          </Flex>
          <SurveyCardWrapper>
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <Card card={dummyCards} />
            <NewSurveyBtn />
          </SurveyCardWrapper>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyPage;
