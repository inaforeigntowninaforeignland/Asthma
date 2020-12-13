import appNavigation from '@/views/app/vue/appNavigation.vue';

export default {
  components: {
    'app-navigation': appNavigation,
  },
  props: {
    profile: {
      type: Object,
      required: true,
    },
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
    onClickLogout() {
      localStorage.removeItem('token');
      this.$router.push('/signIn');
    },
    onClickProfile() {
      this.$router.push('/profile');
    },
  },
};
