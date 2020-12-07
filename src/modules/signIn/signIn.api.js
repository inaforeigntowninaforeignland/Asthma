import api from '@/utils/api';

export default {
  signIn({ username, password }) {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    return api
      .post('/user/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(({ data }) => localStorage.setItem('token', data.access_token));
  },
};
