import { Step, StepLabel, Stepper } from '@mui/material';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const StepProgress = () => {
  const location = useLocation();

  const getStep = useCallback(() => {
    const path = location.pathname.replace('/survey/new', '');

    switch (path) {
      case '':
        return 0;
        break;
      case '/form':
        return 1;
        break;
      case '/payment':
        return 2;
        break;
      default:
        break;
    }

    return 0;
  }, [location]);

  return (
    <Stepper
      activeStep={getStep()}
      alternativeLabel
      sx={{ marginTop: '1rem', marginBottom: '6rem' }}
    >
      <Step key="new">
        <StepLabel>설문 개요 작성</StepLabel>
      </Step>
      <Step key="form">
        <StepLabel>설문 문항 입력</StepLabel>
      </Step>
      <Step key="gift">
        <StepLabel>기프티콘 선택 · 결제</StepLabel>
      </Step>
    </Stepper>
  );
};

export default StepProgress;
