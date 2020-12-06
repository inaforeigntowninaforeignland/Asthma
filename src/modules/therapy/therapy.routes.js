import therapy from '@/modules/therapy/vue/therapy.vue';

export default [
  {
    path: '/therapy',
    name: 'Therapy',
    meta: {
      description: 'Some description here',
    },
    component: therapy,
    children: [],
  },
];
