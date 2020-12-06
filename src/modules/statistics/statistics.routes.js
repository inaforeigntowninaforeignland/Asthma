import statistics from '@/modules/statistics/vue/statistics.vue';

export default [
  {
    path: '/statistics',
    name: 'Statistics',
    meta: {
      description: 'Some description here',
    },
    component: statistics,
    children: [],
  },
];
