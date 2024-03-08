const { expect } = require("chai");
const { convertDollarsToPesos } = require("../src/app2");
const { convertEurosToPesos } = require("../src/app2");

const { convertDollarsToEuros } = require("../src/app2");
const { convertPesosToEuros } = require("../src/app2");

const { convertEurosToDollars } = require("../src/app2");
const { convertPesosToDollars } = require("../src/app2");

describe("Dollars and Euros to Mexican Pesos tests", () => {
  it("El resultado de convertir 4 dollar es 67.48 pesos", () => {
    const dollars = 4;
    const pesos = convertDollarsToPesos(dollars);
    expect(pesos).to.equal(67.48);
  });

  it("El resultado de convertir 4 euros es 73.6 pesos", () => {
    const euros = 4;
    const pesos = convertEurosToPesos(euros);
    expect(pesos).to.equal(73.6);
  });
});

describe("Dollars and Mexican Pesos to Euros tests", () => {
  it("El resultado de convertir 1 dollar es 0.92 euros", () => {
    const dollars = 1;
    const euros = convertDollarsToEuros(dollars);
    expect(euros).to.equal(0.92);
  });

  it("El resultado de convertir 6 pesos es 0.324 euros", () => {
    const pesos = 6;
    const euros = convertPesosToEuros(pesos);
    expect(euros).to.equal(0.324);
  });
});

describe("Euros and Mexican Pesos to Dollars tests", () => {
  it("El resultado de convertir 8 euro es 8.72 dollars", () => {
    const euros = 8;
    const dollars = convertEurosToDollars(euros);
    expect(dollars).to.equal(8.72);
  });

  it("El resultado de convertir 8 pesos es 0.472 dollars", () => {
    const pesos = 8;
    const dollars = convertPesosToDollars(pesos);
    expect(dollars).to.equal(0.472);
  });
});