/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso sort sobre copias para ordenar objetos por puntos o nombre sin modificar la lista original.
 * 2. Entrada esperada: Cinco jugadores con nombre y puntos.
 * 3. Salida esperada: Tercer jugador Isabel, campeón Carlos, top 3 y lista alfabética.
 * ========================================== */

const jugadores = [
  { nombre: "Ana", pts: 320 },
  { nombre: "Carlos", pts: 1200 },
  { nombre: "Isabel", pts: 75 },
  { nombre: "Marcos", pts: 980 },
  { nombre: "Francisco", pts: 510 }
];

console.log("Tercer jugador:", jugadores[2].nombre);

const rankingObj = [...jugadores].sort((a, b) => b.pts - a.pts);
console.log("Campeón:", rankingObj[0].nombre);

const alfabetico = [...jugadores].sort((a, b) =>
  a.nombre.localeCompare(b.nombre)
);

const top3 = rankingObj
  .slice(0, 3)
  .map((j, i) => `${i + 1}. ${j.nombre.toUpperCase()} ${j.pts} pts`);

console.log("Top 3:", top3);
console.log("Alfabético:", alfabetico);
