import { ref } from '@vue/composition-api';

import statisticsApi from '@/modules/statistics/statistics.api';
import useDraw from '@/modules/statistics/draw.use';

export default {
  setup() {
    const {
      draw,
      canvasContext,
    } = useDraw();

    const statistics = ref({});

    return {
      draw,
      canvasContext,
      statistics,
    };
  },
  created() {
    this.loadStatistics();
  },
  activated() {
    this.loadStatistics();
  },
  mounted() {
    this.canvasContext = this.$refs.canvas.getContext('2d');
  },
  methods: {
    loadStatistics() {
      statisticsApi
        .getStatistics()
        .then((statistics) => {
          this.statistics = statistics;
          this.draw(this.statistics);
        });
    },
  },
};
