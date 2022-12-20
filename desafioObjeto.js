/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class Carros{
    marca;
    cor;
    gastoMedio;

    //se for obrigatório precisa do construtor
    constructor (marca, cor, gastoMedio){
        this.marca = marca;//varival local
        this.cor = cor;
        this.gastoMedio = gastoMedio
    }

    gasto(distancia, precoCombustivel){
        const gastos = distancia * this.gastoMedio * precoCombustivel;
        return gastos
    }
}


const t = new Carros('veloster','branco',1/12)
//console.log(t.gasto(70,5))

// desafio 02
/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoas{
    nome;
    altura;
    peso; 

    constructor (nome, peso, altura){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
    classificar(){
        const imc = this.calcularImc();

        if (imc < 18.5 ){
            return(`Imc abaixo ${imc}`)
        } else if (imc >= 18.5 && imc < 25 ){
            return(`Imc normal ${imc}`)
        }else if (imc >= 25 && imc < 30 ){
            return(`Imc acima ${imc}`)
        }else if (imc >= 30 && imc < 40 ){
            return(`obeso ${imc}`)
        }else{
            return('grave')
        }
    }
}

const jose = new Pessoas('jose', 90, 1.70, )
console.log(jose.classificar())