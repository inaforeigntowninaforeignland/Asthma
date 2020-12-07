import profileApi from '@/modules/profile/profile.api';

export default {
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
