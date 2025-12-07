// Módulo: Validación de acceso según rol y estado

// Función que valida si un usuario tiene acceso según su estado y rol
export function validarAcceso(nombre, estado, rol) {
	let permisos = "";
	let accesoPermitido = false;

	// Verifica si el usuario está activo (normaliza espacios y mayúsculas)
	if (estado && estado.toLowerCase().trim() === "activo") {
		// Normaliza el rol para comparación
		const rolNormalizado = rol ? rol.toLowerCase().trim() : "";

		// Asigna permisos según el rol
		if (rolNormalizado === "admin") {
			permisos = "Permisos de administrador: Acceso total (Crear, Leer, Actualizar, Borrar)";
			accesoPermitido = true;
		} else if (rolNormalizado === "editor") {
			permisos = "Permisos de editor: Acceso parcial (Crear, Leer, Actualizar)";
			accesoPermitido = true;
		} else if (rolNormalizado === "lector") {
			permisos = "Permisos de lector: Acceso de solo lectura (Leer)";
			accesoPermitido = true;
		} else {
			permisos = "Rol no reconocido.";
			accesoPermitido = false;
		}
	} else {
		// Usuario inactivo no tiene acceso
		permisos = "El usuario no está activo.";
		accesoPermitido = false;
	}

	// Retorna objeto con permisos y estado de acceso
	return { permisos, accesoPermitido };
}
