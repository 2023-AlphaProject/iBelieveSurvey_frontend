import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSnackBar, useInput } from 'hooks';
import { COLORS } from 'constants/COLOR';
import { Input, Button } from 'components/common';

const TempSubmitButton = styled(Button)`
  background-color: transparent;
  color: #000;
  border: 3px solid ${COLORS.primary};
`;

const NewSurvey = () => {
  const [testValue, onChangeTestValue] = useInput('');
  const { handleSnackBar } = useSnackBar();
  return (
    <>
      <Input
        limit={50}
        value={testValue}
        onChange={onChangeTestValue}
        type="text"
        placeholder="테스트를 작성해 보세요."
      />
      <TempSubmitButton
        type="button"
        style={{ backgroundColor: 'transparent', color: '#000' }}
        onClick={handleSnackBar({
          variant: 'success',
          message: '임시저장 완료되었습니다.',
        })}
      >
        임시저장 성공
      </TempSubmitButton>
      <Button
        type="button"
        onClick={handleSnackBar({
          variant: 'error',
          message: '임시저장에 실패했습니다.',
        })}
      >
        임시저장 실패
      </Button>
      <Link to="/survey/new/form">
        <Button>다음단계</Button>
      </Link>
    </>
  );
};

export default NewSurvey;
