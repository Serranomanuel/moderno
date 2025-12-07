// Módulo: Análisis de gastos y detección de desbalances financieros

// Función que analiza gastos, calcula totales por categoría y detecta alertas
export function analizarGastos(gastos) {
	// Calcula el gasto total sumando todos los montos
	const total = gastos.reduce((acc, g) => acc + g.monto, 0);

	// Agrupa los gastos por categoría para obtener el total por cada una
	const categorias = {};
	for (let g of gastos) {
		categorias[g.categoria] = (categorias[g.categoria] || 0) + g.monto;
	}

	// Busca la categoría con el mayor gasto
	let categoriaMasCostosa = null;
	let maxMonto = 0;
	for (let [cat, monto] of Object.entries(categorias)) {
		if (monto > maxMonto) {
			maxMonto = monto;
			categoriaMasCostosa = cat;
		}
	}

	// Detecta alertas: categorías que superan el 40% del gasto total
	const alertas = [];
	for (let [cat, monto] of Object.entries(categorias)) {
		const porcentaje = (monto / total) * 100;
		if (porcentaje > 40) {
			alertas.push(`La categoría "${cat}" supera el 40% del gasto total (${porcentaje.toFixed(2)}%).`);
		}
	}

	// Retorna objeto con total, categoría más costosa y alertas detectadas
	return {
		total,
		categoriaMasCostosa,
		alertas
	};
}
