require("babel-register");
const expect = require("expect.js");
const calculation = require("./calculation");

describe("Вычисления", () => {
  it("Функция должна вернуть число 10", (done) => {
    calculation("10 2").then((result) => {
      expect(result).to.be.equal(10);
      done();
    })
  });

  it("Функция должна вернуть null", (done) => {
    calculation("").then((result) => {
      expect(result).to.be.equal(null);
      done();
    })
  });

  it("Функция значение не типа String и должна выдать ошибку", (done) => {
    calculation(undefined)
      .catch((err) => {
        expect(err).to.be.equal("Функция не получила строку");
        done();
      })
  });
});