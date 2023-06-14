import { Flex, Label } from 'components/Box';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';
import { useState } from 'react';

interface BtnProps {
  categorySelected?: boolean;
  participantsSelected?: boolean;
  surveyStateSelected?: boolean;
}

const Container = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  height: 15rem;
  border: 3px solid ${COLORS.secondary};
  border-radius: 25px;
`;

const InnerContainer = styled(Flex)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
  border-bottom: 2px solid ${COLORS.secondary};
  :nth-child(4) {
    border: none;
    background-color: ${COLORS.gray};
    border-radius: 0 0 20px 20px;
  }
  gap: 10px;
`;

const Scroll = styled(Flex)`
  margin-top: 1rem;
  overflow-x: scroll;
  flex-wrap: nowrap;
  gap: 10px;
`;

const SideLabel = styled(Label)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  height: 1.9rem;
  font-family: Pr-smiBold;
  font-size: 1rem;
  font-weight: 400;
  background-color: ${COLORS.secondary};
  border: none;
  border-radius: 1rem;
  color: white;
`;

const ConditionBtn = styled.button<BtnProps>`
  padding: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 1rem;
  cursor: pointer;
  font-family: 'Pr-SemiBold';
  border: 1px solid ${COLORS.secondary};
  flex-shrink: 0;
  background-color: ${(props) =>
    props.categorySelected || props.participantsSelected || props.surveyStateSelected
      ? COLORS.gray
      : 'white'};
`;

const SearchContainer = () => {
  const [category, setCategory] = useState('');
  const [participants, setParticipants] = useState('');
  const [surveyState, setSurveyState] = useState('');

  const categorys = [
    '인구통계',
    '라이프스타일',
    '건강과 웰빙',
    '기술',
    '정치 및 사회 문제',
    '소비자 행동',
    '직장과 경력',
    '교육',
    '여행 및 관광',
    '엔터테인먼트',
    '음식과 식습관',
  ];

  const participantsConditions = ['1~9명', '10~99명', '100명 이상'];

  const surveyStates = ['진행 예정', '진행 중', '종료'];

  return (
    <Container>
      <InnerContainer>
        <SideLabel>카테고리</SideLabel>
        <Scroll>
          {categorys.map((e) => {
            return (
              <ConditionBtn
                categorySelected={category === e}
                key={e}
                onClick={() => setCategory(e)}
              >
                {e}
              </ConditionBtn>
            );
          })}
        </Scroll>
      </InnerContainer>
      <InnerContainer>
        <SideLabel>침여자 수</SideLabel>
        {participantsConditions.map((e) => {
          return (
            <ConditionBtn
              participantsSelected={participants === e}
              key={e}
              onClick={() => setParticipants(e)}
            >
              {e}
            </ConditionBtn>
          );
        })}
      </InnerContainer>
      <InnerContainer>
        <SideLabel>설문 상태</SideLabel>
        {surveyStates.map((e) => {
          return (
            <ConditionBtn
              surveyStateSelected={surveyState === e}
              key={e}
              onClick={() => setSurveyState(e)}
            >
              {e}
            </ConditionBtn>
          );
        })}
      </InnerContainer>
      <InnerContainer>asd</InnerContainer>
    </Container>
  );
};

export default SearchContainer;
