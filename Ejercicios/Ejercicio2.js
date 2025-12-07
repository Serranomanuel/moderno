import { calcularInventario } from '../modulos/index.js';
import promptSync from 'prompt-sync';
const prompt = promptSync();

// Función que ejecuta el ejercicio 2: Cálculo de inventario final
export function ejecutarEjercicio2() {
	console.log("\nInventario\n");
	
	let inicial, vendida, recibida, temporal;
	
	// Bucle de validación: solicita datos hasta que sean válidos
	while (true) {
		temporal = undefined;
		
		// Captura cantidad inicial si aún no se ha ingresado
		if (inicial == undefined) {
			temporal = parseInt(prompt("Ingrese la cantidad inicial: "));
			// Valida que sea un número positivo válido
			if (isNaN(temporal) || temporal < 0) {
				console.log("El valor ingresado no es valido");
				continue;
			} else {
				inicial = temporal;
			}
		}
		
		// Captura cantidad vendida si aún no se ha ingresado
		if (vendida == undefined) {
			temporal = parseInt(prompt("Ingrese la cantidad vendida: "));
			// Valida que sea un número positivo válido
			if (isNaN(temporal) || temporal < 0) {
				console.log("El valor ingresado no es valido");
				continue;
			} else {
				vendida = temporal;
			}
		}
		
		// Captura cantidad recibida si aún no se ha ingresado
		if (recibida == undefined) {
			temporal = parseInt(prompt("Ingrese la cantidad recibida: "));
			// Valida que sea un número positivo válido
			if (isNaN(temporal) || temporal < 0) {
				console.log("El valor ingresado no es valido");
				continue;
			} else {
				recibida = temporal;
			}
		}
		
		// Sale del bucle cuando todos los valores son válidos
		break;
	}
	
	// Calcula el inventario final
	let validacion = calcularInventario(inicial, vendida, recibida);
	console.log(`Inventario final: ${validacion}`);

	// Muestra alerta si el inventario está crítico (menos de 5 unidades)
	if (validacion < 5) {
		console.log("Estado CRITICO, quedan pocos productos");
	} else {
		console.log("Estado estable");
	}
}