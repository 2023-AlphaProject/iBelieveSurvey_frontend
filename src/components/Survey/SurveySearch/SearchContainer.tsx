import { Flex, Label } from 'components/Box';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';
import { useState } from 'react';

interface BtnProps {
  categorySelected?: boolean;
  participantsSelected?: boolean;
  surveyStateSelected?: boolean;
}

interface SearchProps {
  category: string;
  setCategory: (arg0: string) => void;
  participants: string;
  setParticipants: (arg0: string) => void;
  surveyState: string;
  setSurveyState: (arg0: string) => void;
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
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 3rem;
    font-weight: 800;
    border: none;
    background-color: ${COLORS.gray};
    border-radius: 0 0 20px 20px;
  }
  gap: 10px;
`;

const Scroll = styled(Flex)`
  margin-top: 1rem;
  flex-wrap: nowrap;
  overflow-x: scroll;
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

const FilterBtn = styled.button`
  font-size: 0.9rem;
`;

const FilterCancelBtn = styled.button`
  font-size: 1rem;
  color: ${COLORS.secondary};
`;

const SearchContainer = (props: SearchProps) => {
  const { category, setCategory, participants, setParticipants, surveyState, setSurveyState } =
    props;
  const [participantsText, setParticipantsText] = useState('');
  console.log(category);

  const handleParticipants = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.name === '1~9명') {
      setParticipants('under_ten');
    }
    if (e.currentTarget.name === '10~99명') {
      setParticipants('under_hundred');
    }
    if (e.currentTarget.name === '100명 이상') {
      setParticipants('over_hundred');
    }
    setParticipantsText(e.currentTarget.name);
  };

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
  const surveyStates = ['진행 중', '종료'];

  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const filterCancelTarget = e.currentTarget.name;

    switch (filterCancelTarget) {
      case 'category':
        setCategory('');
        break;
      case 'participants':
        setParticipants('');
        break;
      case 'surveyState':
        setSurveyState('');
        break;
      case 'allCancel':
        setCategory('');
        setParticipants('');
        setSurveyState('');
        break;
      default:
        break;
    }
  };

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
              name={e}
              participantsSelected={participants === e}
              key={e}
              onClick={(e) => handleParticipants(e)}
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
      <InnerContainer>
        <Flex gap="20px">
          <FilterBtn onClick={handleFilterClick} name="category">
            {category && `${category} x`}
          </FilterBtn>
          <FilterBtn onClick={handleFilterClick} name="participants">
            {participants && `${participantsText} x`}
          </FilterBtn>
          <FilterBtn onClick={handleFilterClick} name="surveyState">
            {surveyState && `${surveyState} x`}
          </FilterBtn>
        </Flex>
        <FilterCancelBtn onClick={handleFilterClick} name="allCancel">
          전체 해제
        </FilterCancelBtn>
      </InnerContainer>
    </Container>
  );
};

export default SearchContainer;
