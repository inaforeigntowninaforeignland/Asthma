import profile from '@/modules/profile/vue/profile.vue';

export default [
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      description: 'Adding and editing personal information',
    },
    component: profile,
    children: [],
  },
];
