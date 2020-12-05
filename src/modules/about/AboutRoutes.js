import About from '@/modules/about/vue/About.vue';

export default [
  {
    path: '/about',
    name: 'About',
    meta: {
      description: 'Some description here',
    },
    component: About,
    children: [],
  },
];
