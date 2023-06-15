import { useQuery } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useSurveyListSearchQuery = (
  page: number,
  search: string,
  category: string,
  participants: string,
  ordering = 'created_at',
) => {
  return useQuery(
    [QUERY_KEYS.SURVEY_LIST_SEARCH, page, search, category, participants, ordering],
    () => surveysAPI.search(page, ordering, search, category, participants),
  );
};

export default useSurveyListSearchQuery;
