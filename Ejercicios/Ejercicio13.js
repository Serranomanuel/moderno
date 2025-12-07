import promptSync from 'prompt-sync';
const prompt = promptSync();

import { analizarGastos } from '../modulos/index.js';

// Función que ejecuta el ejercicio 13: Control de gastos y análisis financiero
export function ejecutarEjercicio13() {
    console.clear();
    console.log("\nControl de gastos y análisis financiero\n");

    // Solicita la cantidad de gastos a registrar
    let cantidad = parseInt(prompt("¿Cuántos gastos desea registrar?: "));
    let gastos = [];

    // Captura cada gasto (categoría y monto) en un bucle
    for (let i = 1; i <= cantidad; i++) {
        console.log(`\nGasto ${i}:`);
        let categoria = prompt("Categoría: ");
        let monto = parseFloat(prompt("Monto: "));
        gastos.push({ categoria, monto }); // Guarda el gasto en el arreglo
    }

    // Procesa los gastos: calcula total, categoría más cara y detecta alertas
    const reporte = analizarGastos(gastos);

    // Muestra el reporte financiero
    console.log("\nReporte financiero");
    console.log(`Total gastado: ${reporte.total}`);
    console.log(`Categoría más costosa: ${reporte.categoriaMasCostosa}`);
    
    // Muestra alertas si las hay, sino confirma que no hay desbalances
    if (reporte.alertas.length > 0) {
        console.log("Alertas:");
        reporte.alertas.forEach(a => console.log("- " + a));
    } else {
        console.log("No hay desbalances financieros detectados.");
    }
}