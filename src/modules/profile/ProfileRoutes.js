import Profile from '@/modules/profile/vue/Profile.vue';

export default [
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      description: 'Some description here',
    },
    component: Profile,
    children: [],
  },
];
