// Módulo: Fusión de usuarios de dos sistemas eliminando duplicados

// Función que fusiona usuarios de dos sistemas y elimina duplicados por documento
export function fusionarUsuarios(usuariosA, usuariosB) {
	// Combina ambos arreglos de usuarios en uno solo
	const fusion = [...usuariosA, ...usuariosB];

	// Arreglo que almacenará usuarios únicos sin duplicados
	const depurado = [];

	// Itera sobre cada usuario de la fusión
	for (let usuario of fusion) {
		// Busca si el usuario ya existe en depurado por documento
		const existente = depurado.find(u => u.documento === usuario.documento);
		if (!existente) {
			// Si no existe, lo añade al arreglo depurado
			depurado.push(usuario);
		} else {
			// Si existe, compara cuál tiene más información completa
			const camposExistente = Object.values(existente).filter(v => v !== undefined && v !== "").length;
			const camposNuevo = Object.values(usuario).filter(v => v !== undefined && v !== "").length;
			// Si el nuevo tiene más campos completos, reemplaza el existente
			if (camposNuevo > camposExistente) {
				const index = depurado.findIndex(u => u.documento === usuario.documento);
				depurado[index] = usuario;
			}
		}
	}

	// Retorna el arreglo de usuarios únicos y con información completa
	return depurado;
}
