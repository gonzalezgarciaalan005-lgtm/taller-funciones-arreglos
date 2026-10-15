/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso map porque necesito crear arreglos nuevos transformando cada precio sin alterar el original.
 * 2. Entrada esperada: Precios [2500, 18000, 9000, 4500, 12000].
 * 3. Salida esperada: Precios con descuento, longitudes iguales y precios formateados con el símbolo $.
 * ========================================== */

const precios = [2500, 18000, 9000, 4500, 12000];
const preciosFestival = precios.map(p => p * 0.8);

console.log(precios);
console.log(preciosFestival);

console.log(precios.length, preciosFestival.length);

const preciosTexto = preciosFestival.map(p => "$ " + p);
console.log(preciosTexto);
