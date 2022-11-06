import dayjs from "dayjs";

const stringDate = (date) => {
  if (!date) return null;

  return dayjs(date).format("YYYY-MM-DD");
};

const diffOfDate = (start, end) => {
  return dayjs(start).diff(dayjs(end)) / (1000 * 60 * 60 * 24) - 1;
};

export { stringDate, diffOfDate };
