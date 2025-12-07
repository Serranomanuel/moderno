import promptSync from 'prompt-sync';
import { validarAcceso } from '../modulos/index.js';

const prompt = promptSync();

// Función que ejecuta el ejercicio 5: Validación de acceso según rol y estado
export function ejecutarEjercicio5() {
	console.log("\nValidacion usuario\n");
	
	// Solicita datos del usuario (nombre, estado y rol)
	const nombre = prompt("Ingrese su nombre de usuario: ");
	const estado = prompt("¿Cuál es su estado? (activo / inactivo): ");
	const rol = prompt("¿Cuál es su rol? (admin / editor / lector): ");

	// Valida el acceso según los datos ingresados
	const resultado = validarAcceso(nombre, estado, rol);

	// Muestra mensaje personalizado según si el acceso fue permitido o denegado
	if (resultado.accesoPermitido) {
		console.log(`\n¡Bienvenido, ${nombre}!\nAcceso permitido.\n${resultado.permisos}`);
	} else {
		console.log(`\nAcceso denegado para ${nombre}.\nMotivo: ${resultado.permisos}`);
	}
}
