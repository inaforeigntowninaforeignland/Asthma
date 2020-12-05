import Vue from 'vue';
import VueRouter from 'vue-router';

import AppView from '@/views/appView/vue/AppView.vue';

import AboutRoutes from '@/modules/about/AboutRoutes';
import TherapyRoutes from '@/modules/therapy/TherapyRoutes';
import MeasurementRoutes from '@/modules/measurement/MeasurementRoutes';
import StatisticsRoutes from '@/modules/statistics/StatisticsRoutes';
import ProfileRoutes from '@/modules/profile/ProfileRoutes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/profile',
    component: AppView,
    children: [
      ...ProfileRoutes,
      ...MeasurementRoutes,
      ...StatisticsRoutes,
      ...TherapyRoutes,
      ...AboutRoutes,
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
