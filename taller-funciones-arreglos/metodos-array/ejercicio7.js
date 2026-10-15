/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso sort con comparadores y copias spread para ordenar números sin alterar accidentalmente el arreglo original.
 * 2. Entrada esperada: Llegadas [320, 1200, 75, 900, 510].
 * 3. Salida esperada: Orden alfabético sin comparador, ranking descendente y demostración de mutación.
 * ========================================== */

const llegada = [320, 1200, 75, 900, 510];

const desastre = [...llegada].sort();
console.log("Sin comparador:", desastre);

const ranking = [...llegada].sort((a, b) => b - a);
console.log("Ranking:", ranking);

console.log("Llegada original:", llegada);

llegada.sort((a, b) => b - a);
console.log("Llegada mutada:", llegada);
