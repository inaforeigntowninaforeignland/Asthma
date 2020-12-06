import profile from '@/modules/profile/vue/profile.vue';

export default [
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      description: 'Some description here',
    },
    component: profile,
    children: [],
  },
];
