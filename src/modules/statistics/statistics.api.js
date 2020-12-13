import api from '@/utils/api';

export default {
  getStatistics() {
    return api
      .get('/user/get_self_info')
      .then(({ data }) => {
        const {
          // eslint-disable-next-line camelcase
          normal_threshold,
          // eslint-disable-next-line camelcase
          warning_threshold,
          measurements,
          // eslint-disable-next-line camelcase
          sl_mean,
          extra,
          // eslint-disable-next-line camelcase
          daily_stats,
        } = data;

        const statistics = {
          thresholds: {
            ok: normal_threshold,
            warning: warning_threshold,
          },
          x: [],
          y: [],
          average: sl_mean,
          extra: {
            x: [measurements[measurements.length - 1].time, ...extra.map((i) => i.x)],
            y: [measurements[measurements.length - 1].value, ...extra.map((i) => i.y)],
          },
          daily_stats,
        };

        measurements.forEach((measurement) => {
          statistics.x.push(measurement.time);
          statistics.y.push(measurement.value);
        });

        return statistics;
      });
  },
};
