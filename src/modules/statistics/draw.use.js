import { ref } from '@vue/composition-api';

export default function useDraw() {
  const canvasContext = ref(null);

  const draw = (statistics) => {
    canvasContext.value.canvas.width = window.innerWidth;
    canvasContext.value.canvas.height = window.innerHeight;

    const { width, height } = canvasContext.value.canvas;

    // const minX = Math.min(...data.x);
    // const maxX = Math.max(...[...data.x, ...data.extra.x]);
    const timestamps = [];

    Object.keys(statistics.daily_stats)
      .forEach((k) => {
        // eslint-disable-next-line camelcase
        const { day_start, day_end } = statistics.daily_stats[k];
        timestamps.push(day_start, day_end);
      });

    const minX = Math.min(...timestamps);
    const maxX = Math.max(...statistics.extra.x);

    const maxY = Math.max(...statistics.y);

    const sizeX = maxX - minX;
    const sizeY = maxY;

    const minBorderX = minX - sizeX * 0.1;
    const maxBorderX = maxX + sizeX * 0.1;

    const minBorderY = 0;
    const maxBorderY = maxY + sizeY * 0.1;

    const scaleX = width / (maxBorderX - minBorderX);
    const scaleY = height / (maxBorderY - minBorderY);

    const x = (value) => (value - minBorderX) * scaleX;
    const y = (value) => height - (value * scaleY);

    const clear = () => {
      canvasContext.value.fillStyle = 'white';
      canvasContext.value.fillRect(0, 0, width, height);
    };

    clear();

    const drawPoint = (xv, yv, color) => {
      canvasContext.value.lineWidth = 1;
      canvasContext.value.strokeStyle = color;
      canvasContext.value.fillStyle = color;
      canvasContext.value.beginPath();
      canvasContext.value.arc(x(xv), y(yv), 5, 0, 2 * Math.PI);
      canvasContext.value.fill();
      canvasContext.value.stroke();
    };

    const drawLine = (x1, y1, x2, y2, lineWidth, color) => {
      canvasContext.value.lineWidth = lineWidth;
      canvasContext.value.strokeStyle = color;
      canvasContext.value.beginPath();
      canvasContext.value.moveTo(x1, y1);
      canvasContext.value.lineTo(x2, y2);
      canvasContext.value.stroke();
    };

    const drawArray = (xv, yv, color) => {
      if (xv.length !== yv.length) {
        throw Error('Data length error');
      }

      canvasContext.value.lineWidth = 3;
      canvasContext.value.strokeStyle = color;

      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < xv.length; i++) {
        canvasContext.value.beginPath();
        canvasContext.value.moveTo(x(xv[i - 1]), y(yv[i - 1]));
        canvasContext.value.lineTo(x(xv[i]), y(yv[i]));
        canvasContext.value.stroke();
      }

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < xv.length; i++) {
        drawPoint(xv[i], yv[i], color);
      }
    };

    const drawText = (xv, yv, text, color) => {
      canvasContext.value.fillStyle = color;
      canvasContext.value.font = '10px serif';
      canvasContext.value.fillText(text, xv, yv);
    };

    const drawZones = () => {
      canvasContext.value.fillStyle = '#FF0000';
      canvasContext.value.fillRect(0, height, width, -height);

      canvasContext.value.fillStyle = '#FFFF00';
      canvasContext.value.fillRect(0, height, width, -scaleY * statistics.thresholds.warning);

      canvasContext.value.fillStyle = '#00FF00';
      canvasContext.value.fillRect(0, height, width, -scaleY * statistics.thresholds.ok);
    };

    drawZones();

    const drawAxes = () => {
      const division = 50;

      canvasContext.value.lineWidth = 1;
      canvasContext.value.strokeStyle = 'black';

      let axis = division;

      while (axis < maxBorderY) {
        canvasContext.value.beginPath();
        canvasContext.value.moveTo(0, y(axis));
        canvasContext.value.lineTo(width, y(axis));
        canvasContext.value.stroke();

        canvasContext.value.fillStyle = 'black';
        canvasContext.value.font = '10px serif';
        canvasContext.value.fillText(`${axis} pts`, 0, y(axis) + 20);

        axis += division;
      }
    };

    drawAxes();

    const drawDays = (stats) => {
      Object.keys(stats)
        .forEach((k) => {
          const {
            // eslint-disable-next-line camelcase
            day_start,
            // eslint-disable-next-line camelcase
            day_end,
            morning,
            evening,
            percentage,
          } = stats[k];

          canvasContext.value.fillStyle = (percentage ? '#afdfa7' : '#ffffff');
          canvasContext.value.fillRect(x(day_start), 0, x(day_end) - x(day_start), height);

          const middleX = (x(day_end) + x(day_start)) / 2;
          drawLine(middleX, 0, middleX, height, 1, 'black');
          drawLine(x(day_end), 0, x(day_end), height, 1, 'black');

          if (morning) {
            // eslint-disable-next-line camelcase
            drawPoint(day_start + 6 * 3600 * 1000, morning, 'yellow');
          }
          if (evening) {
            // eslint-disable-next-line camelcase
            drawPoint(day_start + 18 * 3600 * 1000, evening, 'yellow');
          }

          const text = k.split('.');

          drawText(x(day_start) + 10, height - 10, `${text[0]}.${text[1]}`, 'black');
        });
    };

    drawDays(statistics.daily_stats);

    drawArray(statistics.x, statistics.y, 'black');
    drawArray(statistics.x, statistics.average, 'purple');
    drawArray(statistics.extra.x, statistics.extra.y, 'red');
  };

  return {
    draw,
    canvasContext,
  };
}
