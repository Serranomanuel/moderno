// Módulo: Validación de asistencia de aprendices

// Función que busca si un aprendiz está inscrito en la lista
function validar(aprendices, nombre) {
	// Usa some() para buscar coincidencia: retorna true si encuentra al menos uno
	let pregunta = aprendices.some((valor) => {
		if (valor == nombre) {
			return true;
		}
	});
	
	// Asigna mensaje según si fue encontrado o no
	let mensaje = pregunta ? "El aprendiz está inscrito" : "El aprendiz no está inscrito";
	console.log(mensaje);
}

// Exporta la función para que otros módulos la usen
export { validar };