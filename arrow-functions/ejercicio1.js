/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso arrow functions con retorno implícito para expresar operaciones cortas de manera clara.
 * 2. Entrada esperada: Números o textos, por ejemplo sumar(4, 5) y etiqueta("Minecraft", 2).
 * 3. Salida esperada: 9, 18 y "Minecraft (piso 2)".
 * ========================================== */

const mitad = n => n / 2;
const sumar = (precio, propina) => precio + propina;
const etiqueta = (lugar, piso) => lugar + " (piso " + piso + ")";

console.log(mitad(9));
console.log(sumar(100, 8));
console.log(etiqueta("Minecraft", 2));
