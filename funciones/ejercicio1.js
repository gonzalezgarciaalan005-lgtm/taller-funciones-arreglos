/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso funciones tradicionales sin parámetros para agrupar mensajes y reutilizarlos varias veces.
 * 2. Entrada esperada: No recibe datos; se llaman mostrarBienvenida() y mostrarTablero().
 * 3. Salida esperada: Mensajes de bienvenida y estado de las cinco máquinas en consola.
 * ========================================== */

function mostrarBienvenida() {
  console.log("Nova Arcade");
  console.log("18:00 - 22:00");
  console.log("Fichas: $2500");
}

mostrarBienvenida();
mostrarBienvenida();

let maquinasOcupadas = 2;

function mostrarTablero() {
  console.log("--- TABLERO ---");

  for (let i = 1; i <= 5; i++) {
    if (i <= maquinasOcupadas) {
      console.log("Máquina " + i + ": OCUPADA");
    } else {
      console.log("Máquina " + i + ": LIBRE");
    }
  }

  console.log("Máquinas libres: " + (5 - maquinasOcupadas));
}

mostrarTablero();
maquinasOcupadas = 5;
mostrarTablero();
