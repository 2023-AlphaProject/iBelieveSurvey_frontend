import { StepProgress, SurveyCreator } from 'components/Survey';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NewSurveyForm = () => {
  const { state } = useLocation();

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <>
      <StepProgress />
      <SurveyCreator formData={state?.formData} />
    </>
  );
};

export default NewSurveyForm;
