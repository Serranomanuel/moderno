import promptSync from 'prompt-sync';
const prompt = promptSync();
import { buscarCursos } from '../modulos/index.js';

// Función que ejecuta el ejercicio 8: Búsqueda avanzada en catálogo de cursos
export function ejecutarEjercicio8() {
	console.clear();
	console.log("\nBúsqueda avanzada en catálogo de cursos\n");

	// Catálogo de cursos disponibles
	const catalogo = [
		{ nombre: 'JavaScript Básico', categoria: 'programación', duracion: 10 },
		{ nombre: 'Node.js Avanzado', categoria: 'programación', duracion: 20 },
		{ nombre: 'Photoshop Intermedio', categoria: 'diseño', duracion: 15 },
		{ nombre: 'React Essentials', categoria: 'programación', duracion: 18 },
		{ nombre: 'Figma UI Design', categoria: 'diseño', duracion: 12 },
	];

	// Muestra opciones de búsqueda disponibles
	console.log("Opciones de búsqueda:");
	console.log("1. Por categoría (programación o diseño)");
	console.log("2. Por duración (mayor a X horas)");
	console.log("3. Por coincidencia en nombre");

	let opcion = parseInt(prompt("\nSelecciona una opción (1-3): "));
	let resultados = [];

	// Ejecuta búsqueda según la opción seleccionada
	if (opcion === 1) {
		// Búsqueda por categoría
		let categoria = prompt("Ingresa la categoría: ");
		resultados = buscarCursos(catalogo, c => c.categoria === categoria);
	} else if (opcion === 2) {
		// Búsqueda por duración mínima
		let duracion = parseInt(prompt("Duración mínima: "));
		resultados = buscarCursos(catalogo, c => c.duracion >= duracion);
	} else if (opcion === 3) {
		// Búsqueda por coincidencia en el nombre
		let nombre = prompt("Buscar en nombre: ");
		resultados = buscarCursos(catalogo, c => c.nombre.toLowerCase().includes(nombre.toLowerCase()));
	}

	// Muestra los resultados encontrados
	if (resultados.length > 0) {
		console.log("\nCursos encontrados:");
		resultados.forEach((curso, i) => {
			console.log(`${i + 1}. ${curso.nombre} (${curso.categoria}, ${curso.duracion}h)`);
		});
	} else {
		console.log("\nNo se encontraron cursos que coincidan con tu búsqueda.");
	}
}
