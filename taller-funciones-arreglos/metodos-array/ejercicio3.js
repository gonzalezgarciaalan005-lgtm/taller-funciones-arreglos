/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso filter porque necesito seleccionar puntajes que cumplen condiciones sin modificar el arreglo original.
 * 2. Entrada esperada: Partidas [320, 980, 75, 640, 500, 1200, 410].
 * 3. Salida esperada: Clasificados [980, 640, 500, 1200], podio [980, 1200], eliminados [320, 75, 410] e imposible [].
 * ========================================== */

const partidas = [320, 980, 75, 640, 500, 1200, 410];

const clasificados = partidas.filter(p => p >= 500);
const podio = partidas.filter(p => p > 900);
const eliminados = partidas.filter(p => p < 500);
const imposible = partidas.filter(p => p > 5000);

console.log("Clasificados:", clasificados);
console.log("Podio:", podio, "Cantidad:", podio.length);
console.log("Eliminados:", eliminados);
console.log("Imposible:", imposible);
