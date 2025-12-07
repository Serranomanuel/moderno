// Módulo: Cálculo de inventario final

// Función que calcula el inventario final considerando ventas y recepciones
function calcularInventario(inicial, vendida, recibida) {
	// Resta las ventas al inventario inicial y suma lo recibido
	return (inicial - vendida) + recibida;
}

// Exporta la función para que otros módulos la usen
export { calcularInventario };
