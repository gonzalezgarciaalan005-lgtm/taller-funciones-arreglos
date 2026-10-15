/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso encadenamiento filter-sort-map-forEach para seleccionar, ordenar, transformar e imprimir las partidas clasificadas.
 * 2. Entrada esperada: Partidas con nombres y puntos; clasifican las que superan 500 puntos.
 * 3. Salida esperada: Beto 12 tickets, Dani 9 tickets y Emi 5 tickets en orden descendente.
 * ========================================== */

const partidas = [
  { nombre: "Ana", pts: 320 },
  { nombre: "Beto", pts: 1200 },
  { nombre: "Caro", pts: 75 },
  { nombre: "Dani", pts: 900 },
  { nombre: "Emi", pts: 510 },
  { nombre: "Fito", pts: 440 }
];

const nombresJugadores = ["Ana", "Beto", "Caro", "Dani"];

partidas
  .filter(p => p.pts >= 500)
  .sort((a, b) => b.pts - a.pts)
  .map((p, i) => `${i + 1}. ${p.nombre.toUpperCase()} - ${Math.floor(p.pts / 100)} tickets`)
  .forEach(linea => console.log(linea));
