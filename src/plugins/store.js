import Vue from 'vue';
import Vuex from 'vuex';

import signIn from '@/modules/signIn/view/signIn';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    signIn,
  },
  strict: false,
});
