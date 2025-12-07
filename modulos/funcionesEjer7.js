// Módulo: Registro dinámico de productos sin duplicados

// Función que registra productos sin duplicados usando parámetros rest
function registrarProductos(...productos) {
	// Set para almacenar productos ya vistos y detectar duplicados rápidamente
	const vistos = new Set();
	// Arreglo que almacena los productos únicos en orden de inserción
	const resultado = [];

	// Itera sobre cada producto recibido
	for (const producto of productos) {
		// Valida que sea texto, ignora otros tipos de datos
		if (typeof producto !== 'string') continue;

		// Usa el producto como clave para búsqueda de duplicados
		const clave = producto;

		// Si no está en el Set, es nuevo: lo marca como visto y lo agrega al resultado
		if (!vistos.has(clave)) {
			vistos.add(clave);
			resultado.push(producto);
		}
	}

	// Retorna el arreglo con productos únicos
	return resultado;
}

// Exporta la función para que otros módulos la usen (CommonJS)
export default { registrarProductos };
