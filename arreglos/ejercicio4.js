/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso splice, unshift, push y reverse para retirar, insertar y reordenar elementos del catálogo.
 * 2. Entrada esperada: Catálogo ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Aereo"].
 * 3. Salida esperada: Retira Karts y Zombis; luego inserta Laberinto y deja el catálogo invertido.
 * ========================================== */

const catalogo = ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Aereo"];

const tamanoInicial = catalogo.length;

const retirados = catalogo.splice(2, 2);
console.log("Retirados:", retirados);
console.log("Catálogo tras retirar:", catalogo);

catalogo.splice(2, 0, "Laberinto");

const pinball = catalogo.shift();
catalogo.push(pinball);

catalogo.reverse();
console.log("Catálogo final invertido:", catalogo);
