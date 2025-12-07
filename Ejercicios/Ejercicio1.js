import { validar } from '../modulo/index.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Función que ejecuta el ejercicio 1: Validación de asistencia
export function ejecutarEjercicio1() {
	console.log("\nValidación Asistencia\n");
	
	// Solicita la cantidad de aprendices a registrar
	let cantidad = parseInt(prompt("Ingrese la cantidad de aprendices: "));
	// Arreglo que almacena los nombres de los aprendices
	const aprendices = [];
	
	// Captura el nombre de cada aprendiz en un bucle
	for (let i = 0; i < cantidad; i++) {
		let aprendiz = prompt("Ingrese el nombre del estudiante: ");
		aprendices.push(aprendiz);
	}

	// Solicita el nombre a buscar en la lista de asistencia
	let nombre = prompt("Ingrese el nombre a evaluar: ");
	// Valida si el nombre está en la lista de aprendices
	validar(aprendices, nombre);
}