import { instance } from 'config/api';

const surveysAPI = {
  get: (id: number) => {
    return instance.get(`/survey/${id}/`);
  },
};

export default surveysAPI;
