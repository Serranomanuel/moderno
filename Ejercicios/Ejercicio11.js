import promptSync from 'prompt-sync';
const prompt = promptSync();
import { generarResumen } from '../modulos/index.js';

// Función que ejecuta el ejercicio 11: Resumen de mensajes
export function ejecutarEjercicio11() {
    console.log("\nResumen de mensajes\n");

    // Solicita datos del mensaje (remitente, contenido y fecha)
    let remitente = prompt("Ingrese el remitente: ");
    let contenido = prompt("Ingrese el contenido del mensaje: ");
    let fecha = prompt("Ingrese la fecha del mensaje: ");

    // Crea objeto con los datos del mensaje
    const mensaje = { remitente, contenido, fecha };

    // Genera resumen acortando el contenido si es necesario
    const resumen = generarResumen(mensaje);

    // Muestra el resumen del mensaje
    console.log(`\n
    Resumen
    Remitente: ${resumen.remitente}
    Contenido: ${resumen.contenido}
    Fecha: ${resumen.fecha}`);
}
