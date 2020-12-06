import about from '@/modules/about/vue/about.vue';

export default [
  {
    path: '/about',
    name: 'About',
    meta: {
      description: 'Some description here',
    },
    component: about,
    children: [],
  },
];
