import promptSync from 'prompt-sync';
import { ordenAsc, ordenDesc } from '../modulos/index.js';

const prompt = promptSync();

// Función que ejecuta el ejercicio 4: Ordenamiento de productos por valor
export function ejecutarEjercicio4() {
	console.log("\nOrden productos\n");
	
	// Solicita cantidad de productos a evaluar
	let cantidad = parseInt(prompt("Ingrese la cantidad de productos a evaluar: "));
	let productos = [];

	// Captura nombre y valor de cada producto
	for (let i = 1; i <= cantidad; i++) {
		let producto = prompt(`Ingrese el nombre del producto ${i}: `);
		let valor = parseFloat(prompt(`Ingrese el valor del producto ${i}: `));
		productos.push({ producto, valor });
	}

	// Crea copia de productos para ordenamiento descendente
	let productosB = [...productos];
	// Ordena en forma ascendente
	let respuestaA = ordenAsc(productos);
	// Ordena en forma descendente
	let respuestaB = ordenDesc(productosB);

	// Muestra resultados del ordenamiento ascendente
	console.log("\nOrden ascendente\n");
	console.log(respuestaA);
	console.log(respuestaA[0]); // Producto más barato
	console.log(respuestaA[respuestaA.length - 1]); // Producto más caro

	// Muestra resultados del ordenamiento descendente
	console.log("\nOrden descendente\n");
	console.log(respuestaB);
	console.log(respuestaB[0]); // Producto más caro
	console.log(respuestaB[respuestaB.length - 1]); // Producto más barato
}





