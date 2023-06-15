import { useQuery } from '@tanstack/react-query';
import surveyAPI from 'apis/surveyAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useSurveyQuery = (id: number) => {
  return useQuery([QUERY_KEYS.SURVEY, id], () => surveyAPI.get(id));
};

export default useSurveyQuery;
