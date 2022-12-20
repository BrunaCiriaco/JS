const precoGasolina = 6.90;
const precoEtanol = 5.79;
var tipoCombustivel = 'Etanol'; 
const kmPorLitros = 10;
const distanciaKm= 100;

const litrosGasto = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina'){
    const totalgasto = litrosGasto * precoGasolina
    console.log(totalgasto,tipoCombustivel)
}else if(tipoCombustivel === 'Etanol'){
     const totalgasto = litrosGasto * precoEtanol
     console.log(totalgasto,tipoCombustivel)
}else{
    console.log("Opçao ivalida")
}
