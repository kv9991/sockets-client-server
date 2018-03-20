const toNumber = number => Number(number);
const mapToNumbers = string =>
  string.length > 0 ? string.split(" ").map(toNumber) : []

const reduceMaxNumber = arrayOfNumbers =>
  arrayOfNumbers.reduce((prev, curr) => {
    if (prev === null) return curr;
    if (curr > prev) return curr;
    return prev;
  }, null);

module.exports = numbers => new Promise((resolve, reject) => {
  if (typeof numbers !== "string") return reject("Функция не получила строку");
  return resolve(reduceMaxNumber(mapToNumbers(numbers)))
});
