import promptSync from 'prompt-sync';
const prompt = promptSync();
import { registrarProductos } from '../modulos/index.js';

// Función que ejecuta el ejercicio 7: Registro dinámico de productos sin duplicados
export function ejecutarEjercicio7() {
	console.log("\nRegistro dinámico de productos\n");

	// Solicita la cantidad de productos a registrar
	let cantidad = parseInt(prompt("¿Cuántos productos desea registrar?: "));
	let productos = [];

	// Captura el nombre de cada producto
	for (let i = 1; i <= cantidad; i++) {
		let producto = prompt(`Ingrese el nombre del producto ${i}: `);
		productos.push(producto);
	}

	// Registra los productos eliminando duplicados
	const resultado = registrarProductos(...productos);

	// Muestra la lista final sin duplicados
	console.log("\nProductos registrados (sin duplicados):");
	resultado.forEach((prod, idx) => console.log(`${idx + 1}. ${prod}`));
}
