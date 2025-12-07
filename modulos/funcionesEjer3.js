// Módulo: Cálculo de promedio y evaluación de rendimiento

// Función que calcula el promedio de notas y determina el rendimiento
export function calcularPromedio(notas) {
	// Suma todas las notas iterando el arreglo
	let suma = 0;
	for (let i = 0; i < notas.length; i++) {
		suma += notas[i];
	}
	
	// Calcula el promedio dividiendo la suma entre la cantidad de notas
	let promedio = suma / notas.length;
	let rendimiento = "";

	// Clasifica el rendimiento según el promedio obtenido
	if (promedio >= 4.0) {
		rendimiento = "Alto";
	} else if (promedio >= 3.0) {
		rendimiento = "Medio";
	} else {
		rendimiento = "Bajo";
	}

	// Retorna objeto con promedio y rendimiento
	return { promedio, rendimiento };
}