import Profile from '@/modules/therapy/vue/Therapy.vue';

export default [
  {
    path: '/therapy',
    name: 'Therapy',
    meta: {
      description: 'Some description here',
    },
    component: Profile,
    children: [],
  },
];
