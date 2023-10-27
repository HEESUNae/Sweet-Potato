const dayjs = require('dayjs');

export const farmatDate = (date: string) => {
  const now = dayjs(date);
  return `${now.$y}-${now.$M + 1}-${now.$D}`;
};
