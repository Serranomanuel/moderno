// Módulo: Generador de resumen de mensajes

// Función que resume un mensaje acortando el contenido si es muy largo
export function generarResumen(mensaje) {
	// Extrae los datos del mensaje recibido
	const { remitente, contenido, fecha } = mensaje;

	// Acorta el contenido a 30 caracteres si es más largo, añade puntos suspensivos
	const contenidoBreve = contenido.length > 30 
		? contenido.slice(0, 30) + "..." 
		: contenido;

	// Retorna objeto con los datos del resumen
	return { remitente, contenido: contenidoBreve, fecha };
}
