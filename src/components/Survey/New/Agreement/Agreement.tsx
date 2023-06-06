import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box, Flex, Label } from 'components/Box';
import { Tooltip } from 'components/common';
import { COLORS } from 'constants/COLOR';

interface Props {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

const Radio = styled.input.attrs({ type: 'radio' })`
  accent-color: ${COLORS.primary};
`;

const AgreeWrapper = styled(Flex)`
  width: 80%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2.5rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 2.5rem;
    border-radius: 10rem;
  }
`;

const RadioGroup = styled(Flex)`
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

const Agreement = ({ value, setValue }: Props) => {
  return (
    <AgreeWrapper background={COLORS.primaryVariant} borderRadius="2rem">
      <Flex alignItems="center">
        <Box background="black" width="8px" height="8px" mr="10px" />
        <Label fontFamily="Pr-SemiBold" mr="12px">
          종료시 결과 공개여부 체크
        </Label>
        <Tooltip text="설문 종료 후 결과 전체공개 설정 유무입니다." />
        <Label fontSize="12px" ml="6px">
          설문 공개여부는 뭔가요?
        </Label>
      </Flex>
      <RadioGroup>
        <Label fontSize="14px" fontFamily="Pr-SemiBold">
          비동의
        </Label>
        <Radio checked={!value} onChange={() => setValue(false)} />
        <Label fontSize="14px" fontFamily="Pr-SemiBold" ml="10px">
          동의
        </Label>
        <Radio checked={value} onChange={() => setValue(true)} />
      </RadioGroup>
    </AgreeWrapper>
  );
};

export default Agreement;
