import api from '@/utils/api';

export default {
  getProfile() {
    return api.get('/user/get_self_info')
      .then(({ data }) => {
        const {
          username,
          id,
        } = data;

        return {
          id,
          username,
        };
      });
  },
};
