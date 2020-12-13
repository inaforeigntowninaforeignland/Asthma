import Vue from 'vue';
import VueRouter from 'vue-router';

import auth from '@/views/auth/vue/auth.vue';
import app from '@/views/app/vue/app.vue';

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
    component: auth,
    children: [
      ...signInRoutes,
      ...signUpRoutes,
    ],
  },
  {
    path: '/',
    redirect: '/profile',
    component: app,
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
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
