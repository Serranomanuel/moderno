import promptSync from 'prompt-sync';
const prompt = promptSync();
import { seleccionarPaciente } from '../modulos/index.js';

// Función que ejecuta el ejercicio 12: Gestión de pacientes por prioridad
export function ejecutarEjercicio12() {
    console.log("\nGestión de pacientes por prioridad\n");

    // Solicita la cantidad de pacientes a registrar
    let cantidad = parseInt(prompt("¿Cuántos pacientes desea registrar?: "));
    let pacientes = [];

    // Captura datos de cada paciente (nombre, edad y prioridad)
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nPaciente ${i}:`);
        let nombre = prompt("Nombre: ");
        let edad = parseInt(prompt("Edad: "));
        let prioridad = parseInt(prompt("Prioridad (número, entre mayor sea el numero más urgente): "));
        pacientes.push({ nombre, edad, prioridad });
    }

    // Selecciona el paciente con mayor prioridad
    const seleccionado = seleccionarPaciente(pacientes);

    // Muestra los datos del paciente seleccionado o notifica si no hay pacientes
    console.log("\nPaciente seleccionado");
    if (seleccionado) {
        console.log(`Nombre: ${seleccionado.nombre}`);
        console.log(`Edad: ${seleccionado.edad}`);
        console.log(`Prioridad: ${seleccionado.prioridad}`);
    } else {
        console.log("No hay pacientes registrados.");
    }
}

