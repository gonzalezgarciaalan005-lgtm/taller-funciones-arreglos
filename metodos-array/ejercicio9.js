/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso forEach porque solo necesito recorrer la lista e imprimir cada finalista, sin crear otro arreglo.
 * 2. Entrada esperada: Finalistas ["Ana", "Beto", "Caro", "Dani"].
 * 3. Salida esperada: Una línea por finalista con puesto y nombre en mayúsculas.
 * ========================================== */

const finalistas = ["Ana", "Beto", "Caro", "Dani"];

finalistas.forEach((f, i) =>
  console.log(`Puesto ${i + 1}: ${f.toUpperCase()}`)
);
