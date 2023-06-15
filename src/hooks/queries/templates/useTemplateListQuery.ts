import { useQuery } from '@tanstack/react-query';
import templatesAPI from 'apis/templatesAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useTemplateListQuery = (page: number) => {
  return useQuery([QUERY_KEYS.TEMPLATE_LIST, page], () => templatesAPI.list(page));
};

export default useTemplateListQuery;
