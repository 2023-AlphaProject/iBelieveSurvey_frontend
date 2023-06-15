import { useState } from 'react';
import { Flex, Label } from 'components/Box';
import { Sidebar, Filterbar } from 'components/common';
import { SurveyCardWrapper, NewSurveyBtn } from 'components/Survey';
// import dummyCards from 'components/Survey/Card/dummyCards';

const MyPage = () => {
  const [label, setLabel] = useState('결제한 설문 내역');
  const [orderState, setOrderState] = useState('created_at');
  return (
    <Flex alignItems="center" flexDirection="column" gap="2.5rem">
      <Label fontFamily="Pr-Bold" fontSize="1.25rem">
        마이페이지
      </Label>
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
            <Filterbar setOrderState={setOrderState} right="0" />
          </Flex>
          <SurveyCardWrapper currentPage={1} totalPages={1} setPage={() => ''}>
            {/* <Card survey={dummyCards} />
            <Card survey={dummyCards} />
            <Card survey={dummyCards} />
            <Card survey={dummyCards} />
            <Card survey={dummyCards} />
            <Card survey={dummyCards} /> */}
            <NewSurveyBtn />
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

export default MyPage;
