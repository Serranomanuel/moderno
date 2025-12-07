// Módulo: Procesamiento de pagos con criterios personalizados

// Función que procesa pagos aplicando un criterio de aprobación mediante callback
export function procesarPagos(pagos, callback) {
	// Usa map para transformar cada pago, aplicando el callback como criterio de validación
	return pagos.map(pago => {
		// El callback retorna true si se aprueba, false si se rechaza
		const aprobado = callback(pago);
		// Retorna el pago original con el estado asignado
		return { ...pago, estado: aprobado ? "Aprobado" : "Rechazado" };
	});
}
