// Módulo: Cálculos de salario (base, deducciones y neto)

// Calcula el salario base multiplicando horas trabajadas por valor de la hora
export const calcularSalarioBase = (horas, valor) => horas * valor;

// Calcula las deducciones como el 15% del salario base
export const calcularDeducciones = salarioBase => salarioBase * (15/100);

// Calcula el salario neto restando deducciones al salario base
export const calcularNeto = (salarioBase, deducciones) => salarioBase - deducciones;
