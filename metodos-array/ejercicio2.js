/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso map para transformar nombres y puntajes en mayúsculas, posiciones, tickets y etiquetas.
 * 2. Entrada esperada: Juegos y partidas: ["pinball", "karts", "zombis", "laberinto"] y [320, 980, 75, 640].
 * 3. Salida esperada: Nombres en mayúscula, posiciones, [3, 9, 0, 6] y etiquetas con tickets.
 * ========================================== */

const juegos = ["pinball", "karts", "zombis", "laberinto"];
const partidas = [320, 980, 75, 640];

const nombresLed = juegos.map(j => j.toUpperCase());
console.log(nombresLed);

const conPuesto = juegos.map((j, i) => `${i + 1}. ${j.toUpperCase()}`);
console.log(conPuesto);

const tickets = partidas.map(p => Math.floor(p / 100));
console.log(tickets);

const etiquetas = juegos.map((j, i) => `${j.toUpperCase()} - ${tickets[i]} tickets`);
console.log(etiquetas);

console.log(juegos, partidas);
