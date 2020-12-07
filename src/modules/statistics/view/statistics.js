import statisticsApi from '@/modules/statistics/statistics.api';

export default {
  data() {
    return {
      statistics: {},
    };
  },
  created() {
    statisticsApi.getStatistics()
      .then((statistics) => {
        this.statistics = statistics;
      });
  },
};
