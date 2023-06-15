import { useParams } from 'react-router-dom';
import { Survey } from 'survey-react-ui';
import { Model } from 'survey-core';
import 'survey-core/defaultV2.min.css';
import { useSurveyQuery } from 'hooks/queries/surveys';
import { useAddParticipant } from 'hooks/queries/participant';

const SurveySubmit = () => {
  const { id } = useParams();
  const { data } = useSurveyQuery(Number(id));
  const survey = new Model(data?.data.data);
  const { mutate: addParticipant } = useAddParticipant(Number(id));

  survey.onComplete.add((sender: any) => {
    console.log(JSON.stringify(sender.data, null, 3));
    addParticipant(JSON.stringify(sender.data, null, 3));
  });
  survey.locale = 'ko';
  return <Survey model={survey} />;
};

export default SurveySubmit;
