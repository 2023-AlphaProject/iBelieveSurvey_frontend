import { instance } from 'config/api';

const templatesAPI = {
  list: (page: number) => {
    return instance.get(`/templates/?page=${page}`);
  },
  get: (id: string | undefined) => {
    return instance.get(`/templates/${id}/`);
  },
};

export default templatesAPI;
