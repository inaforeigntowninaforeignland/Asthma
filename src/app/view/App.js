import { Component, Vue } from 'vue-property-decorator';

import AppHeader from '@/app/vue/AppHeader.vue';
import AppBody from '@/app/vue/AppBody.vue';
import AppFooter from '@/app/vue/AppFooter.vue';

@Component({
  name: 'app',
  components: {
    'app-header': AppHeader,
    'app-body': AppBody,
    'app-footer': AppFooter,
  },
})
class App extends Vue {
}

export default App;
