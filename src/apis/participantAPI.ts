import { instance } from 'config/api';

const participantAPI = {
  post: (id: number, data: any) => {
    return instance.post(`/surveys/${id}/participants/`, data);
  },
};

export default participantAPI;
