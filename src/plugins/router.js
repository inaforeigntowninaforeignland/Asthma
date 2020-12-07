import Vue from 'vue';
import VueRouter from 'vue-router';

import appView from '@/views/appView/vue/appView.vue';
import authView from '@/views/authView/vue/authView.vue';

import signUpRoutes from '@/modules/signUp/signUp.routes';
import aboutRoutes from '@/modules/about/about.routes';
import therapyRoutes from '@/modules/therapy/therapy.routes';
import measurementRoutes from '@/modules/measurement/measurement.routes';
import statisticsRoutes from '@/modules/statistics/statistics.routes';
import profileRoutes from '@/modules/profile/profile.routes';
import signInRoutes from '@/modules/signIn/signIn.routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/signIn',
    component: authView,
    children: [
      ...signInRoutes,
      ...signUpRoutes,
    ],
  },
  {
    path: '/',
    redirect: '/profile',
    component: appView,
    children: [
      ...profileRoutes,
      ...measurementRoutes,
      ...statisticsRoutes,
      ...therapyRoutes,
      ...aboutRoutes,
    ],
  },
  {
    path: '*',
    redirect: '/signIn',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
