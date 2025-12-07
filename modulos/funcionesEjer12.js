// Módulo: Selección de paciente con mayor prioridad

// Función que selecciona el paciente más urgente según prioridad y edad
export function seleccionarPaciente(pacientes) {
	// Si no hay pacientes, retorna null
	if (pacientes.length === 0) return null;

	// Ordena pacientes por prioridad descendente (mayor urgencia primero)
	// Si la prioridad es igual, ordena por edad descendente (mayor edad primero)
	pacientes.sort((a, b) => {
		if (b.prioridad !== a.prioridad) {
			return b.prioridad - a.prioridad;
		}
		return b.edad - a.edad;
	});

	// Retorna el primer paciente (el más urgente)
	return pacientes[0];
}
