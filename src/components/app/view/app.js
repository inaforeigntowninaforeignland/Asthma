import appHeader from '@/components/app/vue/appHeader.vue';
import appBody from '@/components/app/vue/appBody.vue';

import profileApi from '@/modules/profile/profile.api';

export default {
  components: {
    'app-header': appHeader,
    'app-body': appBody,
  },
  data() {
    return {
      profile: {},
    };
  },
  created() {
    profileApi.getProfile()
      .then((profile) => {
        this.profile = profile;
      });
  },
};
