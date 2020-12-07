import api from '@/utils/api';

export default {
  getStatistics() {
    return api.get('/user/get_self_info')
      .then(({ data }) => {
        const {
          normalThreshold,
          warningThreshold,
          measurements,
          slMean,
          extra,
          dailyStats,
        } = data;

        const statistics = {
          thresholds: {
            ok: normalThreshold,
            warning: warningThreshold,
          },
          x: [],
          y: [],
          average: slMean,
          extra: {
            x: [measurements[measurements.length - 1].time, ...extra.map((i) => i.x)],
            y: [measurements[measurements.length - 1].value, ...extra.map((i) => i.y)],
          },
          dailyStats,
        };

        measurements.forEach((measurement) => {
          statistics.x.push(measurement.time);
          statistics.y.push(measurement.value);
        });

        return statistics;
      });
  },
};
