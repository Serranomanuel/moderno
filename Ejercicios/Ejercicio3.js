import promptSync from 'prompt-sync';
import { calcularPromedio } from '../modulos/index.js';

const prompt = promptSync();

// Función que ejecuta el ejercicio 3: Cálculo de promedio y evaluación de rendimiento
export function ejecutarEjercicio3() {
	console.log("\nPromedio\n");
	
	// Solicita la cantidad de notas a evaluar
	let cantidad = parseInt(prompt("Ingrese la cantidad de notas a evaluar: "));
	let notas = [];

	// Captura cada nota ingresada
	for (let i = 1; i <= cantidad; i++) {
		let nota = parseFloat(prompt(`Ingrese la nota ${i}: `));
		notas.push(nota);
	}

	// Calcula promedio y rendimiento
	let resultado = calcularPromedio(notas);
	
	// Muestra promedio con 2 decimales y rendimiento evaluado
	console.log("Promedio final:", resultado.promedio.toFixed(2));
	console.log("Rendimiento:", resultado.rendimiento);
}