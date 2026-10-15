/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso una función tradicional con parámetro y retorno porque el precio cambia según la cantidad de fichas.
 * 2. Entrada esperada: Una cantidad numérica de fichas, por ejemplo 4.
 * 3. Salida esperada: El precio total; para 4 fichas devuelve 10000.
 * ========================================== */

function precioPaquete(cantidad) {
  if (cantidad < 5) {
    return cantidad * 2500;
  } else {
    return cantidad * 2000;
  }
}

console.log("1 ficha:", precioPaquete(1));
console.log("4 fichas:", precioPaquete(4));
console.log("5 fichas:", precioPaquete(5));
console.log("12 fichas:", precioPaquete(12));

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
