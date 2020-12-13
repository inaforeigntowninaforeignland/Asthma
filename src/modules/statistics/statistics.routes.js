import statistics from '@/modules/statistics/vue/statistics.vue';

export default [
  {
    path: '/statistics',
    name: 'Statistics',
    meta: {
      description: 'Statistics of recorded measurements',
    },
    component: statistics,
    children: [],
  },
];
