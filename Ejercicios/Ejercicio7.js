function registrarProductos(...productos) {
	const vistos = new Set();
	const resultado = [];

	for (const producto of productos) {
		if (typeof producto !== 'string') continue;

		const clave = producto;

		if (!vistos.has(clave)) {
			vistos.add(clave);
			resultado.push(producto);
		}
	}

	return resultado;
}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = { registrarProductos };
}
