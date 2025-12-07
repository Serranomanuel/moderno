// Módulo: Funciones de ordenamiento de productos

// Función comparadora para ordenar de manera ascendente por valor
export function compare(a, b) {
	// Si a es menor que b, retorna -1 (a va antes)
	if (a.valor < b.valor) {
		console.log("ingresa -1");
		return -1;
	}
	// Si a es mayor que b, retorna 1 (a va después)
	if (a.valor > b.valor) {
		console.log("ingresa 1");
		return 1;
	}
	// Si son iguales, retorna 0 (no cambia orden)
	console.log("Ingresa 0");
	return 0;
}

// Función que ordena productos de forma ascendente usando la función compare
export function ordenAsc(productos) {
	return productos.sort(compare);
}

// Función que ordena productos de forma descendente por valor
export function ordenDesc(productos) {
	return productos.sort((a, b) => b.valor - a.valor);
}