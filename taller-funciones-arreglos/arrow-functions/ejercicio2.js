/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso arrow functions como una caja de herramientas para descuentos, validaciones y cálculos breves.
 * 2. Entrada esperada: Precio 10000, descuento 25, tipo "Minecraft" y saldo 15000.
 * 3. Salida esperada: Precio final 7500, esGratis false y alcanza true.
 * ========================================== */

const esGratis = precio => precio === 0;

const aplicarDescuento = (precio, porcentaje) =>
  precio - (precio * porcentaje / 100);

const redondearArriba = texto => texto.toUpperCase();

const alcanza = (saldo, precio) => saldo >= precio;

const precioOriginal = 10000;
const descuento = 25;
const tipo = "Minecraft";
const saldo = 15000;

const precioFinal = aplicarDescuento(precioOriginal, descuento);

console.log(redondearArriba(tipo));
console.log(precioFinal);
console.log(esGratis(precioFinal));
console.log(alcanza(saldo, precioFinal));
