// Archivo barril: centraliza y re-exporta todas las funciones de los módulos

// Importa la función de registro de productos

// Importa la función de búsqueda de cursos


// Re-exporta todas las funciones para acceso centralizado desde otros módulos
export { registrarProductos, buscarCursos };

export { validar } from './funcionesEjer1.js';
export { calcularAreaPerimetro } from './funcionesEjer2.js';
export { calcularPromedio } from './funcionesEjer3.js';
export { compare, ordenAsc, ordenDesc } from './funcionesEjer4.js';
export { validarAcceso } from './funcionesEjer5.js';
export { generarTablaMultiplicar } from './funcionesEjer6.js';
import { registrarProductos } from './funcionesEjer7.js';
import { buscarCursos } from './funcionesEjer8.js';
export { procesarPagos } from './funcionesEjer9.js';
export {fusionarUsuarios} from './funcionesEjer10.js';
export {generarResumen} from './funcionesEjer11.js';
export {seleccionarPaciente} from './funcionesEjer12.js';
export * from './funcionesEjer13.js';