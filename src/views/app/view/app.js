import appHeader from '@/views/app/vue/appHeader.vue';

import profileApi from '@/modules/profile/profile.api';

export default {
  components: {
    'app-header': appHeader,
  },
  data() {
    return {
      profile: {},
    };
  },
  created() {
    this.loadProfile();
  },
  activated() {
    this.loadProfile();
  },
  methods: {
    loadProfile() {
      profileApi
        .getProfile()
        .then((profile) => {
          this.profile = profile;
        });
    },
  },
};
