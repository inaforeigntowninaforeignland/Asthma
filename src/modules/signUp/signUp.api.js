import api from '@/utils/api';

export default {
  signUp(username, password) {
    return api
      .post('/user/register', { username, password })
      .then(({ data }) => {
        localStorage.setItem('username', username);
        localStorage.setItem('token', data.access_token);
      });
  },
};
