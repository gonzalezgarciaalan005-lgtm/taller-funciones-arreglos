/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso every para comprobar si todas las máquinas funcionan y some para detectar al menos una avería.
 * 2. Entrada esperada: Revisión [true, true, true, false, true, true].
 * 3. Salida esperada: abrir es false, tecnico es true y se imprime "LLAMAR TÉCNICO".
 * ========================================== */

const revision = [true, true, true, false, true, true];

const abrir = revision.every(m => m);
const tecnico = revision.some(m => !m);

if (abrir) {
  console.log("ABRIR");
} else {
  console.log("LLAMAR TÉCNICO");
}
