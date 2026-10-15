/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso filter para seleccionar juegos por nombre y estado, y map para convertir los disponibles a mayúsculas.
 * 2. Entrada esperada: Arreglos paralelos de juegos y estados.
 * 3. Salida esperada: Lista de juegos disponibles en mayúsculas.
 * ========================================== */

const juegos = ["Pinball", "Galaxia", "Karts", "Zombis", "Laberinto", "Aereo"];
const estados = ["disponible", "mantenimiento", "disponible", "disponible", "mantenimiento", "disponible"];

const cabenRed = juegos.filter(j => j.length <= 8);
const conO = juegos.filter(j => j.toLowerCase().includes("o"));
const disponibles = juegos.filter((juego, i) => estados[i] === "disponible");

const enMantenimientoCount1 = estados.filter(e => e === "mantenimiento").length;
const enMantenimientoCount2 = estados.length - disponibles.length;

const disponiblesMayus = juegos
  .filter((j, i) => estados[i] === "disponible")
  .map(j => j.toUpperCase());

console.log("Disponibles en MAYÚS:", disponiblesMayus);
