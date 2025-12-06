import promptSync from 'prompt-sync';
const prompt = promptSync();

import { ejecutarEjercicio1 } from './Ejercicios/Ejercicio1.js';
import { ejecutarEjercicio2 } from './Ejercicios/Ejercicio2.js';
import { ejecutarEjercicio3 } from './Ejercicios/Ejercicio3.js';
import { ejecutarEjercicio4 } from './Ejercicios/Ejercicio4.js';
import { ejecutarEjercicio5 } from './Ejercicios/Ejercicio5.js';
import { ejecutarEjercicio6 } from './Ejercicios/Ejercicio6.js';

console.log("\nMENÚ DE EJERCICIOS\n");
console.log(" 1. Validación Asistencia");
console.log(" 2. Inventario");
console.log(" 3. Promedio");
console.log(" 4. Orden productos");
console.log(" 5. Validacion usuario");
console.log(" 6. Nomina");
console.log()
let opcion = parseInt(prompt("Seleccione el número del ejercicio a ejecutar: "));
console.log()
switch (opcion) {
    case 1:
        console.clear()
        ejecutarEjercicio1();
        break;
    case 2:
        console.clear()
        ejecutarEjercicio2();
        break;
    case 3:
        console.clear()
        ejecutarEjercicio3();
        break;
    case 4:
        console.clear()
        ejecutarEjercicio4();
        break;
    case 5:
        console.clear()
        ejecutarEjercicio5();
        break;
    case 6:
        console.clear()
        ejecutarEjercicio6();
        break;
    default:
        console.log("Opción no válida");
}