import { Component, Vue } from 'vue-property-decorator';

import App from '@/app/vue/App.vue';

@Component({
  name: 'app-view',
  components: {
    App,
  },
})
class AppView extends Vue {
}

export default AppView;
