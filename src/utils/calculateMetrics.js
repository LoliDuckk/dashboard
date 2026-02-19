const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const calculateMetrics = (rawMetrics) => {
  return rawMetrics.map((metric) => {
    const values = Array.isArray(metric.values) ? metric.values : [];
    const today = values[values.length - 1] ?? 0;
    const yesterday = values[values.length - 2] ?? 0;
    const weekAgoIndex = values.length >= 7 ? values.length - 7 : 0;
    const weekValue = values[weekAgoIndex] ?? 0;

    let percent = 0;
    if (typeof yesterday === "number" && yesterday !== 0) {
      percent = Math.round(((today - yesterday) / Math.abs(yesterday)) * 100);
    } else if (yesterday === 0) {
      percent = today === 0 ? 0 : 100;
    }

    const chart = values.map((value, index) => ({
      day: days[index % days.length],
      value,
    }));

    return {
      ...metric,
      today,
      yesterday,
      weekValue,
      percent,
      chart,
    };
  });
};
