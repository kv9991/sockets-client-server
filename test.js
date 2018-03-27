require("babel-register");
const expect = require("expect.js");
const calculation = require("./calculation");
const log = console.log;

describe("Вычисления", () => {
  it("Функция должна вернуть число 10", (done) => {
    calculation("10 2").then((result) => {
      expect(result).to.be.equal(10);
      done();
    })
      .catch(log);
  });

  it("Функция должна вернуть undefined", (done) => {
    calculation("").then((result) => {
      expect(result).to.be.equal(undefined);
      done();
    })
      .catch(log)
  });

  it("Функция значение не типа String и должна выдать ошибку", (done) => {
    calculation(undefined)
      .catch((err) => {
        expect(err).to.be.equal("Функция не получила строку");
        done();
      })
  });
});