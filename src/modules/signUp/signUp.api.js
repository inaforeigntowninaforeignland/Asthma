import api from '@/utils/api';

export default {
  signUp(username, password) {
    return api
      .post('/user/register', { username, password })
      .then(({ data }) => localStorage.setItem('token', data.access_token));
  },
};
