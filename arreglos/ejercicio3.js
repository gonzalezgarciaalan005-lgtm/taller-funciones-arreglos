/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso push, shift, unshift y pop porque el ejercicio modifica los extremos de una fila.
 * 2. Entrada esperada: Fila inicial ["Ana", "Beto", "Caro", "Dani"].
 * 3. Salida esperada: Se agregan Marcos y Dana, entra SkibidiToilet, sale Dana y se muestra la fila final.
 * ========================================== */

const fila = ["Ana", "Beto", "Caro", "Dani"];

fila.push("Marcos", "Dana");

const jugadorEntra = fila.shift();
console.log("Una máquina está libre, entra:", jugadorEntra);

fila.unshift("SkibidiToilet");
console.log("Entró miembro VIP al inicio de la fila");

const seCanso = fila.pop();
console.log(seCanso + " se cansó y se fue");

console.log(fila);
