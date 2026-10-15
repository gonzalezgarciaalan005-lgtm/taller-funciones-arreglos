/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso ciclos for para recorrer puntajes, calcular acumulados, contar clasificados y localizar el mayor.
 * 2. Entrada esperada: Puntajes [320, 150, 980, 640, 75, 510, 900, 1200].
 * 3. Salida esperada: Total 4375, 5 clasificados, máximo 1200, promedio 546.9 e índice 7.
 * ========================================== */

const puntajes = [320, 150, 980, 640, 75, 510, 900, 1200];

for (let i = 0; i < puntajes.length; i++) {
  console.log(`Partida ${i + 1}: ${puntajes[i]} pts`);
}

let total = 0;
let clasificados = 0;
let mayor = puntajes[0];
let indiceMayor = 0;

for (let i = 0; i < puntajes.length; i++) {
  const puntaje = puntajes[i];
  total += puntaje;

  if (puntaje >= 500) {
    clasificados++;
  }

  if (puntaje > mayor) {
    mayor = puntaje;
    indiceMayor = i;
  }
}

console.log("Total de puntos de la ronda:", total);
console.log("Cuántos clasificados (>= 500):", clasificados);
console.log("Puntaje más alto:", mayor);
console.log("Promedio con un decimal:", (total / puntajes.length).toFixed(1));
console.log("Índice:", indiceMayor, "- Partida:", indiceMayor + 1);
