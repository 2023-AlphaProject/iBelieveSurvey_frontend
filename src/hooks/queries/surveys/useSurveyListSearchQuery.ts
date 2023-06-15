import { useQuery } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useSurveyListSearchQuery = (
  page: number,
  search: string,
  category: string,
  participants: string,
  surveyState: string,
  ordering = 'created_at',
) => {
  return useQuery(
    [QUERY_KEYS.SURVEY_LIST_SEARCH, page, search, category, participants, surveyState, ordering],
    () => surveysAPI.search(page, search, category, participants, surveyState, ordering),
  );
};

export default useSurveyListSearchQuery;
