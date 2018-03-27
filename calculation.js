const toNumber = number => Number(number);
const mapToNumbers = string =>
  string.length > 0 ? string.split(" ").map(toNumber) : []


const reduceMaxNumber = arrayOfNumbers => {
  let result;

  if (arrayOfNumbers.length) {
    for (let i = 0; i <= arrayOfNumbers.length; i++) {
      if (!result || arrayOfNumbers[i] > result) {
        result = arrayOfNumbers[i];
      }
    }
  }

  return result;
}

module.exports = numbers => new Promise((resolve, reject) => {
  if (typeof numbers !== "string") return reject("Функция не получила строку");
  return resolve(reduceMaxNumber(mapToNumbers(numbers)))
});
