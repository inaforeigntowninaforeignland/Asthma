import therapy from '@/modules/therapy/vue/therapy.vue';

export default [
  {
    path: '/therapy',
    name: 'Therapy',
    meta: {
      description: 'Therapeutic instructions for treatment',
    },
    component: therapy,
    children: [],
  },
];
