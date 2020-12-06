import appNavigation from '@/components/app/vue/appNavigation.vue';

export default {
  components: {
    'app-navigation': appNavigation,
  },
  data() {
    return {
      showNavigation: null,
    };
  },
  methods: {
    onClickMenu() {
      this.showNavigation = true;
    },
  },
};
