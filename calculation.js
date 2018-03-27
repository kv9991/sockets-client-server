const toNumber = number => Number(number);
const mapToNumbers = string =>
  string.length > 0 ? string.split(" ").map(toNumber) : []


const reduceMaxNumber = arrayOfNumbers => { // 0
  let result;

  for (let i = 0; i < arrayOfNumbers.length; i++) { // 1
    if (!result || arrayOfNumbers[i] > result) { // 2
      result = arrayOfNumbers[i]; // 3
    }
  }

  return result; // 4
} // 5

module.exports = numbers => new Promise((resolve, reject) => {
  if (typeof numbers !== "string") return reject("Функция не получила строку");
  return resolve(reduceMaxNumber(mapToNumbers(numbers)))
});
