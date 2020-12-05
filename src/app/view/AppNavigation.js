import {
  Component, Vue, Prop, Watch,
} from 'vue-property-decorator';

@Component({
  name: 'app-navigation',
})
class AppNavigation extends Vue {
  get routes() {
    return this.$router.options.routes[0].children
      .filter((route) => route.name !== this.title)
      .map((route, index) => ({
        id: index,
        path: route.path,
        name: route.name,
        description: route.meta.description,
      }));
  }

  @Prop({
    type: Boolean,
    default: false,
  })
  value;

  @Prop({
    type: String,
    default: '',
  })
  title;

  showNavigation = null;

  @Watch('$route')
  onChangeRoute() {
    this.showNavigation = false;
  }

  @Watch('value')
  onChangeValue(value) {
    this.showNavigation = value;
  }

  @Watch('showNavigation')
  onChangeShowNavigation(showNavigation) {
    this.$emit('input', showNavigation);
  }

  created() {
    this.showNavigation = this.value;
  }
}

export default AppNavigation;
