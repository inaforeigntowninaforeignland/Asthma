import api from '@/utils/api';

export default {
  sendMeasurement: (value) => api.post(`/user/add_measurement?value=${value}`),
};
