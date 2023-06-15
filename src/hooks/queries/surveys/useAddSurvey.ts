import { useMutation } from '@tanstack/react-query';
import surveysAPI from 'apis/surveysAPI';

const useAddSurvey = (options = {}) => {
  return useMutation(
    (payload: FormData) => {
      return surveysAPI.post(payload);
    },
    {
      ...options,
      // onSuccess: ({ data }) => {
      //   console.log(data);
      // },
    },
  );
};

export default useAddSurvey;
