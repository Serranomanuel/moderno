import promptSync from 'prompt-sync';
import { calcularSalarioBase, calcularDeducciones, calcularNeto } from '../modulos/index.js';

const prompt = promptSync();

// Función que ejecuta el ejercicio 6: Cálculo de nómina con deducciones
export function ejecutarEjercicio6() {
	console.log("\nNomina\n");
	
	// Solicita el valor de la hora trabajada
	const valorHora = parseInt(prompt("Ingrese el valor de la hora: "));

	// Solicita la cantidad de horas trabajadas
	const horas = parseInt(prompt("Ingrese las horas trabajadas: "));

	// Calcula el salario base multiplicando horas por valor de la hora
	const base = calcularSalarioBase(horas, valorHora);

	// Calcula las deducciones (15% del salario base)
	const deducciones = calcularDeducciones(base);

	// Calcula el salario neto restando deducciones al salario base
	const neto = calcularNeto(base, deducciones);

	// Muestra el reporte de nómina con salario base, deducciones y neto
	console.log(`
    El salario base es: ${base}
    El total deducciones es: ${deducciones}
    El salario neto es: ${neto}
    `);
}