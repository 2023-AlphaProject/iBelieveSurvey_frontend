import { useQuery } from '@tanstack/react-query';
import templatesAPI from 'apis/templatesAPI';
import * as QUERY_KEYS from 'constants/QUERY_KEYS';

const useTemplateQuery = (id: string | undefined) => {
  return useQuery([QUERY_KEYS.TEMPLATE, id], () => templatesAPI.get(id));
};

export default useTemplateQuery;
