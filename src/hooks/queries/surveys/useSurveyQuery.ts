import { useQuery } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useSurveyQuery = (id: number) => {
  return useQuery([QUERY_KEYS.SURVEY_LIST, id], () => surveysAPI.get(id));
};

export default useSurveyQuery;
