import measurement from '@/modules/measurement/vue/measurement.vue';

export default [
  {
    path: '/measurement',
    name: 'Measurement',
    meta: {
      description: 'Adding a new record for statistics',
    },
    component: measurement,
    children: [],
  },
];
