import { useQuery } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useSurveyListQuery = (page: number, cateNum: number, ordering = 'created_at') => {
  return useQuery([QUERY_KEYS.SURVEY_LIST, page, cateNum, ordering], () =>
    surveysAPI.list(page, cateNum, ordering),
  );
};

export default useSurveyListQuery;
