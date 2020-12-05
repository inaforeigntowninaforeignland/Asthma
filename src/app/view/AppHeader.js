import { Component, Vue } from 'vue-property-decorator';

import AppNavigation from '@/app/vue/AppNavigation.vue';

@Component({
  name: 'app-header',
  components: {
    'app-navigation': AppNavigation,
  },
})
class AppHeader extends Vue {
  showNavigation = null;

  onClickMenu() {
    this.showNavigation = true;
  }
}

export default AppHeader;
