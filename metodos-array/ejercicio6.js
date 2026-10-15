/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso some y every para validar puntajes y revisiones; una arrow function combina las condiciones en un semáforo.
 * 2. Entrada esperada: Ronda [320, 980, 75, 640, 510] y revisión [true, true, false, true, true].
 * 3. Salida esperada: true, false, false y "ROJO".
 * ========================================== */

const ronda = [320, 980, 75, 640, 510];
const revision = [true, true, false, true, true];

const hayEstrella = ronda.some(p => p > 900);
const rondaValida = ronda.every(p => p >= 100);
const todoEnOrden = revision.some(m => !m);

const semaforo = () => {
  if (hayEstrella && rondaValida && todoEnOrden) {
    return "VERDE";
  } else if (!todoEnOrden && rondaValida) {
    return "AMARILLO";
  } else {
    return "ROJO";
  }
};

console.log(hayEstrella);
console.log(rondaValida);
console.log(todoEnOrden);
console.log(semaforo());
