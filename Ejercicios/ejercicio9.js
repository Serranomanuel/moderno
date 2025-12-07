import promptSync from 'prompt-sync';
const prompt = promptSync();
import { procesarPagos } from '../modulos/index.js';

// Función que ejecuta el ejercicio 9: Registro y validación de pagos con criterios personalizados
export function ejecutarEjercicio9() {
    console.log("\nRegistro de pagos\n");

    // Solicita cantidad de pagos a registrar
    let cantidad = parseInt(prompt("¿Cuántos pagos desea registrar?: "));
    let pagos = [];

    // Captura datos de cada pago (id, monto, método)
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nPago ${i}:`);
        let id = prompt("ID del pago: ");
        let monto = parseFloat(prompt("Monto del pago: "));
        let metodo = prompt("Método de pago (tarjeta, efectivo): ");
        pagos.push({ id, monto, metodo });
    }

    // Muestra opciones de criterios de aprobación
    console.log("\nDefina la regla de aprobación\n");
    console.log("1. Aprobar por monto mínimo");
    console.log("2. Aprobar solo pagos con tarjeta");
    console.log("3. Aprobar solo pagos con efectivo");
    console.log("4. Aprobar por coincidencia en ID\n");

    let opcion = parseInt(prompt("Seleccione la regla (1-4): "));
    let callback;

    // Define el callback según el criterio seleccionado
    if (opcion === 1) {
        // Aprueba pagos con monto mayor o igual al mínimo
        let minimo = parseFloat(prompt("Ingrese el monto mínimo: "));
        callback = pago => pago.monto >= minimo;
    } else if (opcion === 2) {
        // Aprueba solo pagos con tarjeta
        callback = pago => pago.metodo.toLowerCase() === "tarjeta";
    } else if (opcion === 3) {
        // Aprueba solo pagos con efectivo
        callback = pago => pago.metodo.toLowerCase() === "efectivo";
    } else if (opcion === 4) {
        // Aprueba pagos con ID exacto
        let idBuscado = prompt("Ingrese el ID a aprobar: ");
        callback = pago => pago.id === idBuscado;
    } else {
        // Si la opción no es válida, rechaza todos
        console.log("Regla no válida. Se rechazarán todos.");
        callback = () => false;
    }

    // Procesa los pagos aplicando el callback
    let resultado = procesarPagos(pagos, callback);

    // Muestra resultados separando aprobados y rechazados
    console.log("\nResultados de validación\n");
    console.log("Pagos aprobados:", resultado.filter(p => p.estado === "Aprobado"));
    console.log("Pagos rechazados:", resultado.filter(p => p.estado === "Rechazado"));
}
