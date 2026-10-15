/* ==========================================
 * DOCUMENTACIÓN DEL EJERCICIO
 * ==========================================
 * 1. ¿Qué función uso y por qué?: Uso un arreglo y acceso por índices para consultar, modificar y medir un catálogo de juegos.
 * 2. Entrada esperada: Un catálogo con seis nombres de juegos.
 * 3. Salida esperada: Primer y último juego, longitud 6, catálogo modificado y undefined para un índice inexistente.
 * ========================================== */

const catalogo = ["Pac-Man", "Tetris", "Mario Kart", "Sonic", "Space Invaders", "Zelda"];

console.log(catalogo[0]);
console.log(catalogo[catalogo.length - 1]);

console.log(catalogo.length);

catalogo[2] = "EN MANTENIMIENTO";
console.log(catalogo);

console.log(catalogo[10]);
