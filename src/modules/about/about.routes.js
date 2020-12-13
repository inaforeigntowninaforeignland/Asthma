import about from '@/modules/about/vue/about.vue';

export default [
  {
    path: '/about',
    name: 'About',
    meta: {
      description: 'About our team and app',
    },
    component: about,
    children: [],
  },
];
