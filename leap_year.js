export const isLeap = (year) => {
  function isDivisibleBy(divider) {
    return year % divider === 0;
  }

  return isDivisibleBy(100) ? isDivisibleBy(400) : isDivisibleBy(4);
};
