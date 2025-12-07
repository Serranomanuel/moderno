import promptSync from 'prompt-sync';
const prompt = promptSync();

// Importa todas las funciones de ejecución de ejercicios
import { ejecutarEjercicio1 } from './Ejercicios/Ejercicio1.js';
import { ejecutarEjercicio2 } from './Ejercicios/Ejercicio2.js';
import { ejecutarEjercicio3 } from './Ejercicios/Ejercicio3.js';
import { ejecutarEjercicio4 } from './Ejercicios/Ejercicio4.js';
import { ejecutarEjercicio5 } from './Ejercicios/Ejercicio5.js';
import { ejecutarEjercicio6 } from './Ejercicios/Ejercicio6.js';
import { ejecutarEjercicio7 } from './Ejercicios/Ejercicio7.js';
import { ejecutarEjercicio8 } from './Ejercicios/Ejercicio8.js';
import { ejecutarEjercicio9 } from './Ejercicios/ejercicio9.js';
import { ejecutarEjercicio10 } from './Ejercicios/Ejercicio10.js';
import { ejecutarEjercicio11 } from './Ejercicios/Ejercicio11.js';
import { ejecutarEjercicio12 } from './Ejercicios/Ejercicio12.js';

// Muestra el menú principal con todas las opciones disponibles
console.log("\nMENÚ DE EJERCICIOS\n");
console.log(" 1. Validación Asistencia");
console.log(" 2. Inventario");
console.log(" 3. Promedio");
console.log(" 4. Orden productos");
console.log(" 5. Validacion usuario");
console.log(" 6. Nomina");
console.log(" 7. Registro productos");
console.log(" 8. Validar contraseña");
console.log(" 9. Registro de pagos");
console.log("10. Fusión de usuarios");
console.log("11. Resumen de mensajes");
console.log("12. Gestión de pacientes por prioridad\n");
console.log();

// Solicita al usuario que seleccione un ejercicio
let opcion = parseInt(prompt("Seleccione el número del ejercicio a ejecutar: "));
console.log();

// Switch que ejecuta el ejercicio seleccionado según la opción ingresada
switch (opcion) {
	case 1:
		console.clear();
		ejecutarEjercicio1();
		break;
	case 2:
		console.clear();
		ejecutarEjercicio2();
		break;
	case 3:
		console.clear();
		ejecutarEjercicio3();
		break;
	case 4:
		console.clear();
		ejecutarEjercicio4();
		break;
	case 5:
		console.clear();
		ejecutarEjercicio5();
		break;
	case 6:
		console.clear();
		ejecutarEjercicio6();
		break;
	case 7:
		console.clear();
		ejecutarEjercicio7();
		break;
	case 8:
		console.clear();
		ejecutarEjercicio8();
		break;
	case 9:
		console.clear();
		ejecutarEjercicio9();
		break;
	case 10:
		console.clear();
		ejecutarEjercicio10();
		break;
	case 11:
		console.clear();
		ejecutarEjercicio11();
		break;
	case 12:
		console.clear();
		ejecutarEjercicio12();
		break;
	default:
		// Mensaje de error si la opción no es válida
		console.log("Opción no válida");
}