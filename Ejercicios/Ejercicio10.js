import promptSync from 'prompt-sync';
const prompt = promptSync();
import { fusionarUsuarios } from '../modulos/index.js';

// Función que ejecuta el ejercicio 10: Fusión de usuarios de dos sistemas
export function ejecutarEjercicio10() {
    console.log("\nFusión de usuarios\n");

    // Captura usuarios del sistema A (documento, nombre, correo)
    let cantidadA = parseInt(prompt("¿Cuántos usuarios tiene el sistema A?: "));
    let usuariosA = [];
    for (let i = 1; i <= cantidadA; i++) {
        console.log(`\nUsuario A${i}:\n`);
        let documento = prompt("Documento: ");
        let nombre = prompt("Nombre: ");
        let correo = prompt("Correo: ");
        usuariosA.push({ documento, nombre, correo });
    }
    
    // Captura usuarios del sistema B (documento, nombre, teléfono)
    console.log();
    let cantidadB = parseInt(prompt("¿Cuántos usuarios tiene el sistema B?: "));
    let usuariosB = [];
    for (let i = 1; i <= cantidadB; i++) {
        console.log(`\nUsuario B${i}:\n`);
        let documento = prompt("Documento: ");
        let nombre = prompt("Nombre: ");
        let telefono = prompt("Teléfono: ");
        usuariosB.push({ documento, nombre, telefono });
    }

    // Fusiona los usuarios de ambos sistemas
    let resultado = fusionarUsuarios(usuariosA, usuariosB);

    // Muestra la lista final fusionada
    console.log("\nLista final");
    console.log(resultado);
}
