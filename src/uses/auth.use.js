import { ref } from '@vue/composition-api';

const getUsername = () => localStorage.getItem('username');

const getToken = () => localStorage.getItem('token');

const authStatus = ref(Boolean(getUsername() && getToken()));

export default {
  authStatus,
};
