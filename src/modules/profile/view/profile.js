import profileApi from '@/modules/profile/profile.api';

export default {
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
