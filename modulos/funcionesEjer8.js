// Módulo: Búsqueda avanzada en catálogo usando callbacks

// Función que busca cursos en un catálogo aplicando un criterio personalizado (callback)
function buscarCursos(catalogo, callback) {
	// Valida que el catálogo sea un arreglo, retorna vacío si no es válido
	if (!Array.isArray(catalogo)) return [];
	// Valida que el callback sea una función, retorna vacío si no lo es
	if (typeof callback !== 'function') return [];

	// Usa filter con el callback para retornar solo los cursos que cumplan el criterio
	return catalogo.filter(callback);
}

// Exporta la función para que otros módulos la usen (CommonJS)
export default { buscarCursos };