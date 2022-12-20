//Faça um programa para calcular o valor gasto de combustível
//em uma viagem

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaViagemKm = 100;

const litrosGasto = distanciaViagemKm / kmPorLitros
let valor = litrosGasto * precoCombustivel

console.log(valor.toFixed(2))