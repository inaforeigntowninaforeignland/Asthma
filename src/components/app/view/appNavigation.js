export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showNavigation: null,
    };
  },
  created() {
    this.showNavigation = this.value;
  },
  computed: {
    routes() {
      return this.$router.options.routes[1].children
        .filter((route) => route.name !== this.title)
        .map((route, index) => ({
          id: index,
          path: route.path,
          name: route.name,
          description: route.meta.description,
        }));
    },
  },
  watch: {
    $route() {
      this.showNavigation = false;
    },
    value(value) {
      this.showNavigation = value;
    },
    showNavigation(showNavigation) {
      this.$emit('input', showNavigation);
    },
  },
};
