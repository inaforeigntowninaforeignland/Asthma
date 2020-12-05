import Vue from 'vue';
import VueMaterial from 'vue-material';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import router from '@/plugins/router';
import store from '@/plugins/store';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueMaterial);

fetch('configuration.json')
  .then((response) => response.json())
  .then(() => {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  });
