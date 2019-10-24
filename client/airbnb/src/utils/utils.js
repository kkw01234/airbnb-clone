/**
 *
 * @param {Date} value
 */
export const getDateString = (value)  => {
  const month = value.getMonth();
  const date = value.getDate();
  return `${value.getFullYear()}-${month < 10 ? "0" + month :  month}-${
    date < 10 ? "0" + date : date
  }`;
};

export const getCountAllPeople = countPeople => {
  const count = Object.keys(countPeople).reduce((prev, curr) => {
    prev += countPeople[curr];
    return prev;
  }, 0);
  return count;
};
