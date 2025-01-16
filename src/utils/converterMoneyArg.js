const converterMoneyArg = (num = 0) =>
  num.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
module.exports = converterMoneyArg;
