// Acorta el texto de la descripción
const cutText = (text = "", long) =>   text.length > long ? text.substring(0, long) + "..." : text;

// Da formato al precio
const converterMoneyArg = (num = 0) => num.toLocaleString("es-AR", { style: "currency", currency: "ARS" });