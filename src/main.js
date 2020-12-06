import Vue from 'vue';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import router from '@/plugins/router';
import store from '@/plugins/store';

import app from './app.vue';

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
