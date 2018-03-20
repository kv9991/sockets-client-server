const toNumber = number => Number(number);
const mapToNumbers = array => array.split(" ").map(toNumber);

const reduceMaxNumber = arrayOfNumbers =>
  arrayOfNumbers.reduce((prev, curr) => {
    if (prev === null) return curr;
    if (curr > prev) return curr;
    return prev;
  }, null);

module.exports = numbers => new Promise((resolve, reject) =>
  resolve(reduceMaxNumber(mapToNumbers(numbers))))
